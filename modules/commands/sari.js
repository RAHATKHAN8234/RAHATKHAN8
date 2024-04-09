/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "শাড়ি",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khan Rahul RK",
  description: "Shari VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sari",
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
   var hi = ["Khan Rahul RK"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1BI0uCpfN-tZ-QQ3SldvrB3LzENc4s5ev",
    "https://drive.google.com/uc?id=1BGEloVWObOTr2kKyGCkcKST6YMk7PTjl",
    "https://drive.google.com/uc?id=1B08W6z19BOmOo7qjR6NcihnW_mZ0k-ZR",
    "https://drive.google.com/uc?id=1BZosbhP3LVCObTcfd3I4Zsiqxr23l_Eo",
    "https://drive.google.com/uc?id=1BSinzdiEcdOhe0A4jsDazBBLM_PHEeC3",
    "https://drive.google.com/uc?id=1BNrTpfIHOw29dSJ9VTgWCkudfDh7AK6P",
    "https://drive.google.com/uc?id=1BjY-_P6gJAsb4QGLjlm3BRClYnkeC4bT",
    "https://drive.google.com/uc?id=1Be3TcV7SQwjLQLqOVIYpQufHgeKXWGul",
    "https://drive.google.com/uc?id=1AuCv_pLKsvLV-mOUzN420fcA-kQj15Fg",
    "https://drive.google.com/uc?id=1B2quRz7kYyE53AB-XJ8x6DNmJek0dsR1",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
