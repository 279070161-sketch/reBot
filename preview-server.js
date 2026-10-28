// Minimal zero-dependency static file server for the reBot site preview.
// Usage: node preview-server.js <siteRoot> <port>
// 2026-10-20: recreated (previous copy was lost); ETag/304 + correct MIME map.
const http = require('http');
const fs = require('fs');
const path = require('path');

const siteRoot = path.resolve(process.argv[2] || '.');
const port = Number(process.argv[3] || 4173);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.jfif': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.wasm': 'application/wasm',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json'
};

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    if (urlPath === '/') urlPath = '/index.html';
    const filePath = path.join(siteRoot, path.normalize(urlPath));
    if (!filePath.startsWith(siteRoot)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    fs.stat(filePath, (err, st) => {
      if (err || !st.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' }).end('404 Not Found');
        return;
      }
      const etag = '"' + st.size.toString(16) + '-' + st.mtimeMs.toString(16) + '"';
      if (req.headers['if-none-match'] === etag) {
        res.writeHead(304, { ETag: etag, 'Cache-Control': 'no-cache' });
        res.end();
        return;
      }
      const range = req.headers.range;
      const contentType = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : st.size - 1;
        const chunksize = (end - start) + 1;
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${st.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType,
          'ETag': etag,
          'Cache-Control': 'no-cache'
        });
        fs.createReadStream(filePath, { start, end }).pipe(res);
        return;
      }
      res.writeHead(200, {
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Content-Length': st.size,
        'ETag': etag,
        'Cache-Control': 'no-cache'
      });
      fs.createReadStream(filePath).pipe(res);
    });
  } catch (e) {
    res.writeHead(500).end('Server Error');
  }
});

server.listen(port, () => {
  console.log(`[preview] serving ${siteRoot} at http://localhost:${port}/`);
});