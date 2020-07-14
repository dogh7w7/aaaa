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
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`você não possui permissões suficientes para exercer este comando;`)

  message.channel.send(`Em qual canal você deseja enviar o anuncio?`).then(msg => {
    
      let canal = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 } ).on("collect", c => { canal = c.mentions.channels.firstf
      
      if (!canal) {
        
            message.reply(`canal inválido! Tente novamente re-inserindo o comando.`);
        
          } else {
            
            message.channel.send(`Qual será a mensagem do anuncio?`).then(msg2 => {
              
                let desc = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 } ).on("collect", c => { desc = c.content;

                    message.channel.send(`Qual será o título designado para o anuncio?`).then(msg3 => {
                      
                        let title = message.channel.createMessageCollector( x => x.author.id == message.author.id, { max: 1 } ).on("collect", c => { title = c.content;

                            message.channel.send(`A mensagem ***${title}*** foi enviada ao canal ${canal} com sucesso!`), { max: 1 };

                            let embed = new Discord.MessageEmbed()

                              .setColor("RANDOM")
                              .setTitle(title)
                              .setDescription(desc);

                            canal.send(`**||@everyone / @here||**`, embed), { max: 1 };
                                                                                                                                                    
                          })
                      });
                  });
              });
          }
        });
    });
};

exports.help = {
  name: "anunciar",
  aliases: []
};
