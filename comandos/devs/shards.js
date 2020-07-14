const Discord = require('discord.js')
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
  
  const promises = [
	client.shard.fetchClientValues('guilds.cache.size'),
	client.shard.broadcastEval('this.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)'),
];

Promise.all(promises)
	.then(results => {
		const totalGuilds = results[0].reduce((prev, guildCount) => prev + guildCount, 0);
		const totalMembers = results[1].reduce((prev, memberCount) => prev + memberCount, 0);
		return message.channel.send(`Server count: ${totalGuilds}\nMember count: ${totalMembers}`);
	})
	.catch(console.error);
  
}
exports.help = {
  name: 'shards',
  aliases: []
}