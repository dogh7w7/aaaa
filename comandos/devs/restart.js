const Discord = require("discord.js"); // Puxando a livraria Discord.js
const config = require("../../config.json")
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
  
    let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando em 10 segundos`)

    message.channel.send(restart).then( msg => {
      
      setTimeout(() => { 
      
            let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando em 9 segundos`)
      
            msg.edit(restart)
            
      }, 1000)
      
      
      setTimeout(() => { 
      
            let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando em 8 segundos`)
      
            msg.edit(restart)
            
      }, 2000)
      
      
      setTimeout(() => { 
      
            let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando em 6 segundos`)
      
            msg.edit(restart)
            
      }, 3000)
      
      
      setTimeout(() => { 
      
            let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando em 5 segundos`)
      
            msg.edit(restart)
            
      }, 4000)
      
      
      setTimeout(() => { 
      
            let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando em 4 segundos`)
      
            msg.edit(restart)
            
      }, 5000)
      
      
      setTimeout(() => { 
      
            let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando em 3 segundos`)
      
            msg.edit(restart)
            
      }, 6000)
      
      
      setTimeout(() => { 
      
            let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando em 2 segundos`)
      
            msg.edit(restart)
            
      }, 7000)
      
      setTimeout(() => { 
      
            let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando em 1 segundos`)
      
            msg.edit(restart)
            
      }, 8000)
      
      setTimeout(() => { 
      
            let restart = new Discord.MessageEmbed()
    
    .setTitle(`Ruby - Reinicialização`)
    .setDescription(`<a:netload:729445133820362793> Reiniciando com a latencia de **${client.ws.ping} ms**`)
      
            msg.edit(restart).then(() => {
              
              process.exit(1);
              
            })
            
      }, 9000)
      
        })
  
}

exports.help = {
    name: 'restart',
  aliases: []
}