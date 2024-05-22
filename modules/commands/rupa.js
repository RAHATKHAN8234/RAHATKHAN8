/**
* @author Khan Rahul RK
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "rupa",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  commandCategory: "Random-IMG",
  usages: "RUPA",
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
"https://i.imgur.com/85JYZJT.jpg",
"https://i.imgur.com/4T7Z1F0.jpg",
"https://i.imgur.com/D7XZKQH.jpg",
"https://i.imgur.com/CBhEN33.jpg",
"https://i.imgur.com/z4wEKdM.jpg",
"https://i.imgur.com/Bzh9hSk.jpg",
"https://i.imgur.com/8Mi2FTL.jpg",  
"https://i.imgur.com/85JYZJT.jpg"
     ];
     var callback = () => api.sendMessage({body:`My Name Is Rupa Ruhi Rofia My Profile Picture ❤️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
