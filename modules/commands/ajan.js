module.exports.config = {
  name: "ajan",
  version: "2.0",
  hasPermission: 0,
  credits: "RAHAT",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  usePrefix: true,
  commandCategory: "AutoTime",
  cooldowns: 3,
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
      "03:55:00 AM": {
        message: "Fajr Prayers Alert",
        url: "https://i.imgur.com/C0bFtoh.jpeg"
      },
      "12:45:00 PM": {
        message: "Dhuhr Prayers Alert",
        url: "https://i.imgur.com/vtOBIkA.jpeg"
      },
      "04:45:00 PM": {
        message: "Asr Prayers Alert",
        url: "https://i.imgur.com/hprI30O.jpeg"
      },
      "06:48:00 PM": {
        message: "Maghrib Prayers Alert",
        url: "https://i.imgur.com/vlFSFL6.jpeg"
      },
      "08:15:00 PM": {
        message: "Isha Prayers Alert",
        url: "https://i.imgur.com/7K67WOG.jpeg"
      }
  };
  if(timerData){
const checkTimeAndSendMessage = async() => { 
  const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).split(',').pop().trim(); 
  const attachment = (await require('axios').get(timerData[currentTime].url, { responseType: 'stream' })).data;

    if (timerData[currentTime]) global.data.allThreadIDs.forEach(async threadID => await api.sendMessage({body: timerData[currentTime].message, attachment }, threadID)); 
    setTimeout(checkTimeAndSendMessage, 1200 - new Date().getMilliseconds()); 
   }; 
  checkTimeAndSendMessage();
 }
};

module.exports.run = ({}) => {};
