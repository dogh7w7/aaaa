const Discord = require('discord.js')
const yt = require('ytdl-core')
const api = require('simple-youtube-api')
const { youtubeAPI } = require('../../../config.json');
const API = new api(youtubeAPI);
const queue = new Map();

exports.run = async (client, message, args) => {
  
  if(!message.member.voice.channel) return message.channel.send('Entre Em Um Canal De Voz!')
  if(!message.guild.me.hasPermission("CONNECT")) return message.channel.send('Eu não tenho a permissão: `CONNECT`')
  if(!message.guild.me.hasPermission("SPEAK")) return message.channel.send('Eu não tenho a permissão: `SPEAK`')
  
    let pesquisa = args.slice(0).join(' ')
    
    if(!pesquisa) return message.channel.send('Coloque um Titulo..')
  
    API.searchVideos(pesquisa, 5).then(results => {
      
        let embed = new Discord.MessageEmbed()
        
        .setTitle('🎵 Escolha Uma Música 🎵')
        .addField('1️⃣ | Música 1', results[0].title)
        .addField('2️⃣ | Música 2', results[1].title)
        .addField('3️⃣ | Música 3', results[2].title)
        .addField('4️⃣ | Música 4', results[3].title)
        .addField('5️⃣ | Música 5', results[4].title)
        .setColor('RANDOM')
        .addField('Cancelar', 'Sair')
        
        message.channel.send(embed).then(msg => {
        
          
        msg.react('1️⃣')
        msg.react('2️⃣')
        msg.react('3️⃣')
        msg.react('4️⃣')
        msg.react('5️⃣')
        
        const Music1Filter = (reaction, user) => reaction.emoji.name === "1️⃣" && user.id === message.author.id;
        const Music2Filter = (reaction, user) => reaction.emoji.name === "2️⃣" && user.id === message.author.id;
        const Music3Filter = (reaction, user) => reaction.emoji.name === "3️⃣" && user.id === message.author.id;
        const Music4Filter = (reaction, user) => reaction.emoji.name === "4️⃣" && user.id === message.author.id;
        const Music5Filter = (reaction, user) => reaction.emoji.name === "5️⃣" && user.id === message.author.id;
        
        const Music1 = msg.createReactionCollector(Music1Filter);
        const Music2 = msg.createReactionCollector(Music2Filter);
        const Music3 = msg.createReactionCollector(Music3Filter);
        const Music4 = msg.createReactionCollector(Music4Filter);
        const Music5 = msg.createReactionCollector(Music5Filter);
        
Music1.on("collect", async r2 => {

    let embed = new Discord.MessageEmbed()
    
    .setTitle(`Música adicionada ao queue !`)
    .addField(`Titulo`, results[0].title)
    .addField(`Url do Vídeo`, `[${results[0].title}](${results[0].url})`)
    
    let con = await message.member.voice.channel.join()
        con.play(yt(results[0].url, {filter: 'audioonly'}))
  
  msg.edit(embed)
  
})
          
Music2.on("collect", async r2 => {

    let embed = new Discord.MessageEmbed()
    
    .setTitle(`Música adicionada ao queue !`)
    .addField(`Titulo`, results[1].title)
    .addField(`Url do Vídeo`, `[${results[1].title}](${results[1].url})`)
  
    let con = await message.member.voice.channel.join()
        con.play(yt(results[1].url))
  
  msg.edit(embed)
  
})
          
Music3.on("collect", async r2 => {

    let embed = new Discord.MessageEmbed()
    
    .setTitle(`Música adicionada ao queue !`)
    .addField(`Titulo`, results[2].title)
    .addField(`Url do Vídeo`, `[${results[2].title}](${results[2].url})`)
  
    let con = await message.member.voice.channel.join()
        con.play(yt(results[2].url, {filter: 'audioonly'}))
  
  msg.edit(embed)
  
})
          
Music4.on("collect", async r2 => {

    let embed = new Discord.MessageEmbed()
    
    .setTitle(`Música adicionada ao queue !`)
    .addField(`Titulo`, results[3].title)
    .addField(`Url do Vídeo`, `[${results[3].title}](${results[3].url})`)
  
    let con = await message.member.voice.channel.join()
        con.play(yt(results[3].url, {filter: 'audioonly'}))
  
  msg.edit(embed)
  
})
          
Music5.on("collect", async r2 => {

    let embed = new Discord.MessageEmbed()
    
    .setTitle(`Música adicionada ao queue !`)
    .addField(`Titulo`, results[4].title)
    .addField(`Url do Vídeo`, `[${results[4].title}](${results[4].url})`)
  
    let con = await message.member.voice.channel.join()
        con.play(yt(results[4].url, {filter: 'audioonly'}))
  
  msg.edit(embed)
  
})
})
}).catch(console.log)
}
exports.help = {
  name: 'play',
  aliases: ['tocar']
}