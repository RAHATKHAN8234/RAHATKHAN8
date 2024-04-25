/**
* @Khan Rahul RK
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "fixt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  commandCategory: "Random-IMG",
  usages: "FIXTTIME",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/EHtRWhi.jpg",
"",
"https://i.imgur.com/EHtRWhi.jpg",
"",
"https://i.imgur.com/EHtRWhi.jpg",
"",
"https://i.imgur.com/EHtRWhi.jpg",  
"https://i.imgur.com/EHtRWhi.jpg"
     ];
     var callback = () => api.sendMessage({body:`@everyone  
আসসালামু আলাইকুম!😍
আশা করি আপনারা সবাই ভালো আছেন,,🖤😍 
⏰ TIME FIXED TO PLAY 

❌ NICK CHANGE NOT ALLOWED

❌NET ISSU NOT ALLOWED

❌MODE:AT,BT,CS

LAST TIME : ⏰ 24 HOURS 

💞STAY WITH NNC💞

🥰ধন্যবাদ। 

শুভ কামনা সবার জন্য। 🖤🥀`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   }; 
