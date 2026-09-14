const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'video', '8月28日.mp4');
const outputPath = path.join(__dirname, 'video', 'banner.mp4');

console.log('Compressing video into lightweight 12MB web video for GitHub Pages CDN...');

// crf 26, scale 1920:1080, faststart
const cmd = `"${ffmpeg}" -y -i "${inputPath}" -c:v libx264 -crf 26 -preset fast -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" -an -movflags +faststart "${outputPath}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  const stats = fs.statSync(outputPath);
  console.log(`\nCompression completed! Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
} catch (err) {
  console.error('Compression failed:', err);
}
