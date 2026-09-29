const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

async function removeStudioBoxFloodfill(inputName, outputName) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const imagePath = path.join(__dirname, 'image', inputName);
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  const resultBase64 = await page.evaluate(async (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const w = img.width;
        const h = img.height;
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        // Floodfill algorithm starting from all outer background box points
        const visited = new Uint8Array(w * h);
        const queue = [];

        // Add starting points along the outer rim of the box
        for (let x = 0; x < w; x += 5) {
          for (let y = 0; y < h; y += 5) {
            const idx = (y * w + x) * 4;
            const a = data[idx + 3];
            if (a > 0) {
              const r = data[idx];
              const g = data[idx + 1];
              const b = data[idx + 2];
              // Background box pixels are grayscale / light studio gray
              const isGrayscale = Math.abs(r - g) <= 8 && Math.abs(g - b) <= 8 && Math.abs(r - b) <= 8;
              // Check if not colorful arm part (arm has green / yellow accent or dark metallic structure)
              if (isGrayscale || a < 250) {
                // If it's near the top/bottom/sides of the box before hitting arm
                if (y < 260 || y > 680 || x < 450 || x > 750) {
                  const p = y * w + x;
                  visited[p] = 1;
                  queue.push(p);
                }
              }
            }
          }
        }

        // BFS flood fill to wipe all connected box pixels
        while (queue.length > 0) {
          const curr = queue.shift();
          const cx = curr % w;
          const cy = Math.floor(curr / w);
          const cidx = curr * 4;

          data[cidx + 3] = 0; // Make transparent

          // Check 4 neighbors
          const neighbors = [
            [cx + 1, cy],
            [cx - 1, cy],
            [cx, cy + 1],
            [cx, cy - 1]
          ];

          for (const [nx, ny] of neighbors) {
            if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
              const np = ny * w + nx;
              if (!visited[np]) {
                const nidx = np * 4;
                const na = data[nidx + 3];
                if (na > 0) {
                  const nr = data[nidx];
                  const ng = data[nidx + 1];
                  const nb = data[nidx + 2];
                  const isGrayscale = Math.abs(nr - ng) <= 12 && Math.abs(ng - nb) <= 12;

                  // Stop flood fill if we reach green Seeed accent or dark non-grayscale arm components
                  // Seeed green has high G channel relative to R and B
                  const isSeeedGreen = ng > nr + 20 && ng > nb + 20;
                  const isArmComponent = !isGrayscale && na === 255;

                  if (!isSeeedGreen && !isArmComponent) {
                    visited[np] = 1;
                    queue.push(np);
                  }
                }
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = src;
    });
  }, base64Image);

  await browser.close();

  const base64Data = resultBase64.replace(/^data:image\/png;base64,/, '');
  const outputPath = path.join(__dirname, 'image', outputName);
  fs.writeFileSync(outputPath, Buffer.from(base64Data, 'base64'));
  console.log(`Floodfill cleaned ${inputName} -> ${outputName}`);
}

async function main() {
  await removeStudioBoxFloodfill('dm.png', 'dm_clean_cutout.png');
  await removeStudioBoxFloodfill('rs.png', 'rs_clean_cutout.png');
}

main().catch(console.error);
