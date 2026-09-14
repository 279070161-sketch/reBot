const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://yang-ci.github.io/ReBot_Arm_web_RS/';
const targetDir = path.join(__dirname, 'ReBot_Arm_web_RS');

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
if (!fs.existsSync(path.join(targetDir, 'assets'))) fs.mkdirSync(path.join(targetDir, 'assets'), { recursive: true });

function downloadFile(relPath) {
  return new Promise((resolve, reject) => {
    const fileUrl = baseUrl + relPath;
    const destPath = path.join(targetDir, relPath);
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    https.get(fileUrl, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        console.error(`Failed ${fileUrl}: Status ${res.statusCode}`);
        return resolve(false);
      }
      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Downloaded ${relPath}`);
        resolve(true);
      });
    }).on('error', err => {
      console.error(`Error ${fileUrl}:`, err.message);
      resolve(false);
    });
  });
}

async function main() {
  await downloadFile('index.html');
  await downloadFile('assets/index-C1mUAY_x.js');
  await downloadFile('assets/index-bjpUEdg1.css');

  const jsPath = path.join(targetDir, 'assets', 'index-C1mUAY_x.js');
  if (fs.existsSync(jsPath)) {
    const jsContent = fs.readFileSync(jsPath, 'utf8');
    const regex = /assets\/[a-zA-Z0-9_\-\.]+\.(wasm|xml|stl|png|jpg|jpeg|svg|json|bin)/g;
    const matches = Array.from(new Set(jsContent.match(regex) || []));
    console.log(`Found ${matches.length} assets in JS bundle:`, matches);

    for (const match of matches) {
      await downloadFile(match);
    }
  }
}

main();
