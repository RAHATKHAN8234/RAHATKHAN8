/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "kosto",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "kosto VEDIO",
  commandCategory: "Khan Rahul RK",
  usages: "kosto vedio",
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
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\nআপনি যতো কষ্ট থাকো না কেনো \n Jast say smail And Allahamdulilah😊\n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id1Pzarr2F0PQJjrMp3VDRs3Nk9TAghZZyE",
"https://drive.google.com/uc?id=1PVC4HQ8CwX_PPKvCP93h_XFJXLICDuqt",
"https://drive.google.com/uc?id=1Px_HPFVzzj-mML1MNPTatl2c8Di-VkE_",
"https://drive.google.com/uc?id=1Pt-1MGorybmNvSdycYmxhO3nM_4mn9Rb",
"https://drive.google.com/uc?id=1PMtfgMtfSS1ZJuwHAPwJ1w6VKKHKexAW",
"https://drive.google.com/uc?id=1PqLH6QvOEGeFS5h_f6GZ6AeUOTXd2IGl",
"https://drive.google.com/uc?id=1PN_uEtx3DuUDzp75bGQcPbzBCY1mWlSI",
"https://drive.google.com/uc?id=1PhljHBtp7aE5A_fSNkV9EGvUWOk2tQDp",
"https://drive.google.com/uc?id=1PqCce2e9jDjxaqNAmLjwje0I1GI1owIG",
"https://drive.google.com/uc?id=1PfW5ZCbk1SiEKe9ALWzuqOyEPg_y9vQ8",
"https://drive.google.com/uc?id=1PvWhJZ2ZPvlC0QG4t6r10lC0HvmMH6bB",

];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
