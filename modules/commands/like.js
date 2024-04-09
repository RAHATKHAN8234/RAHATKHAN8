const fs = require("fs");
module.exports.config = {
  name: "I like you",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "RAHAT", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "user",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("I like you")==0 || (event.body.indexOf("I like you robot")==0 || (event.body.indexOf("I like u")==0 || (event.body.indexOf("  like you ")==0)))) {
    var msg = {
        body: ` 𝙸  𝚊𝚕𝚜𝚘  𝙻𝚒𝚔𝚎  𝚢𝚘𝚞  𝚋𝚊𝚋𝚢

চলো প্রেম আমরা করি👻 `
      }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
