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
  
  let user = message.mentions.users.first()
  let motivo = args.slice(1).join(" ")

  let embedmencione = new Discord.MessageEmbed()
  .setTitle(`${client.user.username} - Erro`)
  .setDescription(`${message.author} Mencione um usuário para punir!`)
  
   if(!user) return message.channel.send(embedmencione)
  
  let embedvcmesmo = new Discord.MessageEmbed()
  .setTitle(`${client.user.username} - Erro`)
  .setDescription(`${message.author} Você não pode punir você mesmo!`)
  
  if (user== message.member) return message.channel.send(embedvcmesmo)
  
  let embedsemperm = new Discord.MessageEmbed()
  .setTitle(`${client.user.username} - Erro`)
  .setDescription(`${message.author} Não posso punir esse usuário!`)
  
  if(!user.bannable) return message.channel.send(embedsemperm)

  let embedmotivo = new Discord.MessageEmbed()
  .setTitle(`${client.user.username} - Erro`)
  .setDescription(`${message.author} Você não especificou um motivo !`)

  if(!args[1]) return message.channel.send(embedmotivo)
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para usar esse comando!")
  let embed_options = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Menu de Opções`)
  .addField(`<:dnd:731327054963802262> **|** Banir membro`, `Ao reagir a esse emoji o membro será \`banido\`!`)
  .addField(`<:ausente:731327155203473419>  **|** Expulsar membro`, `Ao reagir a esse emoji o membro será \`expulso\`!`)
  .addField(`🔇 **|** Mutar Membro`, `Ao reagir a esse emoji o membro será \`mutado\`!`)
  .addField(`❌ **|** Cancelar`, `Ao reagir a esse emoji o comando sera \`cancelado\`!`)
  
  
  
  
  message.channel.send(embed_options).then(msg => {
    
      msg.react('731327054963802262');
      msg.react('731327155203473419')
      msg.react('🔇')
      msg.react('❌')
    
  
        const BanFilter = (reaction, user, ) => reaction.emoji.id === '731327054963802262' && user.id === message.author.id;
        const KickFilter = (reaction, user, ) => reaction.emoji.id === '731327155203473419' && user.id === message.author.id;
        const MuteFilter = (reaction, user, ) => reaction.emoji.name === '🔇' && user.id === message.author.id;
        const CancelarFilter = (reaction, user, ) => reaction.emoji.name === '❌' && user.id === message.author.id;

        const Ban = msg.createReactionCollector(BanFilter, {max: 1})
        const Kick = msg.createReactionCollector(KickFilter, {max: 1})
        const Mute = msg.createReactionCollector(MuteFilter, {max: 1})
        const Cancelar = msg.createReactionCollector(CancelarFilter, {max: 1})

Ban.on("collect", cp => {
  
  let embed_ban = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Sucesso !`)
  .setDescription(`Você selecionou <:dnd:731327054963802262> **|** Banir membro!`)
  .addField(`Usuário banido !`, `Usuário ${user} Banido com Sucesso !`)
  
  return msg.edit(embed_ban), msg.reactions.removeAll(), user.ban({ reason: motivo })
  
})
    
    
    
Kick.on("collect", cp => {
  
    let embed_kick = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Sucesso !`)
  .setDescription(`Você selecionou <:ausente:731327155203473419>  **|** Expulsar membro!`)
  .addField(`Usuário expulso !`, `Usuário ${user} Expulso com Sucesso !`)
  
  return msg.edit(embed_kick), msg.reactions.removeAll(), user.kick({ reason: motivo })
  
})
    
    
    
Mute.on("collect", cp => {
  
  let embed_mute = new Discord.MessageEmbed()
  
  .setTitle('MAnutenção')
  
  return msg.edit(embed_mute), msg.reactions.removeAll()
  
})
    
    
    
Cancelar.on("collect", cp => {
  
    let embed_cancelar = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Sucesso !`)
  .setDescription(`Você selecionou ❌ **|** Cancelar!`)
  .addField(`Comando cancelado com sucesso !`, `ㅤ`)
    
    return msg.edit(embed_cancelar), msg.reactions.removeAll()

})    
    
    
  })
}

exports.help = {
  name: 'punir',
  aliases: []
}