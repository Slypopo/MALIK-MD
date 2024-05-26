const { tlang, cmd } = require('../lib'); // Assuming imports are correct

const Config = require('../config');

const axios = require('axios');

const url = 'https://gist.github.com/ALPHAkaveen/f0201bbbc2ca43f10a64aec2dd0d3c92/raw';

cmd({ on: 'text' }, async (Void, citel, text, { isCreator }) => {
  let { data } = await axios.get(url);

  // Check if message text (case-insensitive) matches "Malik"
  if (text.toLowerCase() === 'Malik') {
    for (const vr in data) {
      // Send the first audio clip (assuming "Malik" audio)
      return Void.sendMessage(citel.chat, {
        audio: { url: data[vr] },
        mimetype: 'audio/mpeg',
        ptt: true,
      }, { quoted: citel });
    }
  }
});
