const fs = require("fs");
module.exports.config = {
	name: "salam",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "RAHUL", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Ass-salamu alaykum") ||
     react.includes("ٱلسَّلَامُ عَلَيْكُمْ") || 
react.includes("আস-সালামু আলাইকুম") || react.includes("Allah") || react.includes("আসসালামু আলাইকুম") || react.includes("assalamu alaikum") ||
react.includes("Salam") ||
react.includes("assalamualaikum") || react.includes("আসসালামুয়ালাইকুম") || react.includes("assalamalikum") ||
react.includes("Assalamualaikum") ||
react.includes("assalamualaikum") ||
react.includes("Assalamu alaikum") ||
react.includes("Assalamalikum") ||
react.includes("kum") ||
react.includes("assalamu walikum") ||
react.includes("আসসালামুলাইকুম") ||     
react.includes("Assalamu Walikum") ||
react.includes("salam")) {
		var msg = {
				body: "-ওয়া আলাইকুমুস-সালাম, ওয়া রহমাতুল্লাহি, ওয়া বার-কাতুহ্-!!🖤🌺"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  } 
