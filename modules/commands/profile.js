module.exports.config = {
  name: "profile",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "",
  commandCategory: "Dawnload",
  usages: "",
  cooldowns: 3,
  dependencies: {
      "request": "",
      "fs": ""
  }

};

module.exports.run = async({api,event,args,Users}) => {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
   if (args.length == 0) return api.sendMessage(`𝐘𝐎𝐔 𝐂𝐀𝐍 𝐔𝐒𝐄\n\n${prefix}${this.config.name} user => 𝐈𝐓 𝐖𝐈𝐋𝐋 𝐓𝐀𝐊𝐄 𝐘𝐎𝐔𝐑 𝐎𝐖𝐍 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐈𝐌𝐆.\n\n${prefix}${this.config.name} user @[Tag] => 𝐈𝐓 𝐖𝐈𝐋𝐋 𝐓𝐀𝐊𝐄 𝐓𝐇𝐄 𝐏𝐏 𝐎𝐅 𝐓𝐇𝐄 𝐏𝐄𝐑𝐒𝐎𝐍 𝐘𝐎𝐔 𝐓𝐀𝐆.\n\n${prefix}${this.config.name} box => 𝐈𝐓 𝐖𝐈𝐋𝐋 𝐓𝐀𝐊𝐄 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄\n\n${prefix}${this.config.name} user box tid] 𝐈𝐓 𝐖𝐈𝐋𝐋 𝐆𝐄𝐓 𝐓𝐇𝐄 𝐓𝐈𝐃'𝐒 𝐏𝐑𝐎𝐅𝐈𝐋𝐄`, event.threadID, event.messageID);
  if (args[0] == "box") {
         if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
         let imgg = threadInfo.imageSrc;
     if(!imgg) api.sendMessage(`𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 𝐅𝐎𝐑 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ${threadInfo.threadName}`,event.threadID,event.messageID);
      else var callback = () => api.sendMessage({body:`𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 𝐅𝐎𝐑 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ${threadInfo.threadName}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
    return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

    }

          let threadInfo = await api.getThreadInfo(event.threadID);
          let img = threadInfo.imageSrc;
        if(!img) api.sendMessage(`𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 𝐅𝐎𝐑 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ${threadInfo.threadName}`,event.threadID,event.messageID)
        else  var callback = () => api.sendMessage({body:`𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 𝐅𝐎𝐑 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ${threadInfo.threadName}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
    return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

    };

if (args[0] == "user") { 
  if(!args[1]){
  if(event.type == "message_reply") id = event.messageReply.senderID
  else id = event.senderID;
  var name = (await Users.getData(id)).name
  var callback = () => api.sendMessage({body:`𝐇𝐄𝐑𝐄 𝐈𝐒 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
     return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 }
  else {
  if (args.join().indexOf('@') !== -1){
  var mentions = Object.keys(event.mentions)
  var name = (await Users.getData(mentions)).name
  var callback = () => api.sendMessage({body:`𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 𝐅𝐎𝐑 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ${name}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
     return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
  else {
  var name = (await Users.getData(args[1])).name
  var callback = () => api.sendMessage({body:`𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 𝐅𝐎𝐑 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ${name}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
     return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
   }
   }
}
