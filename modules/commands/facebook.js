module.exports.config = {
  name: "facebook",
  version: "1.0.",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "Any Facebook Video Reel Story Full Video Download Available🥰Credits Khan Rahul RK",
  commandCategory: "other",
  usages: "Facebook Reel Story video link",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require('axios');
const fs = require('fs-extra');
  let link = args.join(" ");

  if (!args[0]) {
    api.sendMessage("please put a valid fb video link", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙞𝙣𝙜 𝙫𝙞𝙙𝙚𝙤, 𝙥𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩...\n\n𝙆𝙝𝙖𝙣 𝙍𝙖𝙝𝙪𝙡 𝙍𝙆 𝘼𝙥𝙞", event.threadID, event.messageID);

  try {
    let path = __dirname + `/cache/fbVID.mp4`;

    const aa = await axios.get(`https://api.samirthakuri.repl.co/api/videofb?url=${encodeURI(link)}`);

    const vid = (await axios.get(aa.data.video, { responseType: "arraybuffer", })).data;

    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));

    api.sendMessage({
      body: `D̷o̷w̷n̷l̷o̷a̷d̷ ̷C̷o̷m̷p̷l̷e̷t̷e̷.̷.̷.̷\n\nK̷h̷a̷n̷ ̷R̷a̷h̷u̷l̷ ̷A̷p̷i̷`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
     api.sendMessage(`${e}`, event.threadID, event.messageID);
  };

};
