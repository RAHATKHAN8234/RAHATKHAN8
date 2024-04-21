const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: "dalle3",
    aliases: ["dalle","bing","create","imagine"],
    version: "1.0",
    author: "Dipto",
    countDown: 15,
    role: 0,
    shortDescription: "Generate images powerby by Dalle3",
    longDescription: "Generate images by Unofficial Dalle3",
    category: "download",
    guide: {
      en: "{pn} prompt"
    }
  },

  onStart: async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
      const fff = ["18Nkun3omNHDZDc9rcozKt0K8RiETmtqA0DpFdBp3yxZZoRI6wrAFNOkUY5l895GjJUqWKMrz_PHt76WV8QtxmQmvvqanniLLsFnxkk3iX8ITwLeC-tD_JJWKxkvBynmDA1tRSux7eu0Y05SjeElbIhA3q7Stl5434SEYThPOJzXC5JQahfc3tf5niPY3zfkkZ5mq8-HE_duCHw2I4b1AYQ"]
      const col = fff[Math.floor(Math.random() * fff.length)]
      const w = await api.sendMessage("একটু সময় অপেক্ষা করো কলিজা \n\n🄲🅁🄴🄰🅃🄴 🄱🅈 🄺🄷🄰🄽 🅁🄰🄷🅄🄻 🅁🄺 ", event.threadID);

const response = await axios.get(`${global.GoatBot.config.api}/dalle?prompt=${prompt}&key=dipto008&cookies=${col}`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'dvassests', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `✅ এই নাও কলিজা তোমার লগো \n\n🄲🅁🄴🄰🅃🄴 🄱🅈 🄺🄷🄰🄽 🅁🄰🄷🅄🄻 🅁🄺 `,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  }
} 
