/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "lovevideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHUL",
  description: "ISLAMICK LOVE VEDIO",
  commandCategory: "M H BD",
  usages: "love video",
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
   var hi = "•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n\n লাল ফুলে মিষ্টি হাসি 🌻\nআল্লাহ তোমায় ভালোবাসি~» 💜\n\nমিষ্টি মুখে পাখির গান 🌻\nকোরআন আমার সংবিধান 💙 ❤️\n\nসবুজ শ্যামল স্বপ্নে ঘেরা \n ইসলাম ধর্ম সবার সেরা 🥀🌻\n\n🌸🦋--_-Alhamdulillah -_--🍁🌸\n\n•┄┅════❁🌺❁════┅┄•";
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1XfciQs7YWuVH6rbkeIda4vAbNH-UVIWn",
"https://drive.googlec?id=.com/u1XDl-Hn40hkRhyBRMsJklEDiCRWaNnkL3",
"https://drive.google.com/uc?id=1XBMZJ-BwgGECsfOUohedq5P-JG5fi2q0",
"https://drive.google.com/uc?id=1XBZ2YrCy6eryz9GRslJs4_lCOmSsjM-5",
"https://drive.google.com/uc?id=1XAXbqno8mw1PxGDjpbR-cZoa0-LO_QTV",
"https://drive.google.com/uc?id=1XMdHGfkRl8jH7ngm4FlMi6vPdqWW-PvU",
"https://drive.google.com/uc?id=1XP6pg-53pW19g2UW86I5mtxyw9Ao8sV1",
"https://drive.google.com/uc?id=1XCShZvPQuEMzlaliQCwyykkaTUzz40Ek",
"https://drive.google.com/uc?id=1X9bGt36mZXF5a6h7au-xFAcWLK4dHUa-",
"https://drive.google.com/uc?id=1Xf7-melSrq130k3TGjrPASkVOhNd0I4K",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
 
