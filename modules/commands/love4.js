/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "love4",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHUL",
  description: "ISLAMICK LOVE VEDIO",
  commandCategory: "M H BD",
  usages: "love4 vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n - যদি বলি পৃথিবীর শ্রেষ্ঠ ধর্ম ইসলাম ❤️🌺\n তাহলে কি ভুল হবে 💙🥺  \n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1bFLPnJz_TKg0sT1Pa5lTm0B2Gb_i2h81",
"https://drive.google.com/uc?id=1bH2iyeD_7eXL-j2hebOoVhAx2EokRMHO",
"https://drive.google.com/uc?id=1bXc7WAnG9cSrp9gKUqM1uarzDIDVf_Q6",
"https://drive.google.com/uc?id=1bRdWfD5PZTf_7Eo9TNW9OhMzFNiH9wKE",
"https://drive.google.com/uc?id=1bV79WeAzYkueCn-Zxd21dRvPtky0_zwQ",
"https://drive.google.com/uc?id=1bDT05wBWPDfXsoihvESV3U-rQfid6iy_",
"https://drive.google.com/uc?id=1bMxgVGdBW1c-y-EwCj16XmY8N-kIqPoQ",
"https://drive.google.com/uc?id=1b71rbp8zauxomI6H2fBXWFwzDBvJrz8Y",
"https://drive.google.com/uc?id=1bK8laAZtX1BX2eaUGixHfm0WIXv_eSUa",
"https://drive.google.com/uc?id=1bK8laAZtX1BX2eaUGixHfm0WIXv_eSUa",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
 
