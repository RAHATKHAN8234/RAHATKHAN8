const axios = require("axios");

module.exports = {
    config: {
        name: "gcimg",
        aliases: ["gcimage", "grpimage"],
        version: "1.0",
        credits: "RAHAT"
        cooldowns: 5,
        hasPermssion: 0,
        description: "𝗚𝗲𝘁 𝗚𝗿𝗼𝘂𝗽 𝗜𝗺𝗮𝗴𝗲",
        commandCategory: "𝗜𝗠𝗔𝗚𝗘",
        : "{pn} --color [color] --bgcolor [color] --admincolor [color] --membercolor [color]"
    },

    run: async function ({ api, args, event, message }) {
        try {
            let color = "red";
            let bgColor = ""; 
            let adminColor = ""; 
            let memberColor = "pink"; 
            for (let i = 0; i < args.length; i += 2) {
    switch (args[i]) {
        case "--color":
            color = args[i + 1];
            break;
        case "--bgcolor":
            bgColor = args[i + 1];
            break;
        case "--admincolor":
            adminColor = args[i + 1];
            break;
        case "--membercolor":
            memberColor = args[i + 1];
            break;
    }
}
            let threadInfo = await api.getThreadInfo(event.threadID);
            let participantIDs = threadInfo.participantIDs;
            let adminIDs = threadInfo.adminIDs.map(admin => admin.id);
            let memberURLs = await getAvatarUrls(participantIDs);
            let adminURLs = await getAvatarUrls(adminIDs);

            const data2 = {
                memberURLs: memberURLs,
                groupPhotoURL: threadInfo.imageSrc,
                adminURLs: adminURLs,
                groupName: threadInfo.threadName,
                bgcolor: encodeURI(bgColor),
                admincolor: encodeURI(adminColor),
                membercolor: encodeURI(memberColor),
                color: encodeURI(color)
            };

            if (data2) {
                var waitingMsg = await api.sendMessage("⏳ | 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝 𝚊 𝚠𝚑𝚒𝚕𝚎.", event.threadID);
                api.setMessageReaction("⏳", event.messageID, (err) => {}, true)
            }
                const { data } = await axios.post(https://noobs-api2.onrender.com/dipto/groupPhoto, data2);

                if(data.img){
                api.setMessageReaction("✅", event.messageID, (err) => {}, true)
                message.unsend(waitingMsg.messageID);
                message.reply({
   𝙷𝚎𝚛𝚎 𝚒𝚜 𝚢𝚘𝚞𝚛 𝚐𝚛𝚘𝚞𝚙 𝚒𝚖𝚊𝚐𝚎 <😘 𝚢𝚘𝚞𝚛 𝚐𝚛𝚘𝚞𝚙 𝚒𝚖𝚊𝚐𝚎 <😘`,
                  attachment: await global.utils.getStreamFromURL(data.img)
            });
               }
        } catch (error) {
            console.log(error);
            message.r❌ | 𝙴𝚛𝚛𝚘𝚛: ${error.message}age}`);
        };
    }
};

async function getAvatarUrls(userIDs) {
    let avatarURLs = [];
  try {
       for (let userID of userIDs) {
const url = https://graph.facebook.com/${userID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662;
        avatarURLs.push(url);
    }
    return avatarURLs;
   } catch (error) {
    return avatarURLs.push("https://i.ibb.co/qk0bnY8/363492156-824459359287620-3125820102191295474-n-png-nc-cat-1-ccb-1-7-nc-sid-5f2048-nc-eui2-Ae-HIhi-I.png");
    }
}
