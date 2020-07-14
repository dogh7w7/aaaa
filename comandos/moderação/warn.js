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
  
  let prefix = await db.ref(`Configurações/Prefixos/${message.guild.id}/Prefixo`).once('value')
      prefix = prefix.val()
  if(!prefix) prefix = config.prefix
  
  let canal = await db.ref(`Configurações/Punições/${message.guild.id}/Canal`).once('value')
      canal = canal.val()
  if(!canal) return message.channel.send(`Nenhum canal de warn definido! Para definir use ${prefix}setpunishl`)

  let user = message.mentions.users.first()
  if(!user) return message.channel.send("Insira um usuário")
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) return message.channel.send("Insira um motivo")  
  
  let embed = new Discord.MessageEmbed()
  
  .setTitle('**Jina 진아 | Warn**')
  .addField('🙇 | Usuário Avisado:', `${user}`)
  .addField('👨 | Avisado Pelo Staff:', `<@${message.author.id}>`) //
  .addField('📜 | Motivo:', `${motivo}`) 
  .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
  .setTimestamp()
  
  message.guild.channels.cache.get(canal).send(embed)
  user.send(embed)
  message.channel.send("Warn enviado com sucesso")
  
} 

exports.help = {
  name: 'warn',
  aliases: []
}
