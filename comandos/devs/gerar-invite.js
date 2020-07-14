const Discord = require('discord.js')
const firebase = require('firebase');
const db = firebase.database();

exports.run = async (client, message, args) => {
  
    let xxx = await db.ref(`Jina/Dados/Comandos-Usados/Quantia`).once('value')
        xxx = xxx.val()
  
    let yyy = 1
    
    db.ref(`Jina/Dados/Comandos-Usados/Quantia`).set(xxx + yyy)
  
    if (!['417067105897414667', '510120952818958337', '595415089335500800'].includes(message.author.id)) {
      
      let embed22 = new Discord.MessageEmbed()
      
      .setTitle(`${client.user.username} - Erro !`)
      .setDescription('Comando disponivel apenas para desenvolvedores !')
      
    return message.channel.send(embed22)
    
    }
  
  
  
  const argsbbb = args.slice(0).join(' ')
  
  const bb = client.channels.cache.get(argsbbb)
    
    bb.createInvite({ temporary: false, reason: `Convite gerado pelo CEO ${message.author.tag}` }).then( invite => message.channel.send(invite.url) )
  
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "gerar",
    aliases: []
}