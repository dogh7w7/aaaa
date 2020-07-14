const Discord = require("discord.js");
const firebase = require('firebase');
const config = require('../../config.json')
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
  
  let prefix = await db.ref(`Configurações/Prefixos/${message.guild.id}/Prefixo`).once('value')
      prefix = prefix.val()
  if(!prefix) prefix = config.prefix
  
    message.delete()

    let embed = new Discord.MessageEmbed()
        .setTitle(`Central de informações:`)
        .setColor("RANDOM")
        .setDescription('Para listar todas as minhas utilidades, reaja a uma categoria abaixo: \n🔨 = Moderação; \n🔧 = Utilidade; \n💳 = Entretenimento; \n📲 = Especiais.')
    message.channel.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('🔨').then(r => { // utilidade
            msg.react('🔧').then(r => { // moderação
            msg.react('💳').then(r => { // entretenimento
            msg.react('📲').then (r => { // especiais
            msg.react('🔙').then(r => { // inicio
       
            })    
        })
      })
   })
})
        // filtros de cada reação, para configurar a informação do autor
      
        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user, ) => reaction.emoji.name === '💳' && user.id === message.author.id;
        const EspeciaisFilter = (reaction, user, ) => reaction.emoji.name === '📲' && user.id === message.author.id;
        const BackFilter = (reaction, user, ) => reaction.emoji.name === '🔙' && user.id === message.author.id;
      
        // coletores de cada reação, para ver confirmar tal membro 
      
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Especiais = msg.createReactionCollector(EspeciaisFilter);
        const Back = msg.createReactionCollector(BackFilter);
      
        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
          
            embed = new Discord.MessageEmbed()
          
                .setTitle("🔧 = Utilidade:")
                .addField(`\`${prefix}ping\``, `Veja o ping do bot;`)
                .addField(`\`${prefix}premium\``, `Veja se o servidor possui premium;`)
                .addField(`\`${prefix}botinfo\``, `Veja as infos do bot;`)
                .addField(`\`${prefix}equipe\``, `Veja e equipe do bot;`)
                .addField(`\`${prefix}leaderboard-invites\``, `Veja o top invites no servidor;`)
                .setColor("RANDOM")
          
            r2.users.remove(message.author.id)
            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
          
            embed = new Discord.MessageEmbed()
          
                .setTitle("👮 = Moderação:")
                .addField(`\`${prefix}warn\``, `Aplique um aviso em um membro;`)
                .addField(`\`${prefix}setpunish\``, `Setar o canal que sera enviado as punições;`)
                .addField(`\`${prefix}anunciar\``, `Anunciar uma mensagem no canal fornecido;`)
                .addField(`\`${prefix}setprefix\``, `Setar o prefixo do bot;`)
                .addField(`\`${prefix}painel\``, `Vejá as configurações atuais no servidor;`)
                .addField(`\`${prefix}punir\``, `Punir um usuário;`)
                .addField(`\`${prefix}config-welcome\``, `Configurar sistema de entrada no servidor;`)
                .addField(`\`${prefix}config-levels\``, `Configurar cargo dos levels;`)
                .addField(`\`${prefix}chat\``, `Ative e desative o chat;`)
                .setColor("RANDOM")
          
           r2.users.remove(message.author.id)
           msg.edit(embed);
        })
 
        Entretenimento.on('collect', r2 => {
          
            embed = new Discord.MessageEmbed()
          
                .setTitle("💳 = Entretenimento:")
                .addField(`\`${prefix}perfil\``, `Veja o seu perfil ou do membro mencionado;`)
                .addField(`\`${prefix}emprego\``, `Começe a trabaçhar;`)
                .addField(`\`${prefix}saldo\``, `Veja o seu saldo ou do membro mencionado;`)
                .addField(`\`${prefix}loja\``, `Compre items;`)
                .addField(`\`${prefix}trabalhar\``, `Trabalhe para conseguir Jina Coins;`)
                .addField(`\`${prefix}daily\``, `Pegue seus Jina Coins diarios;`)
                .addField(`\`${prefix}criar-empresa\``, `Crie uma empresa;`)
                .addField(`\`${prefix}deletar-empresa\``, `Deletar sua empresa;`)
                .setColor("RANDOM")
          
            r2.users.remove(message.author.id)
            msg.edit(embed);
        })
        Especiais.on('collect', r2 => {
          
            embed = new Discord.MessageEmbed()
          
                .setTitle("📲 = Especiais:")
                .addField(`\`Breve\``, `Em Breve`)
                .setColor("RANDOM")
          
            r2.users.remove(message.author.id)
            msg.edit(embed);
    })
        Back.on('collect', r2 => {
          
            embed = new Discord.MessageEmbed()
          
            .setTitle(`Central de informações:`)
            .setColor("RANDOM")
            .setDescription('Para listar todas as minhas utilidades, reaja a uma categoria abaixo: \n🔨 = Moderação; \n🔧 = Uteis; \n💳 = Entretenimento; \n📲 = Especiais.')
          
           r2.users.remove(message.author.id)
           msg.edit(embed);  
        });
    });
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "ajuda",
    aliases: ["help"]
}