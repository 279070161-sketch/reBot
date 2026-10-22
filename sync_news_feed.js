// News feed snapshot sync for the reBot site.
// Fetches posts tagged "robot-arm" (5679) or "reBot" (5540) from the Seeed
// Studio blog WordPress REST API (comma-separated tags = OR) and writes a
// compact snapshot to news_feed.json (next to index.html). The site falls
// back to this file whenever the live browser-side fetch is blocked by CORS
// (the blog currently returns a comma-joined Access-Control-Allow-Origin
// header that browsers reject).
//
// Usage:  node sync_news_feed.js [--out <path>] [--count <n>] [--verbose]
// Output: news_feed.json  { generated, source, posts: [{title, excerpt, link, date, image}] }
const https = require('https');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const argVal = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : def;
};
const OUT_FILE = path.resolve(__dirname, argVal('--out', 'news_feed.json'));
const PER_PAGE = Number(argVal('--count', 6));
const VERBOSE = args.includes('--verbose');

const NEWS_TAGS = '5679,5540'; // robot-arm, reBot
const API_URL = 'https://www.seeedstudio.com/blog/wp-json/wp/v2/posts?tags=' + NEWS_TAGS +
  '&per_page=' + PER_PAGE + '&_embed=1';
const FALLBACK_URL = 'https://www.seeedstudio.com/blog/tag/rebot/';

const ENTITIES = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&apos;': "'",
  '&nbsp;': ' ', '&mdash;': '—', '&ndash;': '–', '&hellip;': '…',
  '&rsquo;': '’', '&lsquo;': '‘', '&rdquo;': '”', '&ldquo;': '“',
  '&#8217;': '’', '&#8216;': '‘', '&#8220;': '“', '&#8221;': '”',
  '&#8230;': '…', '&#8211;': '–', '&#8212;': '—'
};

function stripHtml(html) {
  return (html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-zA-Z#0-9]+;/g, m => (ENTITIES[m] !== undefined ? ENTITIES[m] : ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function isRendered(obj) {
  return obj && typeof obj === 'object' && 'rendered' in obj ? obj.rendered : obj;
}

function pickImage(post) {
  const emb = post._embedded && post._embedded['wp:featuredmedia'];
  if (emb && emb[0] && emb[0].media_details && emb[0].media_details.sizes) {
    const s = emb[0].media_details.sizes;
    const pick = s.medium_large || s.medium || s.large || s.full;
    if (pick && pick.source_url) return pick.source_url;
  }
  const urls = post.featured_image_urls || {};
  const pick2 = urls.medium_large || urls.medium || urls.large || urls.full;
  if (Array.isArray(pick2) && pick2[0]) return pick2[0];
  return null;
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) rebot-news-sync/1.0' },
      timeout: 30000
    }, res => {
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error('HTTP ' + res.statusCode + ' for ' + url));
      }
      let raw = '';
      res.setEncoding('utf8');
      res.on('data', c => { raw += c; });
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); } catch (e) { reject(new Error('invalid JSON: ' + e.message)); }
      });
    });
    req.on('timeout', () => req.destroy(new Error('request timeout')));
    req.on('error', reject);
  });
}

getJson(API_URL)
  .then(posts => {
    if (!Array.isArray(posts) || posts.length === 0) throw new Error('empty response from API');
    const compact = posts.map(p => {
      const title = stripHtml(isRendered(p.title)) || 'Untitled';
      let excerpt = stripHtml(isRendered(p.excerpt));
      if (!excerpt) excerpt = stripHtml(isRendered(p.content)).slice(0, 200);
      return {
        title,
        excerpt,
        link: p.link || FALLBACK_URL,
        date: p.date || '',
        image: pickImage(p)
      };
    });
    const snapshot = {
      generated: new Date().toISOString(),
      source: API_URL,
      posts: compact
    };
    fs.writeFileSync(OUT_FILE, JSON.stringify(snapshot, null, 2), 'utf8');
    console.log(`[news-sync] OK — ${compact.length} posts written to ${OUT_FILE}`);
    if (VERBOSE) compact.forEach((p, i) => console.log(`  ${i + 1}. [${p.date.slice(0, 10)}] ${p.title}${p.image ? '' : '  (no image)'}`));
  })
  .catch(err => {
    console.error('[news-sync] FAILED:', err.message);
    process.exit(1);
  });