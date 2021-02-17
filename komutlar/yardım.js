const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **Narcos Bot Yardım Menüsüne Hoşgeldiniz** `)
        .setDescription(`
  **<a:ok:782623356301213747>  ${prefix}alev**  alevli logo yapar
  **<a:ok:782623356301213747>  ${prefix}alev2**  alevli logo yapar 
  **<a:ok:782623356301213747>  ${prefix}gold **  goldlu logo yapar
  **<a:ok:782623356301213747>  ${prefix}gökkuşak**  gökkuşak logo yapar
  **<a:ok:782623356301213747>  ${prefix}neon**  neon logo yapar
  **<a:ok:782623356301213747>  ${prefix}pembe**  pembe logo yapar
  **<a:ok:782623356301213747>  ${prefix}altın **  altın logo yapar
  **<a:ok:782623356301213747>  ${prefix}anime**  anime logo yapar
  **<a:ok:782623356301213747>  ${prefix}google**  google logo yapar
  **<a:ok:782623356301213747>  ${prefix}odun**  odun logo yapar
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**<a:d_:782623868660482049>  ${prefix}davet __Botu Davet Edebilirsiniz!__**



`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/782622358925213708/782626126891581470/584d07d8803af1e79f1c468cbbfc7f52.gif`)
        .addField(`» Narcos Bot Bağlantıları`, ` <:771730904325816350:782622833221304331>  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=645226005144797184&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/NMnPUjK) **|** <:771730904325816350:782622833221304331> `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};
