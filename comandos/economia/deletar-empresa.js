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

      let dados = await db.ref(`Economia/Empresa/${message.author.id}`).once("value")
          dados = dados.val()
  
      let nome = await db.ref(`Economia/Empresa/${message.author.id}/Nome-da-Empresa`).once('value')
          nome = nome.val()
      
      let desc = await db.ref(`Economia/Empresa/${message.author.id}/Desc-da-Empresa`).once('value')
          desc = desc.val()
      
      let funcionarios_total = await db.ref(`Economia/Empresa/${message.author.id}/Funcionarios-Totais-da-Empresa`).once('value')
          funcionarios_total = funcionarios_total.val()
      
      let funcionarios_atuais = await db.ref(`Economia/Empresa/${message.author.id}/Funcionarios-Atuais-da-Empresa`).once('value')
          funcionarios_atuais = funcionarios_atuais.val()
      if(!funcionarios_atuais) funcionarios_atuais = 0
      
      let CNPJ = await db.ref(`Economia/Empresa/${message.author.id}/Cnpj-da-Empresa`).once('value')
          CNPJ = CNPJ.val()
  
      let emebd111 = new Discord.MessageEmbed()
  
          .setTitle(`${client.user.username} - Sucesso !`)
          .setDescription(`Okay, empresa ***${nome}*** Deletada, confira alguns dados !`)
          .addField(`Nome da Empresa`, `${nome}`)
          .addField(`Sobre a Empresa`, `${desc}`)
          .addField(`CNPJ a Empresa`, `${CNPJ}`)
          .addField(`Quantidade de Funcionarios na Empresa`, `${funcionarios_atuais} / ${funcionarios_total}`)
      
      message.channel.send(emebd111).then(() => {
        
            db.ref(`Economia/Empresa/${message.author.id}/Nome-da-Empresa`).remove()
            db.ref(`Economia/Empresa/${message.author.id}/Desc-da-Empresa`).remove()
            db.ref(`Economia/Empresa/${message.author.id}/Funcionarios-Totais-da-Empresa`).remove()
            db.ref(`Economia/Empresa/${message.author.id}/Funcionarios-Atuais-da-Empresa`).remove()
            db.ref(`Economia/Empresa/${message.author.id}/Cnpj-da-Empresa`).remove()
        
      })
  
}

exports.help = {
  name: 'deletar-empresa',
  aliases: ['deletarempresa']
}