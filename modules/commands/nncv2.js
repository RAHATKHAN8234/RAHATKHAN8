/**
* @author Khan Rahul RK
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "nncv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  commandCategory: "Random-IMG",
  usages: "NNCV2",
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
"https://i.imgur.com/riMK2GJ.jpg",
"https://i.imgur.com/WagYrCl.jpg",
"https://i.imgur.com/ZCyIGdg.jpg",
"https://i.imgur.com/1Q2kKKp.jpg",
"https://i.imgur.com/KR8OmS3.jpg",
"https://i.imgur.com/1oFjRe7.jpg",
"https://i.imgur.com/1oFjRe7.jpg",  
"https://i.imgur.com/KR8OmS3.jpg"
     ];
     var callback = () => api.sendMessage({body:`NNC GROUP PROFILE❤️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
