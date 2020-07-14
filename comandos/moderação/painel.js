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

  
  
    let canal = await db.ref(`Configurações/Entrada/${message.guild.id}/Canal`).once('value')
        canal = canal.val()
    if(!canal) canal = 'Canal não definido ! Use r.config-welcome'
  
    let  msg  = await db.ref(`Configurações/Entrada/${message.guild.id}/Mensagem`).once('value')
         msg  = msg.val()
    if (!msg) msg = 'Mensagem não definida ! Use r.config-welcome'
  
    let embed = new Discord.MessageEmbed()
    
    .setTitle(`${client.user.username} - Painel`)
    .addField(`Canal Welcome`, canal)
    .addField(`Mensagem Welcome`, msg)
    .setColor('RANDOM')
    
    message.channel.send(embed)
}

exports.help = {
  name: 'painel',
  aliases: []
}