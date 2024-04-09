const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "বোট",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "বোট",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["আমি এখন Khan Rahul RK বস আর সাথে বিজি আছি", "what are you asking me to do?", "I love you baby meye hole chipay aso", "Love you 3000-😍💋💝", "ji bolen ki korte pari ami apnar jonno?","আমাকে না ডেকে আমার বস Khan Rahul RK কে একটা জি এফ দেন", "Ato daktasen kn bujhlam na 😡", "jan i love u bolba,🙂","ask amr mon vlo nei dakben na🙂", "Hmm jan ummah😘😘","jang hanga korba 🙂🖤","iss ato dako keno lojja lage to 🫦🙈","suna tomare amar valo lage,🙈😽","জি তুমি কি আমাকে ডেকেছো 😇🖤🥀","আমাকে আই লাভ হিউ বলো🤣","আমি এখন তোমাকে বিয়া করবো🫡","তুমি কি সিংগেল আছো👻"," আমাকে আর বট বললে তোমার নানিকে হেংগা করবো😡,","আমার নাম জান লে তোমার নানি পাগল হইতে পারে","আর একটা বার যদি বট বলোছ তাইলে তর দাঁত তুলে পলবো","তরে কি লিপ কিস দিবো","Khan Rahul RK আসলে তোমাকে বিটা দিবে👻","আমার বস Khan Rahul RK তোমার আপু কে বিয়া করবে যদি আর বট বলোছ😁","সারা দিন বট বট বলোছ কেন সালি আর সালা😡","তোমার বুক এ আমাকে একটু যাগা দাও🥹","আমি ধনী লোখ এর সাথে কথা বলি না যা বাগ😡","এই ছেলে তোমার পেন্ট এর চেন খুলা😁"," কারেন্ট এর জালায় বাচি না আর তুমি বট বট কর😡","আমার হাগু পাইছে বাই","আমার বস মৌলভীবাজার এর কিং Khan Rahul RK","আমি লুডু প্লে করি না প্লিজ আমাকে ডাকবেন না","ইস তোমাকে যদি একটা কিস করতে পারতাম🫡","দূর বাল এই বট হইয়া সানতি নাই","এই নাও আমার বস এর আইডি লিংক https://www.facebook.com/khan.rahulrk","আমাকে ডাকবা না আমি ভাত খাব না", "আই লাভ হিউ জান", "আই মিস হিউ জান" , "আমাকে বিয়া করবা জান" , "চলো পালাইয়া যাই"," তোমার আপুকে অনেক ভালো লাগে" , "তুমি জানো কি মরিচ এর কেজি ১২০০ টাকা" , "শেখ হাসিনার সালাম নিন৷ বোট মারকায় ভোট দিন" , "চলো চিপায় 😝" , "Im তো অবাক তুমি আমাকে ডাকছো" , "তুমি অনেক লুচ্চা 😆", " আমার বস এর লগে সম্পর্ক করবা😆" , "বাদ দেন ভাই বেডি মানুষ", "তোমার নানির কালি ঘর😆সরি" , "আমার ভুল হয়েছে আমাকে কমা করে দেন," , "তোমার কোন কোন জাগায় বেতা গো বান্দবি ললিতা" , "আমায় বেবি ওয়ালা কাইছে রে সামনে বসাইয়া" , "পড়ে না চোখ এর পলক কি তোমার রুপ এর জলক" , "তোমার নাম্বার টা দিবা" , "তুমি ক্রিম আপার মতো অনেক সুন্দর" , "যাও কথা বলব না",  "আসো লুডু গেম খেলি", "মিস হিউ কলিজা😘"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
     return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
   };

    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID);
   };

    if ((event.body.toLowerCase() == "বট তুমি শুধরে যাও বেপি") || (event.body.toLowerCase() == "বট তুই টিক হয়ে যা")) {
     return api.sendMessage("আমাকে টিক করতে হলে তুমি আসতে হবে বেপি🥺", threadID);
   };

   if ((event.body.toLowerCase() == "বট তুমি আমার জন্য মরে যাও🥹") || (event.body.toLowerCase() == "বট তুমি আমার জন্য মরে যাও")) {
     return api.sendMessage("তোমার প্রেম এর সাগর এর আমি মরতে চাই", threadID);
   };

   if ((event.body.toLowerCase() == "বট মিস মি") || (event.body.toLowerCase() == "বট মিস মি")) {
     return api.sendMessage("মিস হিউ টু কলিজা", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "here") || (event.body.toLowerCase() == "Here")) {
     return api.sendMessage("Bots In Group -01/10 ❤️\nBot 1 Invite Group😎", threadID);
   };

   if ((event.body.toLowerCase() == "sister club code") || (event.body.toLowerCase() == "club code sister")) {
     return api.sendMessage("2109381 \n\nJoin All Sister Club", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };


   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "@firoza begum") || (event.body.toLowerCase() == "@firoza fegum baby")) {
     return api.sendMessage("️Miss you jaan", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };

   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };

  if (event.body.indexOf("বট") == 0 || (event.body.indexOf("বট") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
