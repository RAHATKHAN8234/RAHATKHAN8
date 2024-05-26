module.exports.config = {
    name: "adminupdate",
    version: "1.1.1",
    hasPermssion: 1,
    credits: "RAHAT",
    description: "Turn on/off anti-output",
    commandCategory: "Nhóm",
    usages: "",
    cooldowns: 0
}
module.exports.run = async function({
    api: a,
    event: e,
    args: g,
    Threads: T
}) {
    const {
        threadID: t,
        messageID: m,
        senderID: s
    } = e
    let getDataThread = await T.getData(t) || {}
    const {
        data,
        threadInfo
    } = getDataThread
    if (typeof data.threadUpdate == "undefined") {
        data.threadUpdate = {
            status: true,
            send: true,
            unsend: true,
            timeout: 10,
            storage: []
        }
        await T.setData(t, {
            data
        });
        await global.data.threadData.set(t, data)
    }
    var msg = `==== [ 𝗨𝗣𝗗𝗔𝗧𝗘 𝗡𝗛𝗢́𝗠 ] ====\n━━━━━━━━━━━━━━━━━━\n1. Group update notification(in progress ${data.threadUpdate.send == true ? "is on" : "in progress turn off"})\n2. On one's own unsend Group update notification(in progress ${data.threadUpdate.unsend == true ? "Is on" : "shutting down"})\n3. + seconds Unsend tb after the number of seconds you set, currently unsend later ${data.threadUpdate.timeout}s\n━━━━━━━━━━━━━━━━━━\n➝ Reply STT to make changes`
    a.sendMessage(msg, t, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: s
      })
    }, m)
}
module.exports.handleReply = async function ({ api: a, event: e, handleReply: h, Threads: T }) {
  const { threadID: t, messageID: m, senderID: s, body: y } = e
  let getDataThread = await T.getData(t) || {}
    const {
        data,
        threadInfo
    } = getDataThread
  var msg = ""
  const arr = y.split(" ")
  if (arr[0] == "1") {
    const status = data.threadUpdate.send == true ? false : true
    data.threadUpdate.send = status
    await T.setData(t, {
        data
    });
    await global.data.threadData.set(t, data)
    msg = `➝ Already ${status == true ? "turn on" : "turn off"} Group update notification`
    a.sendMessage(msg, t, m)
  }
  if (arr[0] == "2") {
    const status = data.threadUpdate.unsend == true ? false : true
    data.threadUpdate.unsend = status
    await T.setData(t, {
        data
    });
    await global.data.threadData.set(t, data)
    msg = `➝ Already ${status == true ? "turn on" : "turn off"} Automatically unsend group update notifications`
    a.sendMessage(msg, t, m)
  }
  if (arr[0] == "3") {
    data.threadUpdate.timeout = parseInt(arr[1])
    await T.setData(t, {
        data
    });
    await global.data.threadData.set(t, data)
    msg = `➝ The group update notification self-unsend time has been set ${arr[1]}s`
    a.sendMessage(msg, t, m)
      }
} 
