//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NEN3BSWkxlVkFmd3FKamN2WjZSUFRyOUVkdTljQlIxcGdVY3BGS20xYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXI2Qm9PUHFFNmRGdlFvZVRCd3NrY1hvM0NzL2pXME9EeE1ORWhxWEhncz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR3pTU0xBNldtUnlQMDFNNDVzSjlCVytGQzJoZk5yTWhxdWJqU3R4NjBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZmNBZkFpUFhhTjV1bkNvYUdPRjN6b1ZrTm1WcUtCc3RyUnlWSGFzWVZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFZjI2dStxcTVYa2JwM1k2MytNcHFWMEd1Y3Z0N1RIU25nOEY5UTVkblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBkWFNWTFMwRUtzNS9waEJPVkdRWGV0QnJ5ditYYmM3WnRWVldLWEhRaTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBsOGNWTUFkSmZtTWlMdDFLZlVteDdOem1GMDNhdEsvVWF6Snp1NkNWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjB6U3RMZTJqR0VoWUM1aUcxOC8yMHgwYytOcjVkNG9Oc2VOcllyVm8zST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRGUitNK3I5UlhOUllFeHFzYkxUbDZhankvOHZPdi9tSFVnOEZmZjZwOHVIckhlNjZObXQxeHcxYS9Ha2dMcnNrbkYrRXZ3RVRqc3piTjlEbkdvUkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiIxSVFWNHBNb25BM0psdW5RaENHOHNSbTBTTGJWczl1M01yb2dRQkk3cWFnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc5NDE2OTUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAwNTBFRjU3NzYwMjAwN0QyMDY1ODM1QUFFMTY1Q0QwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NjE4OTB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc5NDE2OTUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdFMTkzQjM0MzU5REM1N0Q3NUEyRUVGMkY1NTYzM0NDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NjE4OTF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc5NDE2OTUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI1MjRFMUQwQzgyMUYxOURFOUY1M0UwNkE1ODI0QjZDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NjE4OTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc5NDE2OTUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIxMzc4MTg5MTUwQzU0NTA1MUJDQjZGQUY2MDQ4NEE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NjE4OTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InI3ekxKMTVhUTAybTFSOUQ5Ni1hZkEiLCJwaG9uZUlkIjoiZjM2MjRiOGMtNjFmZC00MDg4LTg1MDgtYTc2MDA3ZjJjYWJhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxBWnZPb3RjSHcyR05rdnR2YW9SQzczeTRDND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUYXdKUDVLK29DemMvOUZFM2c3WjFJY3p4SVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzZGUDFDMkIiLCJtZSI6eyJpZCI6Ijk0Nzc5NDE2OTUxOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS0FWSVNIS0EgTklSTUFMIEtBTktBTkFNRyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWlFMTRzQkVMV0JrN2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ2hmRXdSL25Pb09DMVhDRE9HNGJqRUZkdmZuL0IwZFF6Q3Fud0dBTXVsbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVzJ5OThGdTh6TCs2eUpDVTgrL3N2UUl3WHBlOWJNWkIxeGQyMi81SWdEVW1GdjJpMHBtaFA4MForZGxmckljY1pHRjZOSE5XQWtQYkFQZTB2Y01GQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlZta2xpOGNXK3lBS3JqejdQUy9keEI5YzV5TkJFZlFmU3NVYTlYbEkxQVIxVjhuNjljMjdadThUdm0zckJxODRJNEs1RVZGRDRsUzJvSThaY2FhWUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Nzk0MTY5NTE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRb1h4TUVmNXpxRGd0Vndnemh1RzR4QlhiMzUvd2RIVU13cXA4QmdETHBhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNDYxODg5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIzVyJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
