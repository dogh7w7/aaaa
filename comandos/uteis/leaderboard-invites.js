const Discord = require("discord.js");
const arraySort = require("array-sort");
const t = require("table");
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
  
  
    try {
      
        const embed = new Discord.MessageEmbed().setColor('RANDOM')
        
        if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
          
            embed.setAuthor("❌ Erro").setDescription("Não tenho acesso aos convites do servidor, verifique minhas permissões!");
          
            return message.channel.send({embed});
          
        }
      
        let invites = await message.guild.fetchInvites()
        
        if (invites.size === 0) {
          
            embed.setAuthor("❌ Erro").setDescription("Atualmente não existem convites criados no servidor!");
          
            return message.channel.send({embed});
          
        }
      
        invites = invites.array();
      
        arraySort(invites, "uses", { reverse: true });
      
        const usedInvites = [ ["**Usuário     ━     Usos**"] ];
              
        invites.forEach(invite => usedInvites.push([`\`${invite.inviter.tag}\` - \`${invite.uses}\``]));
      
        embed.setThumbnail(message.guild.iconURL())
      
        embed.setAuthor(`TOP INVITES`).setDescription(usedInvites);
      
        return message.channel.send({embed});
      
    } catch (err) {
      
        console.log(err.stack);
      
    }

}

exports.help = {
    name: 'leaderboard-convites',
    aliases: ['leaderboard-invites']
}