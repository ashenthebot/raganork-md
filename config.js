const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'v3.0.0',
    ALIVE: process.env.ALIVE || "https://i.ibb.co/GcBd0HS/meme.png Hey {sender}, I'm LIVING🌚💗🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 𝖔𝖜𝖓𝖊𝖉 𝖇𝖞 💗 A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ 🇱🇰 \n Uptime: {uptime}",
    BLOCK_CHAT: process.env.BLOCK_CHAT || '',
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
    AUTOMUTE_MSG: process.env.AUTOMUTE_MSG || '_Group automuted!_\n_(Change this by setting var AUTOMUTE_MSG)_',
    ANTI_SPAM: process.env.ANTI_SPAM || '919074309534-1632403322@g.us',
    MULTI_HANDLERS: convertToBool(process.env.MULTI_HANDLERS) || true,
    ANTI_BOT: process.env.ANTI_BOT || '',
    ANTISPAM_COUNT: process.env.ANTISPAM_COUNT || '7/10',
    AUTOUNMUTE_MSG: process.env.AUTOUNMUTE_MSG || '_Group auto unmuted!_\n_(Change this by setting var AUTOUNMUTE_MSG)_',
    AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS) || true,
    READ_MESSAGES: convertToBool(process.env.READ_MESSAGES) || false,
    PMB_VAR: convertToBool(process.env.PMB_VAR) || false,
    DIS_PM: convertToBool(process.env.DIS_PM) || false,
    REJECT_CALLS: convertToBool(process.env.REJECT_CALLS) || true,
    PMB: process.env.PMB || '_Personal messages not allowed, BLOCKED!_',
    READ_COMMAND: convertToBool(process.env.READ_COMMAND) || true,
    SESSION: process.env.SESSION.trim() || 'Raganork~aa3949cb41ef8ff902175863bf9b0741:426f4b7869626271594c593d',
    IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
    RG: process.env.RG || '919074309534-1632403322@g.us',
    BOT_INFO: process.env.BOT_INFO || '🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 ;💗 A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ 🇱🇰;94784749430;https://i.ibb.co/GcBd0HS/meme.png;https://wa.me/+94784749430',
    RBG_KEY: process.env.RBG_KEY || '2QAJSWsA1xeFG2srnMhGnGGw',
    ALLOWED: process.env.ALLOWED || '91,94,212',
    CHATBOT: process.env.CHATBOT || 'off',
    HANDLERS: process.env.HANDLERS || '.,,',
    STICKER_DATA: process.env.STICKER_DATA||"🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀",
    BOT_NAME: process.env.BOT_NAME || '🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 ',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "public" ? '🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 ;🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 ;https://i.ibb.co/GcBd0HS/meme.png' : process.env.AUDIO_DATA,
    TAKE_KEY: process.env.TAKE_KEY || '',
    MODE: process.env.MODE || 'public',
    WARN: process.env.WARN || '4',
    ANTILINK_WARN: process.env.ANTILINK_WARN || '',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './bot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUDO: process.env.SUDO || "",
    LANGUAGE: process.env.LANGUAGE || 'english',
    DEBUG: DEBUG,
    ACR_A: "ff489a0160188cf5f0750eaf486eee74",
    ACR_S: "ytu3AdkCu7fkRVuENhXxs9jsOW4YJtDXimAWMpJp"
    };
