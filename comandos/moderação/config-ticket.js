const Discord = require('discord.js');
const c = require('../../config.json');
const firebase = require('firebase');
const db = firebase.database();

exports.run = async (client, message, args) => {

  let embed5 = new Discord.MessageEmbed()
  
  .setTitle(':x: ERROR!')
  .setDescription('**🔖 » Falta de permissão!** \nVocê não possui a permissão `ADMINISTRATOR`')
  .setThumbnail(message.author.displayAvatarURL())
  .setFooter(`Comando executado por: ${message.author.username}`, message.author.displayAvatarURL())
  .setColor('RANDOM')
  if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send(embed5)
  }

    let p = await db.ref(`Prefixo/Servidores/${message.guild.id}/Prefixo`).once('value')
    p = p.val()

    if(!p) {
      p = c.prefix
    }

  const embedprinc = new Discord.MessageEmbed()
  .setTitle(`Olá ${message.author.username}!`)
  .setDescription('Bem vindo a configuração do ticket!')
  .setColor('RANDOM')

  message.channel.send(embedprinc)

  const embed = new Discord.MessageEmbed()

  .setTitle('Canal!')
  .setDescription('Em qual canal será enviada a mensagem de ticket?')
  .setColor('RANDOM')

  const embedc = new Discord.MessageEmbed()

  .setTitle('Cargo!')
  .setDescription('Menciona o cargo que podera ver o canal de ticket!')
  .setThumbnail(message.author.displayAvatarURL())
  .setColor('RANDOM')

  const embedcr2 = new Discord.MessageEmbed()
  .setTitle(':x: ERRO!')
  .setDescription(`Você deve mencionar o canal!\nPara tentar novamente, use: ${p}configticket`)
  .setColor('RANDOM')

  const embedcr = new Discord.MessageEmbed()
  .setTitle(':x: ERRO!')
  .setDescription(`Você deve mencionar o cargo!\nPara tentar novamente, use: ${p}configticket`)
  .setColor('RANDOM')

  const embed3 = new Discord.MessageEmbed()
  .setTitle('Mensagem!')
  .setDescription('Qual será a mensagem de ticket?')
  .setColor('RANDOM')

  const embed4 = new Discord.MessageEmbed()
  .setTitle('Titulo!')
  .setDescription('Qual será o titulo da mensagem de ticket?')
  .setColor('RANDOM')

  message.channel.send(embed).then(msg => {
      let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            const canal = c.mentions.channels.first()
            if (!canal) {
               return message.channel.send(embedcr2)
            } else {
  message.channel.send(embedc).then(msg4 => {
          let cf = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .on('collect', c => {
            const cargo = c.mentions.roles.first()
            if (!cargo) {
               return message.channel.send(embedcr)
            } else {
                message.channel.send(embed3).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        const desc = c.content
                    
                        message.channel.send(embed4).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                const title = c.content

      const embeda = new Discord.MessageEmbed()
      
      .setTitle('Finalização!')
      .setDescription('Deseja habilitar o sistema?\n\nCaso queira, reaja com: <:on:730094267858550855>!\nCaso queira desabilitar o sistema, reaja com: <:off:731327251454623774>!')
      .setThumbnail(message.author.displayAvatarURL())
      .setColor('RANDOM')

      message.channel.send(embeda).then(msg => {
        
        msg.react('730094267858550855')
        msg.react('731327251454623774')

        const SimFilter = (reaction, user, ) => reaction.emoji.id === '730094267858550855' && user.id === message.author.id;
        const NaoFilter = (reaction, user, ) => reaction.emoji.id === '731327251454623774' && user.id === message.author.id;

        const Sim = msg.createReactionCollector(SimFilter, {max: 1})
        const Nao = msg.createReactionCollector(NaoFilter, {max: 1})

        Sim.on('collect', r2 =>{

        msg.delete()

        const embed9 = new Discord.MessageEmbed()
  
        .setTitle('Sucesso!')
        .setDescription(`Sistema de Ticket ativado com sucesso!`)
        .setColor('RANDOM')

        message.channel.send(embed9)

        const embedf = new Discord.MessageEmbed()
        .setTitle(`${title}`)
        .setDescription(`${desc}`)
        .setThumbnail(message.guild.iconURL({dinamyc: true}))
        .setColor('RANDOM')

        canal.send(embedf).then(a => {
        db.ref(`Tickets/MsgIDTicket/Servidores/${message.guild.id}/IDMsg`).set(a.id)
        db.ref(`Tickets/ServIDTicket/Servidores/${message.guild.id}/IDServ`).set(a.guild.id)
        db.ref(`Tickets/CanalIDTicket/Servidores/${message.guild.id}/Canal`).set(canal.id)
        db.ref(`Tickets/CargoIDTicket/Servidores/${message.guild.id}/Cargo`).set(cargo.id)
        a.react('📩')
      })
  })

        Nao.on('collect', r2 =>{

        msg.delete()

        db.ref(`Tickets/MsgIDTicket/Servidores/${message.guild.id}/IDMsg`).remove()
        db.ref(`Tickets/ServIDTicket/Servidores/${message.guild.id}/IDServ`).remove()
        db.ref(`Tickets/CanalIDTicket/Servidores/${message.guild.id}/Canal`).remove()
        db.ref(`Tickets/CargoIDTicket/Servidores/${message.guild.id}/Cargo`).remove()

        const embed10 = new Discord.MessageEmbed()
  
        .setTitle('Sucesso!')
        .setDescription(`Sistema de Ticket desativado com sucesso!`)
        .setColor('RANDOM')

        message.channel.send(embed10)

                        })
                      })
                    })
                  })
                })
              })
            }
          })
        })
      }
    })
  })
}

exports.help = {
  name: 'config-ticket',
  aliases: []
}