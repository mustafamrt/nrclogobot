const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "**▬▬▬▬▬▬[** ©️ **» Narcos Bot** ©️ **]▬▬▬▬▬▬**  **  **Prefixim: `!`"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    )
    .setDescription(
      `

**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**

  **<a:ok:782623356301213747>  !alev**  alevli logo yapar
  **<a:ok:782623356301213747>  !alev2**  alevli logo yapar 
  **<a:ok:782623356301213747>  !gold **  goldlu logo yapar
  **<a:ok:782623356301213747>  !gökkuşak**  gökkuşak logo yapar
  **<a:ok:782623356301213747>  !neon**  neon logo yapar
  **<a:ok:782623356301213747>  !pembe**  pembe logo yapar
  **<a:ok:782623356301213747>  !altın **  altın logo yapar
  **<a:ok:782623356301213747>  !anime**  anime logo yapar
  **<a:ok:782623356301213747>  !google**  google logo yapar
  **<a:ok:782623356301213747>  !odun**  odun logo yapar

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/ZBmqym9JhG)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: !yardım**
> :bulb: **Discord Js Sürümü: 12.4.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ZBmqym9JhG)** **•** **[Botun Davet Linki](https://discord.gg/ZBmqym9JhG)** **•** **[Web-Site]( https://discord.gg/ZBmqym9JhG)**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
