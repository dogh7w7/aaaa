const Discord = require("discord.js");
const firebase = require('firebase');
const db = firebase.database();

exports.run = async (bot, message, args) => {
  
    let xxx = await db.ref(`Jina/Dados/Comandos-Usados/Quantia`).once('value')
        xxx = xxx.val()
  
    let yyy = 1
    
    db.ref(`Jina/Dados/Comandos-Usados/Quantia`).set(xxx + yyy)
  
    if (!['417067105897414667', '510120952818958337', '595415089335500800'].includes(message.author.id)) {
      
      let embed22 = new Discord.MessageEmbed()
      
      .setTitle(`${bot.user.username} - Erro !`)
      .setDescription('Comando disponivel apenas para desenvolvedores !')
      
    return message.channel.send(embed22)
    
    }
  
        var servers = bot.users
        var num = 0;
        var pagina = 1;
        var totalPages = parseInt(servers.cache.size/10+1);
        
        var embed = new Discord.MessageEmbed()

        .setDescription(`${servers.cache.map(se=> `Nome: \`${se.tag}\` - ID: \`${se.id}\``).slice(0,10).join('\n')}`)
        .setFooter(`Página ${pagina} de ${totalPages} (${bot.guilds.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
        .setAuthor('Todas as guilds em que estou:', bot.user.displayAvatarURL())
        .setColor('#36393e')
        .setThumbnail(bot.user.displayAvatarURL())
        message.channel.send(embed).then(async ser => {

            if(servers.cache.size > 10) {

                await ser.react("⬅");
                await ser.react("➡");
                
                const voltar = ser.createReactionCollector((r, u) => r.emoji.name === "⬅" && u.id === message.author.id, { time: 100000 });
                const proximo = ser.createReactionCollector((r, u) => r.emoji.name === "➡" && u.id === message.author.id, { time: 100000 });
            
                            voltar.on("collect", async r => {
                                if(pagina !== 1) {
                                    num = num-10
                                    num = num.toString().length > 1 ? num-parseInt(num.toString().slice(num.toString().length-1)) : 0
                                    pagina -= 1
                                    var embed = new Discord.MessageEmbed()

                                .addField(`Servidores:`, `${servers.cache.map(se=> `Nome: \`${se.tag}\` - ID: \`${se.id}\``).slice(pagina*10-10,pagina*10).join('\n')}`)
                                .setFooter(`Página ${pagina} de ${totalPages} (${bot.users.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
                                .setColor('#36393e')
                                .setAuthor('Todas as guilds em que estou:', bot.user.displayAvatarURL())
                                .setThumbnail(bot.user.displayAvatarURL())
                                ser.edit(embed)
                                r.users.remove(message.author)
                                } else {
                                    pagina = totalPages
                                    num = totalPages*10-20

                                    var embedb = new Discord.MessageEmbed()

                                    .setDescription(`${servers.cache.map(se=> `Nome: \`${se.tag}\` - ID: \`${se.id}\``).slice(totalPages*10-10,pagina*10).join('\n')}`)
                                    .setFooter(`Página ${pagina} de ${totalPages} (${bot.users.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
                                    .setThumbnail(bot.user.displayAvatarURL())
                                    .setAuthor('Todas as guilds em que estou:', bot.user.displayAvatarURL())
                                    .setColor('#36393e')
                                ser.edit(embedb)

                                r.users.remove(message.author)
                                }
                            })
            
                            proximo.on("collect", async r => {
                                if(pagina !== totalPages) {
                                    num = num.toString().length > 1 ? num-parseInt(num.toString().slice(num.toString().length-1)) : 0
                                    num = num+10
                                    pagina += 1

                                    var embedc = new Discord.MessageEmbed()

                                    .setDescription(`${servers.cache.map(se=> `Nome: \`${se.tag}\` - ID: \`${se.id}\``).slice(pagina*10-10,pagina*10).join('\n')}`)
                                    .setFooter(`Página ${pagina} de ${totalPages} (${bot.users.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
                                    .setThumbnail(bot.user.displayAvatarURL)
                                    .setAuthor('Todas as guilds em que estou:', bot.user.displayAvatarURL())
                                    .setColor('#36393e')
                                ser.edit(embedc)
        
                                r.users.remove(message.author)
                                } else {
                                    pagina = 1
                                    num = 0

                                    var embedd = new Discord.MessageEmbed()

                                    .setDescription(`${servers.cache.map(se=> `Nome: \`${se.tag}\` - ID: \`${se.id}\``).slice(0,pagina*10).join('\n')}`)
                                    .setFooter(`Página ${pagina} de ${totalPages} (${bot.users.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
                                    .setThumbnail(bot.user.displayAvatarURL())
                                    .setAuthor('Todas as guilds em que estou:', bot.user.displayAvatarURL())
                                    .setColor('#36393e')
                                    ser.edit(embedd)

                                    r.users.remove(message.author)
                    }
                })
            }
        })
    }

exports.help = {
  name: "allusers",
  aliases: []
};