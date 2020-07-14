const Discord = require('discord.js')
const firebase = require('firebase');
const db = firebase.database();

exports.run = async (bot, message, args) => {
      
  
    let xxx = await db.ref(`Jina/Dados/Comandos-Usados/Quantia`).once('value')
        xxx = xxx.val()
  
    let yyy = 1
    
    db.ref(`Jina/Dados/Comandos-Usados/Quantia`).set(xxx + yyy)
  
  
  
    if (!['417067105897414667', '510120952818958337', '595415089335500800'].includes(message.author.id)) {
      
      let embed22 = new Discord.MessageEmbed()
      
      .setTitle(`${bot.user.username} - Erro !`)
      .setDescription('Comando disponivel apenas para desenvolvedores !')
      
    return message.channel.send(embed22)
    
    }
  
  
  
    if(!args.length) {
      
      let embed = new Discord.MessageEmbed()
      
      .setTitle(`Jina 진아 - Erro`)
      .setDescription(`Modo de Usar \n\nUse : r.manu on/off \n\nExemplo : r.manu on Manutenção online para correção de bugs!`)
      
      return message.channel.send(embed)
    
    }
  
      
        if(args[0] === 'off') {
          
            let embedon = new Discord.MessageEmbed()
            
            .setAuthor('Manutenção Offline', bot.user.displayAvatarURL())
            .setColor('GREEN')
            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription('A manutenção foi desligada,  todos os comandos estáo ativados!')

            db.ref(`Jina/Dados/Manutenção/Manu`).set('Offline')
            db.ref(`Jina/Dados/Manutenção/ManuMsg`).set('Sem Mensagem !')
            
            message.channel.send(embedon)

        } else if(args[0] === 'on') {
          
            let embedoff = new Discord.MessageEmbed()
            
            .setAuthor('Manutenção Online', bot.user.displayAvatarURL())
            .setColor('GREEN')
            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription('A manutenção foi ligada, todos os comandos estão desativados!')
          
            db.ref(`Jina/Dados/Manutenção/Manu`).set('Online')
            db.ref(`Jina/Dados/Manutenção/ManuMsg`).set(args.slice(1).join(" "))

            message.channel.send(embedoff)
        }
}
exports.help = { 
  name: 'manu',
  aliases: []
}