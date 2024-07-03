const axios = require("axios");
const fs = require("fs-extra");
const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
  );
  return base.data.api;
};

module.exports.config = {
  name: "edit",
  version: "1.0",
  credits: "RAHUL",
  hasPermssion: 0,
  usePrefix: true,
  description: "Generate images by Dalle-3 AI",
  commandCategory: "download",
  usages:
    "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written RAHUL and 69 on the back of his Dress , 4k]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] || args.join(" ");
  if (!prompt) {
    return api.sendMessage(
      "❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k",
      event.threadID,
      event.messageID,
    );
  }
  try {
    //const cookies = "cookies here (_U value)";
    const tl = ["1rBs0XjlOeTv3e-OFCZ5X0bwYuZzcMxd-hIdicrc55XfA2EylDZ1tkNtbnu2KDcU2s5F61RIZrDgXhx0Ay5c1aE837qkprV31JWvhNq50UeChs_q3tK0JfGB_yc89XLIV_kMzAGk2m387FfNaidihy1peZ-qt4wvtKf6d-3o2PjsICcrW7MiS9rzO5tDyqlb_pkcg4oSMuQUT8UiRjr0_dQ"];
    const cookies = tl[Math.floor(Math.random() * tl.length)];
    const w = await api.sendMessage("𝙥𝙡𝙚𝙖𝙨𝙚 𝙬𝙞𝙩𝙝𝙚 𝙥𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚 \n𝙠𝙝𝙖𝙣 𝙧𝙖𝙝𝙪𝙡 𝙧𝙠💞", event.threadID);

    const response = await axios.get(
      `${await baseApiUrl()}/dalle?prompt=${prompt}&key=dipto008&cookie=${cookies}`,
    );
    const data = response.data.imgUrls;
    if (!data || data.length === 0) {
      api.sendMessage("No images generated.", event.threadID, event.messageID);
    }
    const diptoo = [];
    for (let i = 0; i < data.length; i++) {
      const imgUrl = data[i];
      const imgResponse = await axios.get(imgUrl, {
        responseType: "arraybuffer",
      });
      const imgPath = __dirname + `/cache/${i + 1}.jpg`;
      await fs.outputFile(imgPath, imgResponse.data);
      diptoo.push(fs.createReadStream(imgPath));
    }
    await api.unsendMessage(w.messageID);
    await api.sendMessage(
      {
        body: `𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚 \n𝙠𝙝𝙖𝙣 𝙧𝙖𝙝𝙪𝙡 𝙧𝙠💞`,
        attachment: diptoo,
      },
      event.threadID,
      event.messageID,
    );
  } catch (error) {
    console.error(error);
    await api.sendMessage(
      `Generation failed!\nError: ${error.message}`,
      event.threadID,
      event.messageID,
    );
  }
};
