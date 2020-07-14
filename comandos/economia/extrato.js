const Discord = require("discord.js"); // Puxando a livraria Discord.js
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
  
   // puxando um usuário para mencionar, no caso, de quem queremos ver o 'money'
  
    let member = message.mentions.users.first() || message.author; // caso não mencione, será o autor
  
  var poppycoin = await db.ref(`Economia/Money/${member.id}/Dinheiro`).once('value')
      poppycoin = poppycoin.val()
  if (!poppycoin) poppycoin = 0;
  
  var jinacoins = await db.ref(`Economia/JinaCoins/${member.id}/Dinheiro`).once('value')
      jinacoins = jinacoins.val()
  if (!jinacoins) jinacoins = 0;
  
    let embed = new Discord.MessageEmbed()
    
    .setTitle(`Jina 진아 - Banco`)
    .setDescription(`Èxibindo extrato do banco de : ${member}`)
    .addField(`Jina Coins`, `${poppycoin}`)
    .addField(`진아 Coins`, `${jinacoins}`)
    .setColor('RANDOM')
    
    message.channel.send(embed) // mensagem mostrando a quantia de 'money'
}

exports.help = {
  name: 'money',
  aliases: ['saldo', 'coin']
}