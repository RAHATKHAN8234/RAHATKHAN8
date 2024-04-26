const axios = require('axios');

module.exports.config ={
    name: "tg",
    version: "6.9",
    author: "RAHUL",
    countDown: 5,
    role: 0,
    category: "media",
    description: "convert image tg link",
    category: "tools",
    usages: "reply [image]"
  },

module.exports.onStart = async function ({ api, event }) {
    const dip = event.messageReply?.attachments[0]?.url;
    if (!dip) {
      return api.sendMessage('Please reply to an image.', event.threadID, event.messageID);
    }
    try {
      const res = await axios.get(`https://noobs-api.onrender.com/dipto/tg?url=${encodeURIComponent(dip)}`);
      const dipto = res.data.data;
         api.sendMessage(dipto, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      return api.sendMessage('Failed to convert image into link.', event.threadID, event.messageID);
    }
  };
