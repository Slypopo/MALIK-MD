const makeWASocket = require('@whiskeysockets/baileys');

const bot = makeWASocket();

bot.on('message', async (message) => {
  if (message.body === 'Malik') {
    const audioBuffer = await fetchAudioFile('path/to/your/audio/file.mp3');
    bot.sendMessage(message.from, audioBuffer, { audio: true });
  }
});

async function fetchAudioFile(filePath) {
  // Implement your logic to read the audio file and return the audio buffer
  // You can use fs.readFile or any other library to read the file
  // Return the audio buffer
}
```
Make sure to replace `'path/to/your/audio/file.mp3'` with the actual path to your audio file.

Also, make sure to implement the `fetchAudioFile` function to read the audio file and return the audio buffer.

You can use the `fs` library to read the file, for example:
```
const fs = require('fs');

async function fetchAudioFile(filePath) {
  const audioBuffer = await fs.readFile(filePath);
  return audioBuffer;
  }
