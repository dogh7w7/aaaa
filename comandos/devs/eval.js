const Discord = require("discord.js")
const firebase = require('firebase');
const db = firebase.database();

exports.run = async (client, message, args) => {
  
    let xxx = await db.ref(`Jina/Dados/Comandos-Usados/Quantia`).once('value')
        xxx = xxx.val()
  
    let yyy = 1
    
    db.ref(`Jina/Dados/Comandos-Usados/Quantia`).set(xxx + yyy)
  
    if (!['417067105897414667', '510120952818958337', '595415089335500800', '622559289369952286'].includes(message.author.id)) {
      
      let embed22 = new Discord.MessageEmbed()
      
      .setTitle(`${client.user.username} - Erro !`)
      .setDescription('Comando disponivel apenas para desenvolvedores !')
      
    return message.channel.send(embed22)
    
    }
  
              const code = args.slice(0).join(" ")

              if (!code) return message.reply(`digite algum code!`)
  
              try {
                
              let ev = require('util').inspect(eval(code));
              if (ev.length > 1950) {
                
              ev = ev.substr(0, 1950);
                
              }
                
                let entrada = new Discord.MessageEmbed()
              
                .setTitle(`Entrada`)
                .setDescription(`\`\`\`${code}\`\`\``)
                
                let saida = new Discord.MessageEmbed()
                
                .setTitle(`Saida`)
                .setDescription(`\`\`\`${ev}\`\`\``)
              
                message.channel.send(entrada)
                message.channel.send(saida)
                
              } catch(err) {
                
                let errorrr = new Discord.MessageEmbed()
              
                .setTitle(`Erro Detectado`)
                .setDescription(`\`\`\`${err}\`\`\``)
              
                message.channel.send(errorrr)
                
      }
  }

exports.help = {
    name: "eval",
    aliases: []
}