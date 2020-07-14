const Discord = require('discord.js') // puxando a livraria Discord.js
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
  
        let user = message.mentions.users.first() || client.users.cache.get(args[0])

        let nome = await db.ref(`Economia/Empresa/${message.author.id}/Nome-da-Empresa`).once('value')
            nome = nome.val()
  
      
        let embed1 = new Discord.MessageEmbed()

        .setTitle(`${client.user.username} - Vaga de Emprego`)
        .setDescription(`Olá ${user.username}, Vocẽ foi convocado para trabalar na empresa ***${nome}*** \nVocê possui 2 minutos para aceitar ou negar a vaga de emprego\n\nReaja com <a:sim:731961729503723571> Para Aceitar\nReaja com <a:nao:731961826065121321> Para Negar`)
        
        
        user.send(embed1).then(msg => {
          
          msg.react('731961729503723571')
          msg.react('731961826065121321')
          
        })
        
}

exports.help = {
  name: "contratar",
  aliases: [""]
}