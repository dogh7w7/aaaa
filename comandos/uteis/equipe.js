const Discord = require("discord.js");
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
  
  let embed = new Discord.MessageEmbed()
  
  .setTitle(`<a:cristal:714275787712233502> ${client.user.username} - Equipe <a:cristal:714275787712233502>`)
  .addField(`<a:circulum:727285332378255381> **|** Criador e Desenvolvedor`, `<a:circulum:727285332378255381> **|** 莉 ・ Dogh Developer's#0001`, true)
  .addField(`<a:circulum:727285332378255381> **|** Desenvolvedor`, `<a:circulum:727285332378255381> **|** ! iMeatzxᶤ ᶫᵒᵛᵉᵧₒᵤ#0049`, true)
  .addField(`⠀⠀⠀⠀⠀⠀⠀⠀⠀`, `⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
  .addField(`<a:circulum:727285332378255381> **|** Desenvolvedor`, `<a:circulum:727285332378255381> **|** Éld3rr_#2583 `, true)
  .addField(`<a:circulum:727285332378255381> **|** Desenvolvedor`, `<a:circulum:727285332378255381> **|** Pedr1n ♪#4537 `, true)
  .addField(`⠀⠀⠀⠀⠀⠀⠀⠀⠀`, `⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
  .addField(`<a:circulum:727285332378255381> **|** Desenvolvedor`, `<a:circulum:727285332378255381> **|** BlackHostingBR#6423 `, true)
  .addField(`<a:circulum:727285332378255381> **|** Desenvolvedor`, `<a:circulum:727285332378255381> **|** Lightzz#0001 `, true)
  
  message.channel.send(embed)
  
}
exports.help = {
  name: 'equipe',
  aliases: []
}
