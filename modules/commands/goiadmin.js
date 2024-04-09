module.exports.config = {
  name: "admintag",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT KHAN",
  description: "Bot will reply if admin is tag in a message.",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100017950245626","100050206390910") {
    var aid = ["100017950245626","100004208040827","100050206390910"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [" Don't Mention My Admin Owner এখন অরা বিজি আছে"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }
