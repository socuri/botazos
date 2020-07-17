const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzMyMjk1NTI3MzExNDc0ODI5.XxGncA.KmmvHSCZ98Q4AizcBFxDow_59Eo');