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

        const sugestao = args.join(" ")
  
        let premium = await db.ref(`Premium/Servidores/${sugestao}/Premium`).once('value')
            premium = premium.val()

  
        if(isNaN(sugestao)) return message.reply(`Isto não é um número!`);
        if(!sugestao) return message.reply(`Insira um id valido!`);
  
        let server = client.guilds.cache.get(sugestao)        
        
    if (!server) {
      
      let bb = new Discord.MessageEmbed()
      
      .setTitle('Jina 진아 - Erro')
      .setDescription(`Buscando...`)
      
      let ab = new Discord.MessageEmbed()
      
      .setTitle(`${client.user.username} - Erro`)
      .setDescription(`Servidor não foi encontrado em meu sistema !`)
      
      return message.channel.send(bb).then(b => {
        
        setTimeout(() => { b.edit(ab) }, 2000)
        
      })
      
    }
  
    if (premium === 'premium-online') {
      
      let bba = new Discord.MessageEmbed()
      
      .setTitle(`${client.user.username} - Erro`)
      .setDescription(`Desculpe o servidor já possui premium ! \nConfira abaixo algumas informações do servidor !`)
      .addField(`<a:circulum:727285332378255381> **|** Nome do servidor :`, `<a:circulum:727285332378255381> **|** ${server.name}`, true)
      .addField(`<a:circulum:727285332378255381> **|** ID do servidor :`, `<a:circulum:727285332378255381> **|** ${server.id}`, true)
      .addField(`⠀⠀⠀⠀⠀⠀⠀⠀⠀`, `⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
      .addField(`<a:circulum:727285332378255381> **|** Membros no servidor :`, `<a:circulum:727285332378255381> **|** ${server.memberCount}`, true)
      .addField(`<a:circulum:727285332378255381> **|** Dono do servidor :`, `<a:circulum:727285332378255381> **|** ${server.owner.user.tag}`,true)
      
      return message.channel.send(bba)
      
    }

  
    let sucess = new Discord.MessageEmbed()
    
      .setTitle(`${client.user.username} - Sucesso !`)
      .addField(`<a:circulum:727285332378255381> **|** Nome do servidor :`, `<a:circulum:727285332378255381> **|** ${server.name}`, true)
      .addField(`<a:circulum:727285332378255381> **|** ID do servidor :`, `<a:circulum:727285332378255381> **|** ${server.id}`, true)
      .addField(`⠀⠀⠀⠀⠀⠀⠀⠀⠀`, `⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
      .addField(`<a:circulum:727285332378255381> **|** Membros no servidor :`, `<a:circulum:727285332378255381> **|** ${server.memberCount}`, true)
      .addField(`<a:circulum:727285332378255381> **|** Dono do servidor :`, `<a:circulum:727285332378255381> **|** ${server.owner.user.tag}`,true)  
    
    let sender = client.users.cache.get(server.ownerID)
    
    let sender2 = new Discord.MessageEmbed()
    
      .setTitle(`${client.user.username} - Parábens !`)
      .setDescription(`Olá, obrigado por aderir ao sistema premium da ${client.user.username} ! \nAbaixo vou listar algumas informações de seu servidor !`)
      .addField(`<a:circulum:727285332378255381> **|** Nome do servidor :`, `<a:circulum:727285332378255381> **|** ${server.name}`, true)
      .addField(`<a:circulum:727285332378255381> **|** ID do servidor :`, `<a:circulum:727285332378255381> **|** ${server.id}`, true)
      .addField(`⠀⠀⠀⠀⠀⠀⠀⠀⠀`, `⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
      .addField(`<a:circulum:727285332378255381> **|** Membros no servidor :`, `<a:circulum:727285332378255381> **|** ${server.memberCount}`, true)
      .addField(`<a:circulum:727285332378255381> **|** Dono do servidor :`, `<a:circulum:727285332378255381> **|** ${server.owner.user.tag}`, true)
    
    message.channel.send(sucess)
    sender.send(sender2)
  
    db.ref(`Premium/Servidores/${sugestao}/Premium`).set('premium-online')

}

exports.help = {
    name: 'addpremium',
  aliases: []
}