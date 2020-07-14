const Discord = require("discord.js");
const os = require('os')
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
    
    let dias = 0;
    let semanas = 0;
 
     let uptime = ``
     let totalSegundos = (client.uptime / 1000);
     let horas = Math.floor(totalSegundos / 3600);
     totalSegundos %= 3600;
     let minutos = Math.floor(totalSegundos / 60);
     let segundos = Math.floor(totalSegundos % 60);
 
     if (horas > 23) {
         dias = dias + 1;
         horas = 0;
     }
 
     if (dias == 7) {
     dias = 0;
     semanas = semanas + 1;
     }
 
     if (semanas > 0){
         uptime += `${semanas} semanas, `;
     }
 
     if (minutos > 60){
         minutos = 0;
     }
 
     uptime += `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  
  let version = await db.ref(`Jina/Dados/Versão/Versão`).once('value')
      version = version.val()
  
 let embed = new Discord.MessageEmbed()
 
    .setTitle('Informações Sobre Mim')
 
    .addField('Membros :', client.users.cache.size, true)
    .addField('Servidores :', client.guilds.cache.size, true)
    .addField('Canais :', client.channels.cache.size, true)
 
    .addField(`⠀⠀⠀⠀⠀⠀⠀⠀⠀`, `⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
 
    .addField('> Informações', `Linguagem: [JavaScript](https://javascript.org) Juntamente Com [Node.js](https://nodejs.com)
Livraria: [Discord.js](https://discord.js.org)
DataBase: [Quick.db](https://www.npmjs.com/package/quick.db)
Host: [Glitch](https://glitch.com/)
Ping: \`${client.ws.ping}ms.\`
Ligado À: \`${uptime}\`
Versão: \`${version}\`
Suporte : [Clique Aqui](https://discord.gg/xPBnUpK)
`)
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL())
 
 message.channel.send(embed)
  
}

exports.help = {
  name: 'botinfo',
  aliases: ['infobot']
}