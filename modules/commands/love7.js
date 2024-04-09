/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "love7",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHUL",
  description: "ISLAMICK LOVE VEDIO",
  commandCategory: "M H BD",
  usages: "love7 video",
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
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n - __𝗣𝗲𝗼𝗽𝗹𝗲 𝘄𝗵𝗼 𝘀𝗺𝗶𝗹𝗲 𝗯𝗮𝗰𝗸 𝗮𝗿𝗲\n 𝗶𝗻𝗰𝗿𝗲𝗱𝗶𝗯𝗹𝘆 𝗯𝗲𝗮𝘂𝘁𝗶𝗳𝘂𝗹!😍\n__হাসির উত্তরে হাসি দেওয়া মানুষগুলো অসম্ভব সুন্দর!😍\n\n🍒😽\n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1dzubReQrNnRlQqxiixZQAGE2lwS--q1Y",
"https://drive.google.com/uc?id=1dwy36ixrG4srHrlixztlFt5pjSpqHkqK",
"https://drive.google.com/uc?id=1eHB6U_6SmAUeVTHU5amMeAab3K_P39nN",
"https://drive.google.com/uc?id=1dzEFzuKR333UCpDQc0C-N_VAt3fn_d2H",
"https://drive.google.com/uc?id=1eCV9uVHDUlcxbfD2VtCHaIBEN9KnCV-Z",
"https://drive.google.com/uc?id=1e9dZIMOhWUC_ktWbmTkYv1Z0s3fxjI4G",
"https://drive.google.com/uc?id=1eGg-4pHgk3mJCVbtRDNV_lp0cBaFi6c7",
"https://drive.google.com/uc?id=1dxZVVJs4wvOO4TptAxaqOJaB2nUBKxAT",
"https://drive.google.com/uc?id=1dzZTQtF-FPtwhFlENOd8pfrA3I9h3jHA",
"https://drive.google.com/uc?id=1eGEC-lU0qedMwrKQ5H44tiQ8vIH83UoF",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
 
