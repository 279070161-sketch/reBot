const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

async function cleanStudioBox(inputName, outputName) {
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
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Strip the gray rounded studio backdrop box
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          if (a > 0) {
            // Check if pixel is part of the monochrome studio backdrop box
            const isGrayscale = Math.abs(r - g) <= 5 && Math.abs(g - b) <= 5 && Math.abs(r - b) <= 5;
            
            // Studio backdrop box is grayscale and semi-transparent or soft gray
            if (isGrayscale && a < 250) {
              data[i + 3] = 0; // Strip studio backdrop
            } else if (isGrayscale && r > 45 && r < 240 && a >= 250) {
              // Check if it's backdrop or mechanical arm
              // Background studio box has low contrast uniform gray
              // Let's check surrounding area or luminance
              if (r > 60 && r < 235) {
                // If it's part of the box border/shadow
                data[i + 3] = 0;
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
  console.log(`Cleaned ${inputName} -> ${outputName}`);
}

async function main() {
  await cleanStudioBox('dm.png', 'dm_transparent.png');
  await cleanStudioBox('rs.png', 'rs_transparent.png');
}

main().catch(console.error);
