module.exports.config = {
  name: "argentina",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "🥰🥰",
  commandCategory: "random-img",
  usages: "argentina",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/GpqX0s3X/received-3274998869478339.jpg",

"https://i.postimg.cc/nhVd3kpX/received-5645191795564445.jpg",

"https://i.postimg.cc/TYbGRTDV/received-460101839539540.jpg",

"https://i.postimg.cc/QC1XnDgJ/received-820294532403157.jpg",

"https://i.postimg.cc/25trky2x/received-539095001396627.jpg",

"https://i.postimg.cc/DwrSwtNN/received-851061445937799.jpg",

"https://i.postimg.cc/XJCJtm9x/received-5434093806712951.jpg",

"https://i.postimg.cc/4d5M4Nv3/received-505705181619650.jpg",

"https://i.postimg.cc/FstWtSXx/received-882457252777249.jpg",

"https://i.postimg.cc/YSyRdGxY/received-3377424369208570.jpg",

"https://i.postimg.cc/yx7D9nSP/received-539487404711661.jpg",

"https://i.postimg.cc/ryv8vfpY/received-494812769414694.jpg",

"https://i.postimg.cc/MH0r3ZHw/received-941687557235861.jpg",

"https://i.postimg.cc/CKWPFnfY/received-503854481539696.jpg",

"https://i.postimg.cc/XYqQdkf4/received-865417814492308.jpg",

"https://i.postimg.cc/g2L3GSyX/received-729152214719838.jpg",

"https://i.postimg.cc/nhqMd6Yk/received-1339598863507284.jpg",

"https://i.postimg.cc/HLZJ5btD/received-829713278082340.jpg",

"https://i.postimg.cc/RV4MSNcc/received-1227853078139090.jpg",

"https://i.postimg.cc/PxsgSRym/received-673316554431797.jpg",

"https://i.postimg.cc/Y9D1pJPF/received-1015984322490929.jpg",

"https://i.postimg.cc/C1wzWmLq/FB-IMG-1670168257720.jpg",

"https://i.postimg.cc/yYRsy074/FB-IMG-1670168221826.jpg",

"https://i.postimg.cc/Rh59k0Tb/FB-IMG-1670168210211.jpg",

"https://i.postimg.cc/nhP88zFY/FB-IMG-1670168174239.jpg",

"https://i.postimg.cc/Fz7cBDDx/FB-IMG-1670168134547.jpg",

"https://i.postimg.cc/j2wwXCSg/FB-IMG-1670168126904.jpg",
    ];

var callback = () => api.sendMessage({body:`ভালোবাসার আরেক নাম!😍\nArgentina💥\n\nKhan Rahul RK: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
