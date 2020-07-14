const ms = require("ms");
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

  
  if (message.deletable) message.delete();

  if (!args[0]) {
    return message
      .reply("você não especificou o tempo para o término deste sorteio.")
      .then(msg => msg.delete({ timeout: 10000 }));
  }
  let premio = args.slice(1).join(" ");
  if (!premio) {
    return message
      .reply("nenhum item foi especificado como prêmio deste sorteio.")
      .then(msg => msg.delete({ timeout: 10000 }));
  }
  let embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL())
    .setAuthor(`SORTEIO DE ${premio}`, client.user.displayAvatarURL())
    .setColor("GREEN")
    .setDescription(
      "**Para confirmar sua participação, basta reagir à mensagem**."
    )
    .addField(
      "**__Informações do sorteio__**:",
      `🏆 **Prêmio**: **${premio}**! \n🚩 **Requisitos**: \n**1**. Ser ativo na Network(Obrigatório) \n**2**.Convidar 3 amigos para o Discord (Não obrigatório)\n**3.** Ter rank **__lápis__** ou superior no servidor(Obrigatório)`
    );

  let canal = await message.channel.send("@everyone", embed);
  canal.react("🎉");

  setTimeout(() => {
    if (canal.reactions.cache.get("🎉").count <= 0) {
      message.channel.send(
        "Número insuficiente de reações para completar este sorteio."
      );
    } else {
      let vencedor = canal.reactions.cache
        .get("🎉")
        .users.cache.filter(ganhador => !ganhador.bot)
        .random();
      canal.delete();
      message.channel.send(
        `@everyone O vencedor do sorteio valendo **${premio}** foi **${vencedor}**!!!`
      );
    }
  }, ms(args[0]));
};
exports.help = {
  name: "sorteio",
  aliases: ["sortear"]
};
