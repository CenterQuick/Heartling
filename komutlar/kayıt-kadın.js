const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["840137761793245184"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
const kadin = message.guild.roles.cache.find(r => r.id === "840137268182515722")
const kayıtsız = message.guild.roles.cache.find(r => r.id === "840137305607634995")
const reglog = message.guild.channels.cache.find(c => c.id === "840144794022051840")
const genelchat = message.guild.channels.cache.find(g => g.id === "840146116829773875")

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
const x = message.guild.member(member)

let tag = "夜"
let isim = args[1]
if(!isim) return message.channel.send(`Bir İsim Belirt`)

let bilgi = db.get(`yetkili.${member.id}`);  
db.add(`yetkili.${message.author.id}.kadin`,1 )
db.add(`yetkili.${message.author.id}.toplam`, 1)  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react('✅')
x.setNickname(`${tag} • ${isim}`)
x.roles.add(kadin)
x.roles.remove(kayıtsız)
//
x.setNickname(`${tag} • ${isim}`)
x.roles.add(kadin)
x.roles.remove(kayıtsız)

db.add(`kayıtSayi.${message.author.id}`, 1)
db.add(`erkekUye.${message.author.id}`, 1)
let kayitli = db.get(`erkekUye.${message.author.id}`);
let kayıtlar = db.fetch(`kayıtSayi.${message.author.id}`); 

const embed = new Discord.MessageEmbed()
.setTitle(`Kayıt İşlemi Tamamlandı !`)
    .addField(`Kayıt Eden:`, `<@${message.author.id}> Tarafından Kayıt Edildi`) 
    .addField(`Kayıt Edilen:`, `<@${member.id}> Kayıt Oldu`)
    .addField(`Verilen Rol:`, `<@&${kadin.id}> Rolleri Verildi`) 
    .addField(`Alınan Rol:`, `<@&${kayıtsız.id}> Rolleri Alındı`)
    .addField(`Yeni İsmin:`, `\`${tag} • ${isim}\` Olarak Güncellendi`) 
    .addField(`Yetkili Toplam:`, `\`${kayıtlar}\` Kayıtlara Sahip.`)
    .setThumbnail(message.author.avatarURL())
.setFooter(`NightMare Register`)
.setColor('GREEN')
client.channels.cache.get('840146116829773875').send(embed)


genelchat.send(`<@${member.id}>, NightMare sunucusuna Hoş Geldin. Keyifli zaman geçirmeni dileriz.`)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["register", "k", "kayit", "reg"],
    permLevel: 0
};

exports.help = {
    name: "kayıt"
}

