const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

async function processPureCutoutV3(inputName, outputName) {
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

        // BFS flood fill starting from outer edge (0,0), (w-1, 0), etc.
        const visited = new Uint8Array(w * h);
        const queue = [];

        // Add edge seeds
        for (let x = 0; x < w; x++) {
          queue.push(x); // top edge
          queue.push((h - 1) * w + x); // bottom edge
          visited[x] = 1;
          visited[(h - 1) * w + x] = 1;
        }
        for (let y = 0; y < h; y++) {
          queue.push(y * w); // left edge
          queue.push(y * w + (w - 1)); // right edge
          visited[y * w] = 1;
          visited[y * w + (w - 1)] = 1;
        }

        while (queue.length > 0) {
          const curr = queue.shift();
          const cx = curr % w;
          const cy = Math.floor(curr / w);
          const cidx = curr * 4;

          data[cidx + 3] = 0; // WIPE background pixel

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

                if (na === 0) {
                  // Transparent pixel - continue flood fill
                  visited[np] = 1;
                  queue.push(np);
                } else {
                  const nr = data[nidx];
                  const ng = data[nidx + 1];
                  const nb = data[nidx + 2];

                  // Check if this pixel belongs to studio background box or arm subject
                  // Seeed green accent: G is distinctly higher than R and B
                  const isSeeedGreen = ng > nr + 15 && ng > nb + 15;
                  // Arm black metal body: deep dark RGB < 35
                  const isBlackMetal = nr < 35 && ng < 35 && nb < 35;
                  // Arm silver metal component: high specular brightness non-grayscale or high contrast
                  const isSilverMetal = nr > 160 && ng > 160 && nb > 160 && Math.abs(nr - ng) > 3;

                  const isArmSubject = isSeeedGreen || isBlackMetal || isSilverMetal;

                  if (!isArmSubject) {
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
  console.log(`Saved V3 pure cutout: ${outputName}`);
}

async function main() {
  await processPureCutoutV3('dm.png', 'rebot_dm_transparent.png');
  await processPureCutoutV3('rs.png', 'rebot_rs_transparent.png');
}

main().catch(console.error);
