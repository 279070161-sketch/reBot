const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

async function processPureCutout(inputName, outputName, armBox) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const imagePath = path.join(__dirname, 'image', inputName);
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  const resultBase64 = await page.evaluate(async ({ src, box }) => {
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

        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const idx = (y * w + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const a = data[idx + 3];

            if (a > 0) {
              // Outside arm bounding box -> transparent studio backdrop
              if (x < box.minX || x > box.maxX || y < box.minY || y > box.maxY) {
                data[idx + 3] = 0;
              } else {
                // Inside bounding box: check if pixel belongs to studio gray floor/background box
                const isGrayscale = Math.abs(r - g) <= 10 && Math.abs(g - b) <= 10;
                
                // Seeed signature green accent color
                const isGreen = g > r + 8 && g > b + 8;
                // Deep black motor/chassis structure
                const isDeepBlack = r < 38 && g < 38 && b < 38;
                // Bright silver metallic highlights
                const isMetallic = r > 150 && g > 150 && b > 150;

                if (!isGreen && !isDeepBlack && isGrayscale && (r > 60 && r < 235)) {
                  // Studio gray background surface
                  data[idx + 3] = 0;
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
  }, { src: base64Image, box: armBox });

  await browser.close();

  const base64Data = resultBase64.replace(/^data:image\/png;base64,/, '');
  const outputPath = path.join(__dirname, 'image', outputName);
  fs.writeFileSync(outputPath, Buffer.from(base64Data, 'base64'));
  console.log(`Saved pure cutout: ${outputName}`);
}

async function main() {
  await processPureCutout('dm.png', 'rebot_dm_transparent.png', { minX: 470, maxX: 730, minY: 280, maxY: 640 });
  await processPureCutout('rs.png', 'rebot_rs_transparent.png', { minX: 470, maxX: 730, minY: 280, maxY: 640 });
}

main().catch(console.error);
