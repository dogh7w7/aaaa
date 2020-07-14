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

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para usar esse comando!")
  
  
  
  let embedErro = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Erro`)
  .setDescription(`Não encontrei esse cargo !`)
  
  let embed1 = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Leia !`)
  .setDescription(`Olá ${message.author.username}, mencione o cargo que o level 5 irá ganhar !`)
  
  message.channel.send(embed1)
  
      let cargo1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 }).on("collect", c => { cargo1 = c.mentions.roles.first();
  
                                                                                                                                
      if(!cargo1) {
        
        return message.channel.send(embedErro)
        
      }
                                                                                                                               
  let embed5 = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Leia !`)
  .setDescription(`Olá ${message.author.username}, mencione o cargo que o level 10 irá ganhar !`)

          let embed10 = new Discord.MessageEmbed()
  
          .setTitle(`${client.user.username} - Sucesso !`)
          .setDescription(`Level 5, Ganhará o cargo ${cargo1}`)
          
          
      message.channel.send(embed10)
      message.channel.send(embed5)
          
      let cargo2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 }).on("collect", c => { cargo2 = c.mentions.roles.first();
  
      if(!cargo2) {
        
        return message.channel.send(embedErro)
        
      }
                                                                                                                                 
  let embed2 = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Sucesso !`)
  .setDescription(`Level 10, Ganhará o cargo ${cargo2}`)
  
  let embed8 = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Leia !`)
  .setDescription(`Olá ${message.author.username}, mencione o cargo que o level 15 irá ganhar !`)
  
      message.channel.send(embed2)
      message.channel.send(embed8)
  
      let cargo3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 }).on("collect", c => { cargo3 = c.mentions.roles.first();
      
      if(!cargo3) {
        
        return message.channel.send(embedErro)
        
      }
  
          let embed3 = new Discord.MessageEmbed()
  
          .setTitle(`${client.user.username} - Sucesso !`)
          .setDescription(`Level 15, Ganhará o cargo ${cargo3}`)
          
  let embed9 = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Leia !`)
  .setDescription(`Olá ${message.author.username}, mencione o cargo que o level 20 irá ganhar !`)
  
      message.channel.send(embed3)
      message.channel.send(embed9)
  
      let cargo4 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 }).on("collect", c => { cargo4 = c.mentions.roles.first();

      if(!cargo4) {
        
        return message.channel.send(embedErro)
        
      }
                                                                                                                                 
        db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-5`).set(cargo1.id)
        db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-10`).set(cargo2.id)
        db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-15`).set(cargo3.id)
        db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-20`).set(cargo4.id)
                                                                                                                                 
  let embed4 = new Discord.MessageEmbed()
  
  .setTitle(`${client.user.username} - Sucesso !`)
  .setDescription(`Level 20, Ganhará o cargo ${cargo4}`)
  
      message.channel.send(embed4)
        
                                     
        })
      })
    })
  })
}

exports.help = {
  name: 'config-levels',
  aliases: []
}