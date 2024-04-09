module.exports.config = {
  name: "worldclock",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "RAHUL",
  description: "View the dates and times of different countries",
  commandCategory: "system",
  usePrefix: false,
  cooldowns: 2,
};


module.exports.run = async ({ api, event }) => {

  const moment = require("moment-timezone");

  const gio = moment.tz("Asia/Dhaka").format("h:mm:ss A  D/MM/YYYY");
  const gio2 = moment.tz("Europe/London").format("h:mm:ss A  D/MM/YYYY");
  const gio1 = moment.tz("America/Brasilia").format("h:mm:ss A  D/MM/YYYY");
  const gio3 = moment.tz("Asia/Seoul").format("h:mm:ss A  D/MM/YYYY");
  const gio4 = moment.tz("Asia/Tokyo").format("h:mm:ss A  D/MM/YYYY");
  const gio5 = moment.tz("America/New_York").format("h:mm:ss A  D/MM/YYYY");
  const gio6 = moment.tz("Asia/Kuala_Lumpur").format("h:mm:ss A  D/MM/YYYY");
  const gio7 = moment.tz("Europe/Paris").format("h:mm:ss A  D/MM/YYYY");
  const gio8 = moment.tz("Asia/Manila").format("h:mm:ss A  D/MM/YYYY");
  const gio9 = moment.tz("Asia/Ho_Chi_Minh").format("h:mm:ss A  D/MM/YYYY");

  const message = `╭•┄┅════❁🌺❁════┅┄•╮\n🌺      𝐖𝐎𝐑𝐋𝐃 𝐂𝐋𝐎𝐂𝐊     🌺     \n╰•┄┅════❁🌺❁════┅┄•╯\n\n ╭•┄┅════❁🌺❁════┅┄•╮\n   🇧🇩BD:${gio9}\n ╰•┄┅════❁🌺❁════┅┄•╯\n╭•┄┅════❁🌺❁════┅┄•╮n\n 🇻🇳 Vietnam: ${gio}\n╰•┄┅════❁🌺❁════┅┄•╯\n╭•┄┅════❁🌺❁════┅┄•╮\n 🇬🇧 London: ${gio2}\n╰•┄┅════❁🌺❁════┅┄•╯\n╭•┄┅════❁🌺❁════┅┄•╮\n🇺🇸 New York: ${gio5}\n╰•┄┅════❁🌺❁════┅┄•╯\n╭•┄┅════❁🌺❁════┅┄•╮\n🇰🇷 Seoul: ${gio3}\n╰•┄┅════❁🌺❁════┅┄•╯\n╭•┄┅════❁🌺❁════┅┄•╮\n 🇯🇵 Tokyo: ${gio4}\n╰•┄┅════❁🌺❁════┅┄•╯\n╭•┄┅════❁🌺❁════┅┄•╮\n 🇧🇷 Brasilia: ${gio1}\n╰•┄┅════❁🌺❁════┅┄•╯\n╭•┄┅════❁🌺❁════┅┄•╮\n 🇲🇾 Kuala Lumpur: ${gio6}\n╰•┄┅════❁🌺❁════┅┄•╯\n╭•┄┅════❁🌺❁════┅┄•╮\n 🇫🇷 Paris: ${gio7}\n╰•┄┅════❁🌺❁════┅┄•╯\n╭•┄┅════❁🌺❁════┅┄•╮\n🇵🇭 Philippines: ${gio8}\n╰•┄┅════❁🌺❁════┅┄•╯`;

  api.sendMessage(message, event.threadID);
};
