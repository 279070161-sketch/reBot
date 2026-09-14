const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://yang-ci.github.io/ReBot_Arm_web_RS/';
const targetDir = path.join(__dirname, 'sim_web');

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// List of all assets fetched by ReBot_Arm_web_RS
const assets = [
  'index.html',
  'mujoco_wasm.wasm',
  'mujoco_wasm.js',
  'rs_grasp_scene.xml',
  'assets/index-C1mUAY_x.js',
  'assets/index-bjpUEdg1.css',
  'assets/index-D7U4Sg5v.css',
  'b601_rs.xml'
];

function fetchFile(relPath) {
  return new Promise((resolve) => {
    const url = baseUrl + relPath;
    const destPath = path.join(targetDir, relPath);
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        fetchFile(res.headers.location).then(resolve);
        return;
      }
      if (res.statusCode !== 200) {
        console.log(`[${res.statusCode}] ${relPath}`);
        return resolve(false);
      }
      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`[OK] ${relPath}`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.log(`[ERR] ${relPath}: ${err.message}`);
      resolve(false);
    });
  });
}

async function run() {
  for (const a of assets) {
    await fetchFile(a);
  }
  console.log('Download attempt finished.');
}

run();
