const Discord = require('discord.js')
const firebase = require('firebase');
const db = firebase.database();
const ms = require('parse-ms') 
const config = require('../../config.json')

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
  
const programmer = ['Cabo Eletrico', 'Poste', 'Semáforo']

const designer = ['Desenho', 'Logo De Uma Marca', 'Desenho Realista']

    let timeout = 1.8e+7 
    let quantia = Math.floor(Math.random() * 10000) + 4000;
    let trabalho = await db.ref(`Cowndown/Work/${message.author.id}`).once('value')
        trabalho = trabalho.val()
  
    if (trabalho !== null && timeout - (Date.now() - trabalho) > 0) { 
     let time = ms(timeout - (Date.now() - trabalho));
      
            let erro1 = new Discord.MessageEmbed()
            
            .setTitle('Jina 진아 - Erro')
            .setDescription(`:x: Ainda Faltam **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
      
      message.channel.send(erro1)
   
     } else {
       
        var emprego = await db.ref(`Economia/Trabalho/${message.author.id}/Emprego`).once('value')
            emprego = emprego.val()
       
        if (emprego === null) { 
          
            let erro2 = new Discord.MessageEmbed()
            
            .setTitle('Jina 진아 - Erro')
            .setDescription(`Para trabalhar, você precisa de um emprego!`)
          
          return message.channel.send(erro2)
          
        }
       
          let atual = await db.ref(`Economia/Money/${message.author.id}/Dinheiro`).once('value')
              atual = atual.val()
  
          if(!atual) atual = 0
         
        if (emprego === 1) {        
          
          let emprego1 = new Discord.MessageEmbed()
          
          .setTitle('Jina 진아 - Trabalho')
          .setDescription(`:zap:  Hoje, Você Concertou Um **${programmer[Math.floor(Math.random() * programmer.length)]}** e por isso, recebeu: **R$ ${quantia}**`)
           
          message.channel.send(emprego1)
          
          db.ref(`Economia/Money/${message.author.id}/Dinheiro`).set(Number(atual) + Number(quantia))
          db.ref(`Cowndown/Work/${message.author.id}`).set(Date.now()) 
          
       }
       
        if (emprego === 2) {       
          
          let emprego2 = new Discord.MessageEmbed()
          
          .setTitle('Jina 진아 - Trabalho')
          .setDescription(`:floppy_disk: Você Fez Um **${designer[Math.floor(Math.random() * designer.length)]}** e por isso, recebeu: **R$ ${quantia}**`)
          
          message.channel.send(emprego2)
  
          db.ref(`Economia/Money/${message.author.id}/Dinheiro`).set(Number(atual) + Number(quantia))
          db.ref(`Cowndown/Work/${message.author.id}`).set(Date.now()) 
    }
  }
}

exports.help = {
  name: 'trabalhar',
  aliases: ['trabalha']
}