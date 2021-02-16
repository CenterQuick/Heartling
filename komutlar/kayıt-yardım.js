const Discord = require('discord.js');
exports.run = function(client, message) {


let prefix = "." // Prefixin Neyse Artık


const chery = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`${client.user.username} Yardım`,client.user.avatarURL())
.setDescription(`Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
.setTimestamp()
.addField("\`.e\` ",`**Erkek Rolü Verir**`)
.addField("\`.k\` ",`**Kız Rolü Verir**`)
.addField("\`.stat\` ",`Toplam Kayıt Ettiğin İstatistik Çıkar`)
.addField("\`.sıfırla\` ",`Kayıt Sıfırlama Komutu [YETKİLİYE ÖZEL]`)
.addField("\`.top\` ",`En Çok Kayıt Eden Liste`)
.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(chery)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};