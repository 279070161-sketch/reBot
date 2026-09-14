const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'sim_web');
const destDir = path.join(__dirname, 'ReBot_Arm_web_RS');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    if (!fs.existsSync(path.dirname(dest))) fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

copyRecursiveSync(srcDir, destDir);

// Create dummy sw.js in ReBot_Arm_web_RS
const swPath = path.join(destDir, 'sw.js');
const swContent = `// ServiceWorker passthrough
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
`;

fs.writeFileSync(swPath, swContent, 'utf8');
console.log('Copied files to ReBot_Arm_web_RS and created sw.js successfully.');
