const play = require('play-dl');
const fs = require('fs');
const path = require('path');

async function downloadFull() {
  const url = 'https://www.youtube.com/watch?v=Xjc4AAqztFM';
  const targetPath = path.join(__dirname, 'video', 'banner.mp4');
  console.log('Fetching stream for full YouTube video:', url);

  try {
    const stream = await play.stream(url, { quality: 2 }); // highest quality mp4
    const writeStream = fs.createWriteStream(targetPath);

    stream.stream.pipe(writeStream);

    writeStream.on('finish', () => {
      console.log('FULL video successfully downloaded to:', targetPath);
    });

    stream.stream.on('error', (err) => {
      console.error('Stream error:', err);
    });
  } catch (err) {
    console.error('Error fetching stream:', err);
  }
}

downloadFull();
