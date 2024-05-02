const axios require("axios");

module.exports

config: {

}. }

{

name: "gcimg",

aliases: ["groupimage", "grpimg"],

version: "1.0",

author: "RAHUL", countDown: 5,

role: 0.

description: {

}, en: "Get Group Image"

category: "IMAGE",

guide: (

en: "{pn) [TID/leave blank1"

onStart:

async function ({ api, args, message, event, usersData }) {

try{

let tid;

if(args[0]){

tid args[0];

else{

tid event.threadID;

} if(!tid){

}

message.reply(| ThreadID Not Found.');

return;

let threadInfo await api.getThreadInfo(tid);

let participantIDs threadInfo.participantIDs;

let avatarURLs = [];

for (let userID of participantIDs) {

let url await usersData.getAvatarUrl(userID); avatarURLs.push(url);

const data2 = {

}; if (data2) {

memberPhotos: avatarURLs,

groupPhotoURL: threadInfo.imageSrc, admin: threadInfo.adminIDs.length,

groupName: threadInfo.threadName

});

}

var waitingMsg await message.reply("| Please wait a while.");

api.setMessageReaction("", event.messageID, (err) => {}, true)

const (data) await axios.post('https://noobs-api.onrender.com/dipto/groupPhoto', data2);

if (data.img) {

api.setMessageReaction("", event.messageID, (err) {}, true)

message.unsend(waitingMsg.messageID);

message.reply({

body: Here is your group image <

attachment: await global.utils.getStreamFromURL(data.img)

}catch (error) {

console.log(error);

message.reply(error.message);

};

};
