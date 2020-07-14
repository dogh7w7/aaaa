const Discord = require("discord.js")
const firebase = require('firebase');
const db = firebase.database();

exports.run = async (client, message, args) => {
  
    let xxx = await db.ref(`Jina/Dados/Comandos-Usados/Quantia`).once('value')
        xxx = xxx.val()
  
    let yyy = 1
    
    db.ref(`Jina/Dados/Comandos-Usados/Quantia`).set(Number(xxx) + Number(yyy)) // nnn isso ai ja funfa ja kk
  
        if (!['417067105897414667', '510120952818958337', '595415089335500800'].includes(message.author.id)) { 
          
        let puta = new Discord.MessageEmbed()
        
        .setTitle('Puta que Pariu -  Como Assim?')
        .setDescription('Caraio como tu soube desse comando?')
          
        return message.channel.send(puta)
          
      }
  
  let member = message.mentions.users.first() || message.author
  
  var quantia = args[0]
  
  if (isNaN(quantia)) return message.channel.send(`Isso não é um número!`)
  if (!quantia) return message.channel.send(`Escreva o quanto quer adicionar!`)
  
  if (quantia <= 0) return message.reply(`A quantia deve ser maior que zero!`)
  
  

  message.channel.send(`:thumbsup: ${message.author.username} adicionou **R$ ${quantia}** na conta do usuário ${member.username}!`);
  
    let atual = await db.ref(`Economia/Money/${member.id}/Dinheiro`).once('value')
        atual = atual.val()
  
    if(!atual) atual = 0
  
    db.ref(`Economia/Money/${member.id}/Dinheiro`).set(Number(atual) + Number(quantia))

};

exports.help = {
  name: "addmoney",
  aliases: ["addcoin", "adddinheiro"]
}