const elysia = require("tesseract.js");
const rehat = require("lodash");

function removeUselessSymbols(text) {
  const symbolsToRemove = /[^\w\s\u0980-\u09FF]/g;
  return text.replace(symbolsToRemove, "");
}

module.exports = {
  config: {
    name: "text",
    version: "1.0",
    credits: "RAHAT",
    cooldowns: 0,
    hasPermission: 0,
    commandCategory: "Image",
    description: "Get text from an image by replying to the image with ocr.",
    usages: "reply an image to extract text"
  },

  run: async function ({ api, args, event }) {
    if (event.type === "message_reply") {
      if (event.messageReply.attachments[0]?.type === "photo") {
        const imageUrl = event.messageReply.attachments[0].url;
        const processingMessage = await api.sendMessage("✅ | Please wait...", event.threadID);

        try {
          const { data: { text } } = await elysia.recognize(imageUrl, "eng+ben");
          if (text) {
            const formattedText = rehat.trim(text);
            const cleanText = removeUselessSymbols(formattedText);

            api.sendMessage(`${cleanText}`, event.threadID, event.messageID);
          } else {
            api.sendMessage("❌ | An error occurred during OCR. Please try again.", event.threadID, event.messageID);
          }
        } catch (error) {
          console.error("Error during OCR:", error);
          api.sendMessage("❌ | An error occurred during OCR. Please try again.", event.threadID, event.messageID);
        }

        await api.unsendMessage((await processingMessage)?.messageID);
      } else {
        api.sendMessage("❌ | Please reply with an image to perform OCR.", event.threadID, event.messageID);
      }
    } else {
      api.sendMessage("❌ | Please reply with an image to perform OCR.", event.threadID, event.messageID);
    }
  },
};
