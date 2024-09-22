module.exports = {
  config: {
    name: "contact",
    description: "Share Contact",
    prefix: true,
    usage: "[id/reply/mention]",
    accessableby: 0
  },
  start: async function ({ text, api, event}) {
  const { messageReply, senderID, threadID, mentions } = event
  if (senderID == api.getCurrentUserID()) return;
  try {
  var userID = Object.keys(mentions).length > 0 ? Object.keys(mentions)[0] : text.length > 0 ? text[0] : messageReply ? messageReply.senderID : senderID;
  api.shareContact("", userID, threadID)
  } catch (e) {
    api.sendMessage(e.message, threadID, event.messageID)
  }
 }
}
