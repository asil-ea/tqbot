const Discord = require('discord.js');

module.exports = (client, member) => {

    const msgEmbed = new Discord.RichEmbed()
    .setColor("#FF5347")
    .setTitle("**ÜYE AYRILDI**")
    .setURL("https://www.idk.com/")
    .setAuthor(member.user.tag, member.user.avatarURL)
    .setTimestamp();


    member.guild.channels.find(c => c.name === "kayıt-defteri").send(msgEmbed).catch(console.error);
}