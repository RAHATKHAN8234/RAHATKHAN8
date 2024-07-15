const axios = require("axios");
const fs = require("fs-extra");
const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
  );
  return base.data.api;
};

module.exports.config = {
  name: "create",
  version: "1.0",
  credits: "𝐑𝐀𝐇𝐀𝐓",
  hasPermssion: 0,
  usePrefix: true,
  prefix: true,
  description: "Generate images by Dalle-3 AI",
  commandCategory: "download",
  category: "download",
  usages:
    "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written RAHAT and 69 on the back of his Dress , 4k]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] || args.join(" ");
  if (!prompt) {
    return api.sendMessage(
      "❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written RAHAT and 69 on the back of his Dress , 4k",
      event.threadID,
      event.messageID,
    );
  }
  try {
    //const cookies = "cookies here (_U value)";
    const tl = ["1VMpvZ4SOh0xCZAzYeNHZ1VjzibhKrJdE13PwxgRcCHBOD_nLu9phHAn34l0Q8HRbJwjGZIYya9KZNSkdlHCtkRKm1pE--FtufkyxkPFw6OX8EJDdp1LSyBF8hyG8pxnaua5GrRuSQxXcFZdRFJgj3-yAtfNv0dFz_dhM2DZPJdGdCJyBkLp3r543_Qa8xT4PF4UC-u-3iOvD7R8mbAnzvA", "1_fIyvMBd4AdvnAatXwtpJ6xK5wlhcmUdP_gDCBwjMkBhVHTm3dsRCz6fHkUDoWn3vycxnLsoo6NsnzWR1hawF78Ldncg-ACPgwe-ypoRfT1HYcdby-7DhG3XorB6O2WRCNxoimpUteOHvsJ-a0d3xGWIXw825Og4MG0AEiVB3ykn6GEeq4U__GnaqW4ih9qdOcU_-h2DPRmLCcj_0faO9Q"];
    const cookies = tl[Math.floor(Math.random() * tl.length)];
    const w = await api.sendMessage("𝐖𝐚𝐢𝐭 𝐤𝐨𝐫𝐨 𝐛𝐚𝐛𝐲 < \n\n𝐀𝐩𝐢 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊😘", event.threadID);

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
        body: `✅𝐍𝐚𝐰 𝐁𝐚𝐛𝐲 𝐓𝐮𝐦𝐚𝐫 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞d 𝐏𝐢𝐜<😘 \n\n𝐀𝐩𝐢 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊`,
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
