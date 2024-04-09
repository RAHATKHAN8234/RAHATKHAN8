const fs = require("fs"),
      path = __dirname + "/cache/antibox.json";

module.exports.config = {
  name: "promax",
  version: "beta",
  hasPermission: 1,
  credits: "RAHUL",
  usePrefix: true,
  description: "Prohibit changing group name!",
  commandCategory: "Administrator system",
  usages: "antinamebot on/off",
  cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};
module.exports.onLoad = () => {   
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
};

module.exports.handleEvent = async function ({ api, event, Threads, permission }) {
  const { threadID, messageID, senderID, isGroup, author } = event;

  if (isGroup == true) {
    let data = JSON.parse(fs.readFileSync(path))
    let dataThread = (await Threads.getData(threadID)).threadInfo || {};
    const threadName = dataThread.threadName;

    if (!data[threadID]) {
      data[threadID] = {
        namebox: threadName,
        status: true
      }
      fs.writeFileSync(path, JSON.stringify(data, null, 2));
    }
    if (data[threadID].namebox == null || threadName == undefined || threadName == null) return

    else if (threadName != data[threadID].namebox && data[threadID].status == false) {
      data[threadID].namebox = threadName
      fs.writeFileSync(path, JSON.stringify(data, null, 2));
    }

    if (threadName != data[threadID].namebox && data[threadID].status == true) {
      return api.setTitle(
        data[threadID].namebox,
        threadID, () => {
          api.sendMessage(
            `[ User Warning ]\n──────────────────\n❗ The group currently has the group name changing prohibition mode turned on.\n⚡ Use: ${PREFIX(threadID)}antibox to turn it off!`,
            threadID
          );
        }
      );
    }
  }
};

module.exports.run = async function ({ api, event, permission, Threads }) {
  const { threadID, messageID } = event;
  if (permission == 0) return api.sendMessage("⚡ Only administrators are allowed to toggle this!", threadID);

  let data = JSON.parse(fs.readFileSync(path))
  let dataThread = (await Threads.getData(threadID)).threadInfo
  const threadName = dataThread.threadName;

  if (data[threadID].status == false) {
    data[threadID] = {
      namebox: threadName,
      status: true
    }
  } else data[threadID].status = false

  fs.writeFileSync(path, JSON.stringify(data, null, 2));

  api.sendMessage(
    `✅ Successfully ${data[threadID].status == true ? `enabled` : `disabled`} the group name changing prohibition mode!`,
    threadID
  );
};

function PREFIX(t) {
  var dataThread = global.data.threadData.get(t) || {}
  return dataThread.PREFIX || global.config.PREFIX
}
