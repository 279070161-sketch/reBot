const fs = require('fs');
const path = require('path');

const urls = [
  { key: 'orbbec_gemini_2', url: 'https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html' },
  { key: 'orbbec_gemini_336', url: 'https://www.seeedstudio.com/Orbbec-Gemini-336-3D-Camera-3D-p-6662.html' },
  { key: 'realsense_d435i', url: 'https://www.seeedstudio.com/Intel-RealSense-Depth-Camera-D435i-p-4423.html' },
  { key: 'realsense_d405', url: 'https://www.seeedstudio.com/RealSense-D405-3D-Camera-p-6758.html' },
  { key: 'usb_camera_s231', url: 'https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html' },
  { key: 'power_adapter_dm', url: 'https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html' },
  { key: 'dm4340p_actuator', url: 'https://www.seeedstudio.com/DM4340P-Actuator-p-6663.html' },
  { key: 'damiao_4310_motor', url: 'https://www.seeedstudio.com/Damiao-4310-Actuator-Motor-p-6823.html' }
];

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
};

const outDir = path.join(__dirname, 'image');

async function downloadAll() {
  for (const item of urls) {
    try {
      console.log(`Fetching HTML for ${item.key}...`);
      const res = await fetch(item.url, { headers });
      const html = await res.text();
      
      let imgUrl = null;
      const match1 = html.match(/property=["']og:image["']\s+content=["']([^"']+)["']/i);
      const match2 = html.match(/content=["']([^"']+)["']\s+property=["']og:image["']/i);
      
      if (match1) imgUrl = match1[1];
      else if (match2) imgUrl = match2[1];

      if (imgUrl) {
        console.log(`Found image URL for ${item.key}: ${imgUrl}`);
        const imgRes = await fetch(imgUrl, { headers });
        const buffer = await imgRes.arrayBuffer();
        const destPath = path.join(outDir, `${item.key}.jpg`);
        fs.writeFileSync(destPath, Buffer.from(buffer));
        console.log(`[SUCCESS] Saved ${buffer.byteLength} bytes to ${destPath}`);
      } else {
        console.log(`[WARNING] Could not find og:image for ${item.key}`);
      }
    } catch (err) {
      console.error(`Error processing ${item.key}:`, err.message);
    }
  }
}

downloadAll();
