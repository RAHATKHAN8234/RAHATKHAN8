/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "love5",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHUL",
  description: "ISLAMICK LOVE VEDIO",
  commandCategory: "M H BD",
  usages: "love5 video",
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
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n - কিছু শিখতে চাইলে তুমি ইসলাম কে দেখো 👀\n তুমি হালাল ও পবিত্র ভালোবাসা ইসলাম ছাড়া অন্য  কনো ধর্মে পাবেনা 😇❤️ \n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1cLHvQWhalKTWou58aZEzSPp0OlA2Gpw7",
"https://drive.google.com/uc?id=1cLBhqiqC36Be5JaM_NnXIub3T7yilgJZ",
"https://drive.google.com/uc?id=1cEtr6VWciT9QtGZoimRTVnzNwK66wtNe",
"https://drive.google.com/uc?id=1cNSmY6Y60ItzONoLlE_cc_KxzaiZvXay",
"https://drive.google.com/uc?id=1cLS9vtp2sk6qxoCTzrT7Ec5OP8ryOANc",
"https://drive.google.com/uc?id=1cJBPHVQOOUGqE5ofXjR8eQsnXPZr7ltA",
"https://drive.google.com/uc?id=1cSO6b2PDjqU80KFek1WQ8yDXSKIWizmF",
"https://drive.google.com/uc?id=1cZ54y72-VQE7EJ_DVLwf0h35PJPrlmG1",
"https://drive.google.com/uc?id=1cLBhqiqC36Be5JaM_NnXIub3T7yilgJZ",
"https://drive.google.com/uc?id=1cLHvQWhalKTWou58aZEzSPp0OlA2Gpw7",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
 
