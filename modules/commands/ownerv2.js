module.exports.config = {
  name: "ownerv2",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "Rahat",
  description: "Rahat khan 823",
  commandCategory: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/yuYSLbH.jpghttps://i.imgur.com/ibZHpZk.jpeg", 

            "https://i.imgur.com/yuYSLbH.jpghttps://i.imgur.com/ibZHpZk.jpeg", 

"https://i.imgur.com/kq0zwnr.jpghttps://i.imgur.com/ibZHpZk.jpeg",

            "https://i.imgur.com/kq0zwnr.jpghttps://i.imgur.com/ibZHpZk.jpeg"];

var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : Shirin Sheikh \n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :Shirin Sheikh  \n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (DHAKA)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :DHAKA, 𝘽𝙖𝙣𝙜𝙡𝙖𝙙𝙚𝙨𝙝\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝐟𝐞𝐦𝐚𝐥𝐞)\n𝗔𝗴𝗲            :  (কি শখ)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : HACKER\n𝗚𝗺𝗮𝗶𝗹        :  নাই\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  লাগবো না যাও😪\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : নাই\n𝗙𝗯 𝗹𝗶𝗻𝗸   :https://www.facebook.com/profile.php?id=100004423418433`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
