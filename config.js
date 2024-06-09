const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("233509747946")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://malikmd:malikmd@cluster0.bfc7ce9.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'akk728492@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Pakistan'
global.gurl = 'king-md.db' // Am me 
global.sudo = process.env.SUDO || '233509747946'
global.devs = '233509747946';
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dce77f7538019d05afe65.jpg'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZGYlhQWFNueXQxeGhWMWpTWFdwQjZ5ZGhRZlRYUWg2M2h0U05FZnZWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVZGNGdHb05KZEdhVldXb3RNa1ZyemdVdDk3U0RneGxxcGJYbE5tVHhUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRnVxaG5tcUVLSUdmU2J6bUFqOEFHcFRiejJJSTRrTnc0ZklFN0wrUjJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJja1pKci8xaDUwYi8xN0VVcEhvNkYzNFZKV2h6aXVYZlBIZ1JJdVdhbGhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFbDN4bjRRUDUzQStTVGhYMmRDZkdDOWFZZzVoVURuZUwwbUNzMExaWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBxVXU5ZW5YMllFM3hkazNvS1dNd251R3JVZWZmbExXcGE2ZEgyRFRQbE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVsZkpMbmpJNkpSbTd6U2lXSWdMUTJhUm8wRXBqQktkTEZDem9xMTNHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUW9pVEk3c1IzaUVRM0Rpa2t6UGRpdHpHVlo5MzNSZzZhYXdjOFZmVmJtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkycWxDckVsL0w5ZlprMUMwS1FHV2ZQcW03eDNoOXJ1Sm5QTk1yTWUxVW8zbHVPa1RBTjlpd24vZXIxWDR1Z1pWSE1IOVBaSDRGZHVldCtrSFY1NGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6ImRvUGVDRlpneml4Y05TLzBZWElmY1FpRGJzeTdweVI1QnRwUnA3Y0VrRDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ilh3ZXI5QV9wUzZhdmxsZ2xHdHlsc2ciLCJwaG9uZUlkIjoiYjYxNGU2ZGMtNmIzNi00ZGYyLWJmYWUtODhlNzljMDVlMTBmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBWGpZTVp3NmRyMVJRNXVxQU5VQS9OckdsUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkWlE3K2FlQzcxcVo3QUlueiswcFBjY3g2NUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlpKWkxFSjMiLCJtZSI6eyJpZCI6IjIzMzUwOTc0Nzk0NjoxMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkNkby93SEVQT3Rsck1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRlZsZ0JrTjF4SUpMKzgzVnhTb0VXdGFzYUpGMy9aVzUwRXYrTGc3VWZURT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNzRaQk5RQnpHalhlaFJpaHBFais3RlpVNXp4OWlBMEFsWm9RWXFIZEhTZzhuQ0ZrMGROU3NPMlhTV3h1MVVuWGNnWWg1dkxXL3BSMzgxeUtpNExKQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImgrTEd6KzRqVGQ0S2lXalNLZGRJZmNQcG1ud2J2MFlmVDk3bGg2akhoMXlXMkMyS3QxNi9LN2R5N2tSRGZucURTRHhJWDZiMnpnVmxTT3hqa0xCVmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTA5NzQ3OTQ2OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJWWllBWkRkY1NDUy92TjFjVXFCRnJXckdpUmQvMlZ1ZEJML2k0TzFIMHgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTc5MzM4MjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0RVIn0=",
  botname:   process.env.BOT_NAME === undefined ? 'Am me' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Am me' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'bot' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'malik-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? '' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MALIK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
