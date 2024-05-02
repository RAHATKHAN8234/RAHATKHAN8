const axios = require("axios");

module.exports = {
    config: {
        name: "gcimg",
        version: "1.0",
        author: "RAHAT",
        countDown: 5,
        role: 0,
        description: {
            en: "Get Thread Image by ThreadID"
        },
        category: "Image",
        guide: {
            en: "{pn} [TID/leave blank]"
        }
    },

    onStart: async function ({ api, args, message, event, usersData }) {
        try{
            let tid;
            if(args[0]){
                tid = args[0];
            }
            else{
                tid = event.threadID;
            }
            let threadInfo = await api.getThreadInfo(tid);
            let participantIDs = event.participantIDs
            let avatarURLs = [];
            for (let userID of participantIDs) {
                let url = await usersData.getAvatarUrl(userID);
                avatarURLs.push(url);
            }
            const data2 = {
                    memberPhotos: avatarURLs,
                    groupPhotoURL: threadInfo.imageSrc,
                    admin: threadInfo.adminIDs.length,
                    groupName: threadInfo.threadName
                  };
             const { data } = await axios.post('https://noobs-api.onrender.com/dipto/groupPhoto', data2);
                message.reply({
                  body: `Here is your group image <😘`,
                  attachment: await global.utils.getStreamFromURL(data.img)
            });
        }catch (error){
                console.log(error);
                message.reply(error.message);
            };
       }
  };
