const Discord = require("discord.js");
const firebase = require('firebase');
const db = firebase.database();

exports.run = async (client, message, args) => {
  
    let xxx = await db.ref(`Jina/Dados/Comandos-Usados/Quantia`).once('value')
        xxx = xxx.val()
  
    let yyy = 1
    
    db.ref(`Jina/Dados/Comandos-Usados/Quantia`).set(xxx + yyy)
  
  var manu = await db.ref(`Jina/Dados/Manutenção/Manu`).once('value')
      manu = manu.val()
  
  var manumsg = await db.ref(`Jina/Dados/Manutenção/ManuMsg`).once('value')
      manumsg = manumsg.val()
  
    if(manu == 'Online'){

    let embedx = new Discord.MessageEmbed()

    .setTitle('<a:cristal:714275787712233502> Jina 진아 - Erro <a:cristal:714275787712233502>')
    .setDescription(`Estou em manutenção!\n Para saber mais sobre a manutenção reaja com ⚠`)
      
     return message.channel.send(embedx).then(msgk => {
       msgk.react('⚠').then(r => {
         
       })
       
           const ManuFilter = (reaction, user) => reaction.emoji.name === "⚠" && user.id === message.author.id;
           const Manu = msgk.createReactionCollector(ManuFilter);
       
         Manu.on("collect", r2 => {
         
         let manu2 = new Discord.MessageEmbed()
         
         .setTitle('<a:cristal:714275787712233502> Jina 진아 -  Sobre a Manutenção <a:cristal:714275787712233502>')
         .setDescription(manumsg)
         
         msgk.reactions.removeAll();
         msgk.edit(manu2)
         
       })
       
     })
      
    }
  
  let member = message.mentions.users.first() || message.author;

  var wallpaper = await db.ref(`Economia/Wallpapper/${member.id}/Wallpaper`).once('value')
      wallpaper = wallpaper.val()
  if (!wallpaper) wallpaper = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX0tZIifE67Z9X_Ki0q5-TB-dPCvlvGcK0u4nqUKWdMf4RFAnm&usqp=CAU";

  var poppycoin = await db.ref(`Economia/Money/${member.id}/Dinheiro`).once('value')
      poppycoin = poppycoin.val()
  if (!poppycoin) poppycoin = 0;

  var poppycolor = await db.ref(`Economia/Color/${member.id}/Cor`).once('value')
      poppycolor = poppycolor.val()
  if (!poppycolor) poppycolor = '#36393e'

  var jinacoins = await db.ref(`Economia/JinaCoins/${member.id}/Dinheiro`).once('value')
      jinacoins = jinacoins.val()
  if (!jinacoins) jinacoins = 0;

  var vip = await db.ref(`Economia/Vip/${member.id}/Vip`).once('value')
      vip = vip.val()
  if (!vip) vip = "Sem Vip";

  let embedperfil = new Discord.MessageEmbed()

    .setTitle("Jina 진아 - Perfil")
    .setDescription(`Exibindo o Perfil De **${member}**`)
    .addField(`Jina Coins`, `${poppycoin}`, true)
    .addField(`진아 Coins`, `${jinacoins}`, true)
    .addField(`Vip`, `${vip}`, false)
    .setThumbnail(member.avatarURL())
    .setImage(wallpaper)
    .setColor(poppycolor);

  message.channel.send(embedperfil)
};

exports.help = {
  name: "perfil",
  aliases: []
};
