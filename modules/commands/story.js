/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "story",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "show bast edit pic",
  commandCategory: "Cute Girls picture",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🖤🦋\n\n\n-ভালোবাসা মানে কারো প্রতি আকর্ষন নয়° ভালোবাসা মানে শ্রদ্ধা°সম্মান°আর এক আকাশ পরিমান ভরসা__!! 🌸🫰"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "://i.postimg.cc/BnhsHvyZ/received-1191220331561614.jpg",
"https://i.postimg.cc/ZRX53qWv/received-1202819107059319.jpg",
"https://i.postimg.cc/yNd1bR9S/received-1277919869496358.jpg",
"https://i.postimg.cc/VNp8ZVm3/received-1370966393798998.jpg",
"https://i.postimg.cc/YC2MvFdy/received-1410207299549627.jpg",
"https://i.postimg.cc/s2DxCqFx/received-1575640496421558.jpg",
"https://i.postimg.cc/hvFKv3Y9/received-189991853831346.jpg",
"https://i.postimg.cc/1RNtSDdG/received-201915739517704.jpg",
"https://i.postimg.cc/HsgpCRXm/received-2104226693113547.jpg",
"https://i.postimg.cc/j5frp4jC/received-235206272677545.jpg",
"https://i.postimg.cc/WbG1FTTt/received-235360602731729.jpg",
"https://i.postimg.cc/xjH0hnkg/received-255099287260206.jpg",
"https://i.postimg.cc/m2yTZjyH/received-3505135599701479.jpg",
"https://i.postimg.cc/qvpM2Svw/received-605119934945053.jpg",
"https://i.postimg.cc/pT522tsW/received-607001748245024.jpg",
"https://i.postimg.cc/5ywbCScD/received-642702237806079.jpg",
"https://i.postimg.cc/tJPCzH6S/received-6447490728654057.jpg",
"https://i.postimg.cc/mkGGB1cj/received-667269661468341.jpg",
"https://i.postimg.cc/nrYfzVBJ/received-712080477598648.jpg",
"https://i.postimg.cc/7Ls6H9DV/received-778471177337750.jpg",
"https://i.postimg.cc/J4VhzGw9/received-822897445855051.jpg",
"https://i.postimg.cc/g0TzF0qt/received-836313448160197.jpg",
"https://i.postimg.cc/g24csswW/received-950979049537517.jpg",
"https://i.postimg.cc/Kz1YRT8y/received-990740405680183.jpg",
];
   var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }; 
