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
  
  let embed1 = new Discord.MessageEmbed()
  
  .setTitle('Jina 진아 - Bem Vindo')
  .setDescription(`Use os valores abaixo para personalizar a mensagem de bem vindo ! \n\n {membro} Menciona o usuário;\n{server} Mostra o nome do servidor;\n{users} Mostra o total de usuários no servidor!`)
  
  let embed2 = new Discord.MessageEmbed()
  
  .setTitle('Mencione um canal !')
  
  message.channel.send(embed1)
  message.channel.send(embed2)
  
  let canal = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 }).on("collect", c => { canal = c.mentions.channels.first();

  let embed3 = new Discord.MessageEmbed()
  
  .setTitle('Okay, agora envie a mensagem !')

  message.channel.send(embed3)
  
  let msgwell = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 }).on("collect", c => { msgwell = c.content;

  let embed4 = new Discord.MessageEmbed()
  
  .setTitle("**Jina 진아 - Definido!**")
  .setDescription(`Okay, acabei de configurar !`)
  .addField(`Novo canal de bem vindo!`, `${canal}`)
  .addField(`Nova Mensagem de bem vindo!`, `${msgwell}`)
  
  message.channel.send(embed4)
    
  db.ref(`Configurações/Entrada/${message.guild.id}/Canal`).set(canal)
  db.ref(`Configurações/Entrada/${message.guild.id}/Mensagem`).set(msgwell)

    })
  })
}

exports.help = {
  name: 'config-welcome',
  aliases: ['setbemvindo']
}