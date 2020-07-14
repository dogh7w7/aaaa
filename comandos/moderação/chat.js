const Discord = require("discord.js");
const firebase = require('firebase');
const config = require('../../config.json')
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
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para usar esse comando!")
  
  if(!args[0]) return message.channel.send('Use on/off')
  
  const everyone = message.guild.roles.cache.find(e => e.name === '@everyone')
  
  if (args[0] === 'off') {
    
    message.channel.overwritePermissions([{ id: everyone.id, deny: ['SEND_MESSAGES'] } ])
    message.channel.send('Canal bloqueado com sucesso.')
    
  }
  
    if (args[0] === 'on') {
      
    message.channel.overwritePermissions([{ id: everyone.id, allow: ['SEND_MESSAGES']} ])
    message.reply ('Canal desbloqueado com sucesso.')
      
  }
  
} 

exports.help = {
  name: 'chat',
  aliases: []
}
