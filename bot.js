const Discord = require('discord.js');
const client - new Discortd.Client();

client.login(NzMyMjk1NTI3MzExNDc0ODI5.XxGmkA.nhtDVYrp7DPvn7XEPz4tZagDErU)

client.on('ready', () => {
    console.log("The Bot is Logged!");
}));

client.on('mesage', mesage => {
    if(mesage.author.bot)
        return;
    
    if(mesage.content.toLowerCase() === 'hello')
        message.channel.send("Hola Calvo");
})