module.exports.config = {
	name: "left",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "RAHUL",
	description: "Send messages to groups!",
	commandCategory: "Admin",
	usages: "sendnoti [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
    const permission = ["100017950245626 "];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Only Khan Rahul RK k liye hai 👻 ye", event.threadID, event.messageID);
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage(' Out of the whole group successfully', event.threadID);
	});
  }
