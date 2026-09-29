const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

async function processImage(imageName, outputName) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const imagePath = path.join(__dirname, 'image', imageName);
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

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Check if background gray studio tone (light gray near white)
          if (r > 200 && g > 200 && b > 200 && Math.abs(r - g) < 20 && Math.abs(g - b) < 20) {
            const avg = (r + g + b) / 3;
            if (avg > 232) {
              data[i + 3] = 0; // Fully transparent
            } else {
              // Smooth edge transition
              const alpha = Math.max(0, Math.min(255, (232 - avg) * 8));
              data[i + 3] = alpha;
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
  console.log(`Saved transparent image to ${outputName}, size: ${fs.statSync(outputPath).size} bytes`);
}

async function main() {
  await processImage('rebot_arm_dm.png', 'rebot_arm_dm_nobg.png');
  await processImage('rebot_arm_rs.png', 'rebot_arm_rs_nobg.png');
}

main().catch(console.error);
