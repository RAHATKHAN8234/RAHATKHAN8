const elysia = require("tesseract.js");
const rehat = require("lodash");

function removeUselessSymbols(text) {
  const symbolsToRemove = /[^\w\s\u0980-\u09FF]/g;
  return text.replace(symbolsToRemove, "");
}

module.exports = {
  config: {
    name: "rsk",
    version: "1.0",
    credits: "RAHAT",
    cooldowns: 0,
    hasPermssion: 0,
    commandCategory: "Image",
    Description: {
      en: "Get text from an image by replying to the image with {pn}.",
    },
    guide: {
      en: "{pn} reply an image to extract text",
    },
  },

  run: async function ({ api, args, message, event }) {
    if (event.type === "message_reply") {
      if (event.messageReply.attachments[0]?.type === "photo") {
        const imageUrl = event.messageReply.attachments[0].url;
        const processingMessage = await message.reply("✅ | Please wait...");

        try {
          const { data: { text } } = await elysia.recognize(imageUrl, "eng+ben");
          if (text) {
            const formattedText = rehat.trim(text);
            const cleanText = removeUselessSymbols(formattedText);

            await message.reply(`${cleanText}`);
          } else {
            await message.reply("❌ | An error occurred during OCR. Please try again.");
          }
        } catch (error) {
          console.error("Error during OCR:", error);
          await message.reply("❌ | An error occurred during OCR. Please try again.");
        }

        await message.unsend(processingMessage.messageID);
      } else {
        await message.reply("❌ | Please reply with an image to perform OCR.");
      }
    } else {
      await message.reply("❌ | Please reply with an image to perform OCR.");
    }
  },
};
