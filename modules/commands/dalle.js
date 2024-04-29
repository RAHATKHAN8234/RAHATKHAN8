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
    usages: "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written RAHUL and 69 on the back of his Dress , 4k]",
    cooldowns: 5
  };

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| use /dalle a cat , 4k",event.threadID,event.messageID);
  }
    try {
      //const cookies = "UR U COCKLES";
const tl = ["1RfUHz7F8e9a-b8SupXtSMcEisJI6I715pUnklz1yXlM_5_rWfifLUZx2wLjCJJJcFYSOlT5SL890jE6DqOF_8zQ-5YY0hsJjbzHJZYpot6uow_22ZwWDdOcZhFgbdriX_bs7S4nmowLdpv22Ex5M8wwHAQZfuOgWcsN4VKAk6C-KU2s9MlpvAmnuhE85aZgmyI-eHw6T9K3gofypSmk66Q"];
const cookies = tl[Math.floor(Math.random() * tl.length)];
      const w = await api.sendMessage("𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐘𝐨𝐮𝐫 𝐈𝐦𝐠𝐚𝐞\n\n𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊", event.threadID);
  
const response = await axios.get(`https://96q5hj-3000.csb.app/dalle?prompt=a%20cat&key=dipto008&cookies=1oXcpkxHiEtBj0YQYOhnTPWKOb8hQwVrm5YcqQ6IZXlzXy7DLtZsZoTbSvc-ZPLLEEDKZNG54Ba1m_eDBEtefmXBr96VYrBsAmvWThoqKzxYoC6U7sfym6JeMhXZq23f6XhwuJYTTgy92QU1OKzHYC6PlWa4_ZakywYLoAWEz2Ht7ESTBdrJGwB0h3FYKV7suqNiMQb8NWZrjrKP8jhm1aQ${cookies}`)
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
  body: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞 𝐘𝐨𝐮𝐫 𝐈𝐦𝐚𝐠𝐞\n\n𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  };
