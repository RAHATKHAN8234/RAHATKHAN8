module.exports.config = {
  name: "poricoy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rahat",
  description: "Simple Banglish Ai Chatbot",
  commandCategory: "Ai Robot",
  usages: "/meta [typeinBanglish]",
  cooldowns: 2,
  dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {

  const axios = require('axios');

if (args.join() == "") { 
    return api.sendMessage(`
     ╭────────────────╮
   🌸𝐄𝐯𝐞𝐫𝐲 𝐌𝐮𝐬𝐥𝐢𝐦𝐬 𝐈𝐝𝐞𝐧𝐭𝐢𝐭𝐲🌸
     ╰────────────────╯

𝙽𝚊𝚖𝚎                     : 𝐌𝐮𝐬𝐥𝐢𝐦.
𝙵𝚊𝚝𝚑𝚎𝚛'𝚜 𝙽𝚊𝚖𝚎    : 𝐀𝐝𝐨𝐦 (A.S:)
𝙲𝚛𝚎𝚊𝚝𝚘𝚛               : 𝐀𝐥𝐥𝐚𝐡
𝙸𝚍𝚎𝚊𝚕                   : 𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 (S.A.W.) 
𝙷𝚘𝚕𝚢 𝙱𝚘𝚘𝚔           : 𝐐𝐮𝐫𝐚𝐧 
𝚁𝚎𝚕𝚒𝚐𝚒𝚘𝚗            : 𝐈𝐬𝐥𝐚𝐦 
𝙸𝚍𝚎𝚗𝚝𝚒𝚝𝚢            : لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله‎ 
𝙷𝚘𝚋𝚋𝚒𝚎𝚜               : 𝐍𝐚𝐦𝐚𝐳 𝟓 𝐭𝐢𝐦𝐞𝐬 𝐚 𝐝𝐚𝐲 
𝙿𝚛𝚎𝚜𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜   : 𝐃𝐮𝐧𝐢𝐲𝐚 
𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜 : 𝐉𝐚𝐧𝐧𝐚𝐭 (𝐈𝐧 𝐬𝐡𝐚 𝐚𝐥𝐥𝐚𝐡) update of 👉༆KHAN RAHUL RK༄👈.`, event.threadID, event.messageID)}

  else {
    let uint = encodeURI(args.join(' '));
  const res = await axios.get(`https://simsimi.info/api/?text=${uint}&lc=bn`);
  var d1 = res.data.message
  return api.sendMessage(`${d1}`, event.threadID, event.messageID)

  }



}
