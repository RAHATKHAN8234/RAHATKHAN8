/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "natural2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "NATURAL  VEDIO",
  commandCategory: "NNC BOT",
  usages: "Natural2",
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
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n __🌻🌼__আল্লাহ যে কতটা মহান তা এই ভিডিও টা দেখেই বোঝা যায় ☺️😇_!!  \n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1_TgtwDEiJCSVYuWLqOdGI7poay2UYLiP",
"https://drive.google.com/uc?id=1_o4gy9sNqEOGRzOIdnfpPcwsfdB5vJbx",
"https://drive.google.com/uc?id=1_rXt73uZg-xwEzQoAdu6cZDPBltxkmqR",
"https://drive.google.com/uc?id=1_cRy_8vUUb3WFp6tVr42ruABdoPO_Nyb",
"https://drive.google.com/uc?id=1_hs_C3mrrOj1c1w360SDkXOzAR5yMuoS",
"https://drive.google.com/uc?id=1_o74qL954M9DmJMNd9hgvZZJyFXU2eEC",
"https://drive.google.com/uc?id=1a8LO9wD3kf_5s6asciO9natLrnQQEri1",
"https://drive.google.com/uc?id=1a0AD7ip6C_LZRlT3cgufl8II6r8pA5KF",
"https://drive.google.com/uc?id=1_nZow-HRTaNMih8Uh19GJE5wPNfXltkS",
"https://drive.google.com/uc?id=1_m7-rrIJIfTaowg5eJC31vdLE6gvmex8",
"https://drive.google.com/uc?id=1_nZow-HRTaNMih8Uh19GJE5wPNfXltkS",

];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
