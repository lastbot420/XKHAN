const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " 𝐉𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃 𝐒𝐀𝐇𝐄𝐋 ";
		const ownAge = "『 ⸙__19+__⸙ 』";
		const messenger = "https://m.me/Tera.Bap.C4X";
		const authorFB = "https://www.facebook.com/Tera.Bap.C4X";
		const authorNumber = "_01731736377";
		const Status = "𝐒𝐈𝐍𝐆𝐋𝐄";
		const urls = [
"https://i.imgur.com/bIgtOOj.jpeg",
"https://i.imgur.com/bIgtOOj.jpeg",
"https://i.imgur.com/bIgtOOj.jpeg",
"https://i.imgur.com/bIgtOOj.jpeg"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `ღ《 𝐁𝐎𝐓 𝐀𝐍𝐃 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 》⸙
\🤖BOT NAME : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾BOT SYSTEM PREFIX : ${global.GoatBot.config.prefix}
\💙 OWNER NAME: ${authorName}
\📝AGE  : ${ownAge}
\💕RELATIONSHIP: ${Status}
\🌐WP : ${authorNumber}
\🌍 FACEBOOK LINK : ${authorFB}
\🗓DATE : ${date}
\⏰NOW TIME : ${time}
\🔰ANY HELP CONTACT :⩸__${messenger}__⩸
\📛BOT I'S RUNNING FOR : ${uptimeString}
    𝑻𝒈: https://t.me/TAMIMOM69
    𝑰𝒏𝒔𝒕𝒂: https://www.instagram.com/tamim_4203?igsh=YzljYTk1ODg3Zg==
    𝑪𝒂𝒑𝑪𝒖𝒕: 𝐉𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃 𝐒𝐀𝐇𝐄𝐋
    𝑻𝒊𝒌𝑻𝒐𝒌: 𝐍𝐎𝐓 𝐔𝐒𝐈𝐍𝐈𝐆
    𝒀𝒐𝒖𝑻𝒖𝒃𝒆: 𝐆𝐎𝐑𝐈𝐁𝐄𝐑 𝐀𝐁𝐀𝐑 𝐘𝐎𝐔𝐓𝐔𝐁
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
