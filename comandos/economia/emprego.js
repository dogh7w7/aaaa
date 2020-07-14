const Discord = require('discord.js')
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
  
 let emprego = await db.ref(`Economia/Trabalho/${message.author.id}/Emprego`).once('value')
     emprego = emprego.val()
 
     if (emprego == 1) {
   
         return message.channel.send('Você Já Tem Um Emprego Que É Eletricista')
   
     }
  
     if (emprego == 2) {
   
         return message.channel.send('Você Já Tem Um Emprego Que É Designer')
   
     }
  
  let embed = new Discord.MessageEmbed()
  
  .setAuthor('Escolha Um Emprego')
  .setDescription(`:zap: = Eletricista \n :floppy_disk: = Designer`)
  
  message.channel.send(embed).then(msg => {
    
    let emoji = ['⚡', '💾']
    
    msg.react('⚡')
    msg.react('💾')
    
    const filter = (reaction, user) => emoji.includes(reaction.emoji.name) && user.id != client.user.id && user.id == message.author.id
    const coletor = msg.createReactionCollector(filter, {max: 1})
    
    coletor.on('collect', (c) => {
      
      let emojii = c.emoji.name || c.emoji.id
      
      if(emojii == emoji[0]) {
        
        db.ref(`Economia/Trabalho/${message.author.id}/Emprego`).set(1)
        message.channel.send('Você se tornou um Eletricista')
        
      }
      
      if(emojii == emoji[1]) {
        
        db.ref(`Economia/Trabalho/${message.author.id}/Emprego`).set(2)
        message.channel.send('Você se tornou um Designer')
        
      }
      
    })
    
  })
}

exports.help = {
  name: 'emprego',
  aliases: [ 'trabalho']
}