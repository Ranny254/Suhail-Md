const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254711645930";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_31_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyLFxuICAgICAgICA1NSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNSxcbiAgICAgICAgNixcbiAgICAgICAgODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA3LFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYyLFxuICAgICAgICA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrWnNBNUFON0xMZGZVVTFPR2NMTGorWEx0V2piNkJCY0V6NDl6bDVRMERBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFcHVoTHZvcFJ4MmRUQTVOdmZySlFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNjMWY5ZjA0LTNkYTEtNGQyNi05ZTg2LTNlYWQ4MWQ4ZjM2OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAzMyxcbiAgICAgIDksXG4gICAgICAyNSxcbiAgICAgIDIxMCxcbiAgICAgIDI1LFxuICAgICAgMTExLFxuICAgICAgMTUxLFxuICAgICAgMjMzLFxuICAgICAgNDEsXG4gICAgICAyMTYsXG4gICAgICA0NyxcbiAgICAgIDMwLFxuICAgICAgMTMxLFxuICAgICAgMTkyLFxuICAgICAgMTQ3LFxuICAgICAgMTY2LFxuICAgICAgMyxcbiAgICAgIDEwNyxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTU4LFxuICAgICAgMjU1LFxuICAgICAgOCxcbiAgICAgIDIwNCxcbiAgICAgIDI1MyxcbiAgICAgIDIzMixcbiAgICAgIDEzMyxcbiAgICAgIDk1LFxuICAgICAgNDcsXG4gICAgICAyNDQsXG4gICAgICAxMTksXG4gICAgICAxOSxcbiAgICAgIDE2OCxcbiAgICAgIDEyOCxcbiAgICAgIDIxMCxcbiAgICAgIDIxOSxcbiAgICAgIDEwOCxcbiAgICAgIDIzNSxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRZRDgxS1RXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTE2NDU5MzA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZGz8J2SmvCdkorwnZKP8J2SiC4uLlwiLFxuICAgIFwibGlkXCI6IFwiMzg2MjkzMzg1NjY4NDU6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0hWaVhFUXk1YlF0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUbEdXMFIrSXBiLzFjdTJLN1ZveXgyUFBHaEpzbTJPN3M2VW91b0dyckY0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFMWlZDRGptQmhKN05lSS8xbWp6d2NMZlRmR1JYNitNRXBCZkp3TEErU1dYRlJjaUFRRS9jZm1JK1RLY0Z2OWZCYVRxRzZnS21CbFFPenFHa3pxSEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjMrLzBSS2hyejQ5VFdMY3hsWkJSOE5wNUg0R2NsUTRjMDZWMk1Ec1ZSNW41S1oxWTE3ajFWN2hlL1AxUzJPRHZWeXBVSVVxZ0xYeW11THNTbDJrYUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxMTY0NTkzMDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NzgyNTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKdXpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp1ei5qc29uIjogIntcImtleURhdGFcIjpcIk1lSXZLMXRKRHBmTGp5WjZ1SnkzTmdlM0RQcDlSTlp1WFBGMHJ4akVLRk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjM3MTM2NTM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
