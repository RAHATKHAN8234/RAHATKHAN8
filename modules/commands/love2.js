/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "love2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHUL",
  description: "ISLAMIK VEDIO",
  commandCategory: "Hình ảnh",
  usages: "islamik vedio",
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
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় ভাই ও বন -!!\n ভিডিও টি শুধু তুমার জন্য -!!\n দেখো 🌸❤️\n এতো সুন্দর ভিডিও দেখে আপনার খুব ভালো লাগবে আসা করি 🤗😇\n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=10tSzgzX7cFYh7rthZ4lym8xQiw2ah2JU",
"https://drive.google.com/uc?id=110jVnUM2llRhgSVJ-PsYTbd8eoD6ioKI",
"https://drive.google.com/uc?id=10eAjr9KJ7eWLCwZZ1kyT5k3rzhTazqvo",
"https://drive.google.com/uc?id=10kOPuujBgKHRKnfWjXEujdCbhvHY25mF",
"https://drive.google.com/uc?id=10tGznB-fMS4pARVsBhm6TcvzI-J6UJ-4",
"https://drive.google.com/uc?id=10hhm3uvT2V9roRJ2SrThE8WYTCbOIJA6",
"https://drive.google.com/uc?id=10mbXhqLShE7uedaOBbXwi9P19FwVZG6H",
"https://drive.google.com/uc?id=10knXQ7mnx7YqeHxEMswBmb9cYA_lhGWc",
"https://drive.google.com/uc?id=10t3sa-i-yQWwyf2_yBqjTGGR6lUxsWN3",
"https://drive.google.com/uc?id=10gRZSJiqmh6A1h-MODhvzSUHb1fL0-KI",
];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
 
