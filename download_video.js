const fs = require('fs');
const path = require('path');
const ytdl = require('@distube/ytdl-core');

async function download() {
  const url = 'https://www.youtube.com/watch?v=Xjc4AAqztFM';
  const outputPath = path.join(__dirname, 'video', 'banner.mp4');
  console.log('Fetching video info for:', url);

  try {
    const info = await ytdl.getInfo(url);
    console.log('Video title:', info.videoDetails.title);
    
    // Choose format with both video and audio or best combined mp4
    const format = ytdl.chooseFormat(info.formats, { filter: 'audioandvideo', quality: 'highestvideo' });
    console.log('Selected format tag:', format.qualityLabel, format.container);

    const stream = ytdl(url, { format: format });
    const writeStream = fs.createWriteStream(outputPath);

    stream.pipe(writeStream);

    writeStream.on('finish', () => {
      console.log('Successfully saved HD MP4 video to:', outputPath);
    });
    
    stream.on('error', (err) => {
      console.error('Stream error:', err);
    });
  } catch (err) {
    console.error('Error downloading:', err);
  }
}

download();
