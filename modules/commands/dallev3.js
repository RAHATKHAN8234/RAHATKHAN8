const axios = require('axios');
const fs = require('fs-extra');
module.exports.config = {
    name: "create",
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
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| use /dalle a cat , 4k",event.threadID,event.messageID);
  }
    try {
      //const cookies = "your cookies";
const tl = ["15rhShQp9j4dQdSZm8LY2e8AjPjGZgEf4NxxOCF7qKU_pG57nHpc9CulkUigL_GSY8i5UoutzVelp4yRTJJfF4C3Al85RuLTTi7ESi8d-7lHCow4YeT-9jVrp6cq_OcEmB6MklD-naUpKm0YICqVAWjgRpA9fb6X9ybGTRxEX_rBEXAVlP9ZpBX_K-YEyZmAzJteTdCxQUjhNnnetFmxN_Q"];
const cookies = tl[Math.floor(Math.random() * tl.length)];
      const w = await api.sendMessage("একটু সময় অপেক্ষা করো কলিজা😍", event.threadID);
  
const response = await axios.get(`https://nobs-api.onrender.com/dipto/dalle?prompt=${prompt}&key=dipto008&cookies=${cookies}`)
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
  body: `এই নাও তোমার ইমেজ কলিজা😘`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  }; 
