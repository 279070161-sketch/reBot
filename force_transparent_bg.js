const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

async function forceTransparentBg(inputName, outputName) {
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

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          if (a > 0) {
            // Check if Seeed green accent (G is significantly brighter than R and B)
            const isSeeedGreen = g > r + 15 && g > b + 15;
            // Check if deep black motor/structure
            const isDeepBlack = r < 35 && g < 35 && b < 35;
            // Check if dark gray metal chassis (e.g. RGB < 50)
            const isDarkChassis = r < 50 && g < 50 && b < 50;

            if (!isSeeedGreen && !isDeepBlack && !isDarkChassis) {
              // Anything else that is light/medium studio gray is part of the studio backdrop card -> WIPE TO TRANSPARENT
              data[i + 3] = 0;
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
  console.log(`Forced transparent background on ${inputName} -> ${outputName}`);
}

async function main() {
  await forceTransparentBg('dm.png', 'rebot_dm_transparent.png');
  await forceTransparentBg('rs.png', 'rebot_rs_transparent.png');
}

main().catch(console.error);
