/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "natural3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "NATURAL  VEDIO",
  commandCategory: "NNC BOT",
  usages: "Natural3",
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
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n - আল্লাহামদুলিল্লাহ ☘️❤️‍🩹\n এতো সুন্দর  আল্লাহার  সৃষ্টি __🐰🍒✨  \n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1aa6T4LqK3sYZx5VKfmqTE5lv_ulktITu",
"https://drive.google.com/uc?id=1aJccV81MIz1uek2pPHiCFs78hJZsXVQm",
"https://drive.google.com/uc?id=1a_tujQe6QkdOpGjPJijIMzbmBEd5dn91",
"https://drive.google.com/uc?id=1a_AZqRSWeB89DsrYuU6IJOBQTzIIu9ws",
"https://drive.google.com/uc?id=1aO1A57_w3IdwdZUAdiuLT80Dl3n9Toya",
"https://drive.google.com/uc?id=1afoJzTGJe5iiU29pzJGuBVE62Cg6FS5R",
"https://drive.google.com/uc?id=1aFLt9ct7q7Zbw_gKMxYw9_wqOnUFuvBh",
"https://drive.google.com/uc?id=1acY0XGdlTnHxZvfXpnt4b8cGpRAmvqhx",
"https://drive.google.com/uc?id=1_nZow-HRTaNMih8Uh19GJE5wPNfXltkS",
"https://drive.google.com/uc?id=1a7YpEdXsHyeqUHBuc9HFK29nytFTfTQD",

];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
