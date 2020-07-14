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
  
    if(dados == null) {

      message.channel.send("Qual será o nome da sua empresa?")
      
      
          let nome = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 } ).on("collect", c => { nome = c.content;

      message.channel.send("Qual será a descrição da sua empresa?")
                                                                                                                                
                                                                                                                                
          let desc = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 } ).on("collect", c => { desc = c.content;
                                                                                                                                
      message.channel.send("Qual será a quantidade de funcionarios da sua empresa?")
                                                                                                      
                                                                                                                                    
          let funcionarios = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 } ).on("collect", c => { funcionarios = c.content;

      if(isNaN(funcionarios)) return message.channel.send('Isso não é um número ! \nuse r.criar-empresa novamente.')
                                                                                                                                            
      if(funcionarios > 100) {
        
        return message.channel.send('Valor maximo de funcionarios é de 100 pessoas ! \nuse r.criar-empresa novamente.')
        
      }
                                                                                                                                            
      message.channel.send(`Sua empresa **${nome}** está sendo criada!`).then(async msg => {
        
          let number1 = Math.floor(Math.random() * 9)
          let number2 = Math.floor(Math.random() * 9)
          let number3 = Math.floor(Math.random() * 9)
          let number4 = Math.floor(Math.random() * 9)
          let number5 = Math.floor(Math.random() * 9)
          let number6 = Math.floor(Math.random() * 9)
          let number7 = Math.floor(Math.random() * 9)
          let number8 = Math.floor(Math.random() * 9)
          let number9 = Math.floor(Math.random() * 9)
          let number10 = Math.floor(Math.random() * 9)
          let number11 = Math.floor(Math.random() * 9)
          let number12 = Math.floor(Math.random() * 9)
          let number13 = Math.floor(Math.random() * 9)
          let number14 = Math.floor(Math.random() * 9)
          
        let aaa = new Discord.MessageEmbed()
        
        .setTitle(`${message.author.username} - Empresa Criada !`)
        
        .addField(`Nome da Empresa`, `${nome}`)
        .addField(`Sobre a Empresa`, `${desc}`)
        .addField(`CNPJ da Empresa`, `${number1}${number2}. ${number3}${number4}${number5}. ${number6}${number7}${number8}/${number9}${number10}${number11}${number12}-${number13}${number14}`)
        
      setTimeout(() => { msg.edit(aaa) }, 2500)
                                                                                                                                            
          db.ref(`Economia/Empresa/${message.author.id}/Nome-da-Empresa`).set(nome)
          db.ref(`Economia/Empresa/${message.author.id}/Desc-da-Empresa`).set(desc)
          db.ref(`Economia/Empresa/${message.author.id}/Funcionarios-Totais-da-Empresa`).set(funcionarios)
          db.ref(`Economia/Empresa/${message.author.id}/Cnpj-da-Empresa`).set(`${number1}${number2}. ${number3}${number4}${number5}. ${number6}${number7}${number8}/${number9}${number10}${number11}${number12}-${number13}${number14}`)
                                                                                                                                            
      })
    })
  })
})

    } else {
      
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
      
      let embedError = new Discord.MessageEmbed()
      
      .setTitle(`${client.user.username} - Erro`)
      .setDescription(`Ops, parece que você já possui uma empresa.`)
      .addField(`Nome da Empresa`, `${nome}`)
      .addField(`Sobre a Empresa`, `${desc}`)
      .addField(`CNPJ a Empresa`, `${CNPJ}`)
      .addField(`Quantidade de Funcionarios na Empresa`, `${funcionarios_atuais} / ${funcionarios_total}`)
      
      message.channel.send(embedError)

    }


}

exports.help = {
  name: "criar-empresa",
  aliases: ["criarempresa"]
}