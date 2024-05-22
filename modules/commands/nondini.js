/**
* @author Khan Rahul RK 
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "nondini",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  commandCategory: "Random-IMG",
  usages: "nondini",
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
"https://i.imgur.com/jZBhxs5.jpg",
"https://i.imgur.com/Jn73QjU.jpg",
"https://i.imgur.com/zh2ByQw.jpg",
"https://i.imgur.com/VrrcJh8.jpg",
"https://i.imgur.com/nI83x1X.jpg",
"https://i.imgur.com/O5JQkXO.jpg",
"https://i.imgur.com/JaQOoDg.jpg",  
"https://i.imgur.com/JaQOoDg.jpg"
     ];
     var callback = () => api.sendMessage({body:`My Name Is Nondini Nilanjona Its My Profile ❤️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
