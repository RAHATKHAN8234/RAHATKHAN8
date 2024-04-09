const fs = require("fs");
module.exports.config = {
  name: "jumma",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "RAHAT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("jumma") ||
     react.includes("জুম্মা") || 
react.includes("jummah mubarak") || 
react.includes("জুম্মা মোবারক") ||
react.includes("শুক্রবার")) {
    var msg = {
        body: " 𝐉𝐮𝐦𝐦𝐚𝐡 𝐌𝐮𝐛𝐚𝐫𝐚𝐤🌹 ❥᭄★★★★★★★★★★★❥᭄ꦿꕥ⑅⃝»̶̶͓͓̽̽̽আসসালামু আলাইকুম-!!🥰🍀 : ~!!-🥀আজ শুক্রবার😘পবিত্র জুম্মারদিন,,,,,এই জুম্মার  উছিলায়,,,সকল মুসলিম কে মাফ করে দেন,,,, আমিন💗💗💗আল্লাহ তুমি এই পৃথিবীর সকল মানুষের,,,,নামাজ পড়ার তৌফিক দান করো আমিন 🤲🤲 !!"
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍁", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
