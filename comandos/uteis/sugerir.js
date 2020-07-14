const Discord = require("discord.js");
const config = require('../../config.json')
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
  
  let sugestao = args.slice(0).join(" ")
  let servidor = message.guild.name
  let serverif = message.guild.id
  let serverow = message.guild.owner.user.tag
  let author   = message.author.tag
  let authorif = message.author.id
  
  let i = await db.ref(`Configurações/Prefixos/${message.guild.id}/Prefixo`).once('value')
      i = i.val()
  
  if(!i) i = config.prefix
  
  let embed = new Discord.MessageEmbed()
  
  .setTitle(`Olá ${author} Obrigado pela sugestão!`)
  .setDescription(`Sua sugestão foi enviada diretamente para meus desenvolvedores\nPara ver meus desenvovedores use ${i}equipe`)
  
  let embed2 = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Sugestão`)
  .setDescription(`Sugeriram algo inovador para meu sistema !`)
  .addField(`Author :`, `${author} || ${authorif}`)
  .addField(`Servidor :`, `${servidor} || ${serverif}`)
  .addField(`Dono do servidor :`, serverow)
  .addField(`Sugestão`, sugestao)
  
  client.channels.cache.get('731956378490503229').send(embed2).then(msg => {
    
    msg.react('731961729503723571')
    msg.reach('731961826065121321')
    
  })
  
  message.channel.send(embed)
  
}
exports.help = {
  name: 'sugerir',
  aliases: []
}
