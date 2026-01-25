/**
  GIT : https://github.com/colystutorial/clybgrmvr
  DISCORD SERVER : https://discord.gg/miuna
 * **********************************************
 *   Code by COLYFLOUR
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});
app.listen(port, () => {
  console.log(`🔗 Listening to COLY: http://localhost:${port}`);
  console.log(`🔗 Powered By COLY`);
});


const statusMessages = ["assisting coly >"<","vouch within 12hrs!","developed by @colyflour","helping at gg./miuna","watch Nagi no Asukara w/me!","i just wanted to be happy"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**
  GIT : https://github.com/colystutorial/clybgrmvr
  DISCORD SERVER : https://discord.gg/colyflour
 * **********************************************
 *   Code by COLYFLOUR
 * **********************************************
 */

function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨ENJOY YOUR CUSTOMIZED BOT STATUS!`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️DM me on discord for concerns @colyflour`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

/**
  GIT : https://github.com/colystutorial/clybgrmvr
  DISCORD SERVER : https://discord.gg/colyflour
 * **********************************************
 *   Code by COLYFLOUR
 * **********************************************
 */
