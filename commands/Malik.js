const { tlang,cmd } = require('../lib')

const Config = require('../config')

const axios = require('axios')



const url = 'github.com/arkhan998/MALIK-MD/blob/main/Themes/auto_voice/Hacker status | ???? Bgm Ringtone | ???? Hacker Attitude status | #shorts?raw=true'



cmd({ on: "text" }, async (Void,citel,text,{isCreator})=> {

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
