const fs = require("fs");
module.exports.config = {
  name: "I love you",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "RAHAT", 
  description: "no prefix",
  commandCategory: "love you",
  usages: "user",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("I love you")==0 || (event.body.indexOf("love you")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("Love u")==0)))) {
    var msg = {
        body: `𝙸 𝚕𝚘𝚟𝚎 𝚢𝚘𝚞 𝚝𝚘𝚘 𝚜𝚘𝚗𝚊

🥶 🥶চলো চিপায় যাই  🥶 🥶
            `
      }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
