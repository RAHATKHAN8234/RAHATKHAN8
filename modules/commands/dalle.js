const axios = require('axios');
const fs = require('fs-extra');
module.exports.config = {
    name: "dalle",
    version: "1.0",
    credits: " RAHAT",
    hasPermssion: 0,
    description: "Generate images by Dalle-3 AI",
    commandCategory: "download",
    usages: "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k]",
    cooldowns: 5
  };

module.exports.run = async function ({ api, event, args }) {
  const prompt = args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
      //const cookies = "cookies here (_U value)";
const tl = ["1qgnYH-PMDwrNITLL_baLnayUksjK3hrNzdbD4wou8OqtLFy9JyYrzbAzrTT20o0fMEILaUzoF6tNFM75cn1VP82yBS0hzyUymJdQ6AjBp9HQYefqTtcesQKEnYAVIllpS8wCsWy5cNMrAI5eVpW7Ekz4xghfYDBynPxZrN_c0r6no7bqqYzId4C42fjyVLgagFXrXdgu_QRPP5lHR3BewA","1gdQbX7b6usHtYPRNq0wC6JEo4GbmGrIIk_ZyJjiz7XWwzCEifa1ASbKBEzE5P99RuvNWXK-yyUDrclmTWkuadsY5WjDN7ihVaQfeTJ6ZFoTu_nRMJmR44Nq5PUeI_JSpzrCFBppn0Gb8GEmyjL-pHf8raP2l-7Vt2Hsde8pf44mBsv7Ij4kFkVfzNjqk30E7pDLFkUrGkVPPfu4EXPgKgw"];
const cookies = tl[Math.floor(Math.random() * tl.length)];
      const w = await api.sendMessage("Wait koro baby < 😽", event.threadID);

const response = await axios.get(`https://all-image-genator-d1p.onrender.com/dipto/dalle?prompt=${prompt}&key=dipto008&cookie=${cookies}`)
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
  body: `✅ এই নাও তোমার ছবি বেবি😍`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  };
