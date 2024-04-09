const fs = require("fs");
module.exports.config = {
  name: "Bangladesh",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "RAHAT", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Bangladesh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("বাংলাদেশের")==0 || event.body.indexOf("Bangladesh")==0 || event.body.indexOf("bangladesh")==0 || event.body.indexOf("bd")==0) {
    var msg = {
        body: "আমার সোনার বাংলা আমার সোনার বাংলা, আমি তোমায় ভালবাসি| চিরদিন তোমার আকাশ, তোমার বাতাস আমার প্রাণে বাজায় বাঁশি। ও মা, ফাগুনে তোর আমের বনে ঘ্রাণে পাগল করে-- মরি হায়, হায় রে ও মা, অঘ্রানে তোর ভরা খেতে, আমি কী দেখেছি মধুর হাসি।। কী শোভা, কী ছায়া গো, কী স্নেহ, কী মায়া গো,-- কী আঁচল বিছায়েছ বটের মূলে, নদীর কূলে কূলে। মা, তোর মুখের বাণী আমার কানে লাগে সুধার মতো- মা তোর বদন খানি মলিন হলে আমি নয়ন ও মায় আমি নয়ন জলে ভাসি সোনার বাংলা, আমি তোমায় ভালবাসি",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
