const Discord = require("discord.js"); // Puxando a livraria Discord.js
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

    const sugestao = args.join(" ");
  
    if(isNaN(sugestao)) return message.reply(`Isto não é um número!`);
    if(!sugestao) return message.reply(`Insira um id valido!`);
  
    let server = client.guilds.cache.get(sugestao)
    
    if (!server) {
      
      let bb = new Discord.MessageEmbed()
      
      .setTitle(`${client.user.username} - Erro`)
      .setDescription(`Desculpe não encontrei servidor com o ID [ \`${sugestao}\` ] em meu sistema !`)
      
      return message.channel.send(bb)
      
    }

    message.channel.send(`Servidor Removido Como Premium`) 
  
    db.ref(`Premium/Servidores/${sugestao}/Premium`).remove()
  
}

exports.help = {
    name: 'rempremium',
  aliases: [] // nao mexe ainda 
}