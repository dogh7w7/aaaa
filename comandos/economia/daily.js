const ms = require('parse-ms') // Uma npm para definir o tempo (Para instalar: npm i parse-ms)
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
  
        let money = await db.ref(`Economia/Money/${message.author.id}/Dinheiro`).once('value')
            money = money.val()
  
        const timeout = 86400000
        
        const quantia = Math.floor(Math.random() * 10000) + 1000

        let daily = await db.ref(`Cowndown/Daily/${message.author.id}`).once('value')
            daily = daily.val()
  
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
          
            let time = ms(timeout - (Date.now() - daily));
          
            message.channel.send(`:stopwatch: **|** Espera ai ${message.author}, você já pegou seu **daily**! Tente novamente em: \`${time.hours}h ${time.minutes}m ${time.seconds}s\``);
        
        } else {
          
            message.channel.send(`:money_with_wings: **|** ${message.author}, hoje você recebeu: **${quantia}** $\n\n:moneybag: **|** Saldo total: **${money + quantia}** $`);
            
            db.ref(`Economia/Money/${message.author.id}/Dinheiro`).set(Number(money) + Number(quantia))
            db.ref(`Cowndown/Daily/${message.author.id}`).set(Date.now());
        }
    }

exports.help = {
  name: 'daily',
  aliases: ['diario']
}