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
  
      let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
  
      let nome = await db.ref(`Economia/Empresa/${user.id}/Nome-da-Empresa`).once('value')
          nome = nome.val()
      
      let desc = await db.ref(`Economia/Empresa/${user.id}/Desc-da-Empresa`).once('value')
          desc = desc.val()
      
      let funcionarios_total = await db.ref(`Economia/Empresa/${user.id}/Funcionarios-Totais-da-Empresa`).once('value')
          funcionarios_total = funcionarios_total.val()
      
      let funcionarios_atuais = await db.ref(`Economia/Empresa/${user.id}/Funcionarios-Atuais-da-Empresa`).once('value')
          funcionarios_atuais = funcionarios_atuais.val()
      if(!funcionarios_atuais) funcionarios_atuais = 0
      
      let CNPJ = await db.ref(`Economia/Empresa/${user.id}/Cnpj-da-Empresa`).once('value')
          CNPJ = CNPJ.val()
      
      let embed11 = new Discord.MessageEmbed()
      
      .setTitle(`Esse usuário não possui uma empresa !`)
      
      if(!nome) {
        
        return message.channel.send(embed11)
        
      }
  
      let embedError = new Discord.MessageEmbed()
      
      .setTitle(`${client.user.username} - Informações`)
      .setDescription(`Aqui estão algumas informações da empresa do usuário ${user}`)
      .addField(`Nome da Empresa`, `${nome}`)
      .addField(`Sobre a Empresa`, `${desc}`)
      .addField(`CNPJ a Empresa`, `${CNPJ}`)
      .addField(`Quantidade de Funcionarios na Empresa`, `${funcionarios_atuais} / ${funcionarios_total}`)
      
      message.channel.send(embedError)

}

exports.help = {
  name: "empresa",
  aliases: ["empresa"]
}