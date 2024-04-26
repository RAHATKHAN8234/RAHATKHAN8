module.exports.config = {
  name: "mention-bot",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "RAHUL",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "system",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100017950245626") {
    var aid = ["100017950245626" , "" , ""];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Khan Rahul RK Family ke Sath Busy hun , Mujhe kyu bula rahe ho" , "Abe Meri Boss Ko mention mat kar" , "Dimag Mat khao" , "Kya hua janu mujhe bulaya🙂" , "Koi kaam ni hai kya tujhe" , "Bolo na babu" , "Meri boss k yaad arahi tumhe itni" , "Ha meri jan😙" , "Boss mt bulya kro🙄" , "Tera sar f0d dena me , baar mention mt kro😒" , "Ek Bar Me smjh ni ata tujhe kya meri baat ,meri boss ko baar bar mention krrhe ho😒😒😒😒" , "Abee jaa na 😒" , "Mujhe Bulaya😘kya"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
