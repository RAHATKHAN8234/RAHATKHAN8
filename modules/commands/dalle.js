const axios = require('axios');
const fs = require('fs-extra');
module.exports.config = {
    name: "dalle",
    version: "1.0",
    credits: "RAHUL",
    hasPermssion: 0,
    usePrefix: true,
    description: "Generate images by Dalle-3 AI",
    commandCategory: "download",
    usages: "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k]",
    cooldowns: 5
  };

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| use /dalle a cat , 4k",event.threadID,event.messageID);
  }
    try {
      //const cookies = "1xXI7yMEnFFxAv5P1XXb8ROz3ztgNw6L5iebY9_kjBrVrMSvu4FVhHHWusdycYgAc0sv6dpIykaF6nJCG5ZVl5MlyMfkfCCPAvw1V3XRRKdZ-y4RFxgeuIGGKujlu7eZhJ-bM5yu7VpZtaz5CnAU-DG_eHq5yVAdkpAKjjbTVP-pYqAjwxDOnUseuak3CRoTPFl9ZQ8CcRiuGMrghBhLX2g";
const tl = ["1oXcpkxHiEtBj0YQYOhnTPWKOb8hQwVrm5YcqQ6IZXlzXy7DLtZsZoTbSvc-ZPLLEEDKZNG54Ba1m_eDBEtefmXBr96VYrBsAmvWThoqKzxYoC6U7sfym6JeMhXZq23f6XhwuJYTTgy92QU1OKzHYC6PlWa4_ZakywYLoAWEz2Ht7ESTBdrJGwB0h3FYKV7suqNiMQb8NWZrjrKP8jhm1aQ"];
const cookies = tl[Math.floor(Math.random() * tl.length)];
      const w = await api.sendMessage("𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐘𝐨𝐮𝐫 𝐈𝐦𝐠𝐚𝐞 🐥💫", event.threadID);
  
const response = await axios.get(`https://noobs-api.onrender.com/dipto/dalle?prompt=${prompt}&key=dipto008&cookie=${cookies}`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("No images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = __dirname + `/cache/${i + 1}.jpg`;
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞 𝐘𝐨𝐮𝐫 𝐈𝐦𝐚𝐠𝐞 🐥💫`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  };
