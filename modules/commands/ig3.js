  /** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
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
   var hi = ["I have a date tonight with my bed and we are totally gonna sleep together...",
                 "Hum kisi ko ache nahi lagte toh koi baat nahi aab har kisi ki choice bhi toh achhi nahi hoti hai...",
                 "Life is a ice cream so grab it all before it all melts",
                 "Tere pyaar mein na jane kitna intezaar kia... Aur us intezaar mein na jane kitno se pyaar kia...",
                 "Aaj tak samjh mein eye kavi nahi aya ke dil mein toh haddi nahi hai toh toot kaise jata hai...",
                 "BEST FRIENDS DON'T JUDGE EACH OTHER... THEY JUDGE OTHER PEOPLE...",
                 "Dekh Bhai ,Paise maange to dosti khatam",
                 "My kindness is not a sign of my weakness.",
                 "Jo karte hain Mohabbat Surat Dekh kar woh karte hain Wafa zarorat dekh kar.",
                 "A negative thought will never give you a positive life ?.",
                 "Mohabbat or Ibadat batane Nahin jaati bas ki Jaatin Hai. ",
                "“Nothing positive comes from being negative every time. Change your attitude!”",
             "A Positive attitude can help you to overcome all negative situations.!",
            "Nafrat bata rahi hai mohabbat ghazab ki thi.",
            "Bahut sukun hai usmein Jise log NAMAZ  Kehte Hain .",
            "Naa Ishq Naa Koi Gham, Dekho Kitne Khush Hain Hum?"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/fRZyhhSw/7b5f8043-5699-4e09-b780-6fad8abc629f.jpg",
  "https://i.postimg.cc/65x5dN0d/Swag-Mafia-IPhone-Wallpaper-IPhone-Wallpapers.jpg",
  "https://i.postimg.cc/g2YzTq1j/Live-like-a-king-picsart.jpg",
  "https://i.postimg.cc/bNPpZ9yg/a9a71d17-aaa4-40ca-9214-712cffd47e59.jpg",
  "https://i.postimg.cc/vmCdbW2W/Anime-wallpaper.jpg",
];
   var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
