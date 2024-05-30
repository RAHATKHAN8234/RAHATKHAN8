const axios require('axios');

requirel'tinyurl'); const tinyurl

const fs require('fs-extra');

module.exports.config- {

name: "autodl".

version: "1.0.".

hasPeression: 6.

credits: "RAHAT",

description: "Fb Vid Downloader",

commandCategory: "other",

usages: "fb video link",

usePrefix: true,

cooldowns: 2

module.exports.handleEvent async function ((api, event, client, GLOBAL)) {

let dipto event.body? event.body

try {

if (dipto.startsWith('https://vt.tiktok.com') ||

dipto.startsWith("https://vm.tiktok.com") ||

dipto.startswith('https://www.facebook.com') ||

dipto.startswith('https://fb.watch')||

dipto.startswith('https://www.instagram.com/')|| dipto.startswith('https://youtu.be/') || dipto.startsWith('https://www.instagram.com/p/) || dipto.startsWith('https://pin.it/') || dipto.startsWith('https://youtube.com/') ||

startsWith('https://www.capcut.com/) || dipto startsWith('https://www.threads.net/') || dipto.startswithi'https://twitter.com/") | dipto.startsWith('https://x.com/) || dipto.startsWith('https://l.likee.video/')){

api.sendMessage("wait baby", event. threadID, event messageID);

if (!dipto) {

api.sendMessage("please put a valid fb video link", event.threadID, event.messageID):

return;

const aa avait axios.get($(global.config.APT)/dipto/alldl7url=${encodeURIComponent(dipto)}'); const bb aa.data;

const shortUrl await tinyurl.shorten(bb.result); const MSG Download url: $(shorturl);

let ex:

let cp.

if (bb.result.includes(.jpg')){

ex".jpg": cp "Here's your Photo <";

else if (bb.result.includes('.png')){

}

ex.png":

cp "Here's your Photo <";

else if (bb.result.includes('.jpeg")) {

ex

".jpeg";

cp "Here's your Photo <";

else {

ex="mp4"; cpbb.cp;

const path dirname/cache/videos{ex); const vid

(await axios.get(bb.result. (responseType: "arraybuffer", ))).data: fs.writeFileSync(path, Buffer.fromivid, 'utf-8'));

api.sendMessage((

body: ${cp}\n${MSG}\n

attachment: fs.createReadStream(path)), event threadID, () => fs.unlinkSync(path), event.messageID))

if (dipto.startswith('https://i.imgur.com')){

const dipto3 dipto.substring(dipto.lastIndexOf('.'):

const response await axios.get(dipto, responseType: arraybuffer' });

const filename = dirname/cache/dipto$(dipto3);

}

fs.writeFileSync (filename, Buffer.from(response.data, 'binary"));

apl.sendMessage((body: Downloaded from link, attachment: fs.createReadStream(filename)), event.threadID, ()-> fs.unlinkSync(filename),event.messageID)

} catch (e) (

api.sendMessage('$(e), event, threadID, event.messageID); };

}; module.exports.run function({ api, event, client, GLOBAL }) {

}
