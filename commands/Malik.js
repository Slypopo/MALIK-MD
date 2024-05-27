const { tlang, cmd } = require('../lib');

const Config = require('../config');

const axios = require('axios');

const url = 'https://gist.github.com/arkhan998/82e85e344457386b0c957c770e55d125/raw';

cmd({ on: 'text' }, async (Void, citel, text, { isCreator }) => {
  let { data } = await axios.get(url);

  // Check for variations of "Hi" (case-insensitive)
  const greetings = ['hi', 'hey', 'hello']; // Add more variations if needed
  if (greetings.some(greeting => text.toLowerCase().includes(greeting))) {
    // Send the first audio clip (assuming "Hi" audio)
    return Void.sendMessage(citel.chat, {
      audio: { url: data[Object.keys(data)[0]] }, // Access first audio clip
      mimetype: 'audio/mpeg',
      ptt: true,
    }, { quoted: citel });
  }
});
