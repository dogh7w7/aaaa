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
  
  var poppycoin = await db.ref(`Economia/Money/${message.author.id}/Dinheiro`).once('value')
      poppycoin = poppycoin.val()
  if (!poppycoin) poppycoin = 0;
  
  var wallpaper = await db.ref(`Economia/Wallpapper/${message.author.id}/Wallpaper`).once('value')
      wallpaper = wallpaper.val()
  if (!wallpaper) wallpaper = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX0tZIifE67Z9X_Ki0q5-TB-dPCvlvGcK0u4nqUKWdMf4RFAnm&usqp=CAU";
  
  var poppycolor = await db.ref(`Economia/Color/${message.author.id}/Cor`).once('value')
      poppycolor = poppycolor.val()
  if (!poppycolor) poppycolor = '#36393e'
  
  let embed = new Discord.MessageEmbed()
  
    .setTitle(`Jina 진아 - Loja`)
    .setColor("RANDOM")
    .setDescription("Reaja com um dos emojis:\n:rainbow: = Loja Perfil; \n🔧 = Em desevolvimento");
  
  message.channel.send(embed).then(msg => {
 
    msg.react("🌈").then(r => { });


    // Filtros, Menu

    const PerfilFilter = (reaction, user) => reaction.emoji.name === "🌈" && user.id === message.author.id;
    const Teste2Filter = (reaction, user) => reaction.emoji.name === "🔧" && user.id === message.author.id;

    // Coletores, Menu

    const Perfil = msg.createReactionCollector(PerfilFilter);
    const Teste2 = msg.createReactionCollector(Teste2Filter);

    // Filtros, Imagens Perfil

    const BannersPerfilFilter = (reaction, user) => reaction.emoji.name === "🔲" && user.id === message.author.id;
    const CoresPerfilFilter = (reaction, user) => reaction.emoji.name === "🖍" && user.id === message.author.id;

    const CidadeTech1Filter = (reaction, user) => reaction.emoji.name === "🔵" && user.id === message.author.id;
    const CidadeTech2Filter = (reaction, user) => reaction.emoji.name === "🟣" && user.id === message.author.id;

    const CorAzulFilter = (reaction, user) => reaction.emoji.name === "🟦" && user.id === message.author.id;
    const CorRoxaFilter = (reaction, user) => reaction.emoji.name === "🟪" &&user.id === message.author.id;

    // Coletores, Imagens Perfil

    const Banner = msg.createReactionCollector(BannersPerfilFilter);
    const Cores = msg.createReactionCollector(CoresPerfilFilter);

    const ImagemCidadeTecnologicaAzul = msg.createReactionCollector(CidadeTech1Filter);
    const ImagemCidadeTecnologica = msg.createReactionCollector(CidadeTech2Filter);
    
    const CorAzul = msg.createReactionCollector(CorAzulFilter);
    const CorRoxa = msg.createReactionCollector(CorRoxaFilter);

    Perfil.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!

      let embedperfil = new Discord.MessageEmbed()

        .setTitle("Menu - Perfil")
        .setDescription("🔲 Banners\n 🖍 Cores");

      msg.reactions.removeAll();
      msg.edit(embedperfil).then(msg => {
        msg.react("🔲").then(a => {
          msg.react("🖍").then(a => {});
        });
      });
    });

    Banner.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!

      let embedperfil = new Discord.MessageEmbed()

        .setTitle("Menu - Perfil Banners")
        .addField("🔵 Cidade Tecnologica Azul", `Ver Imagem : [Visualizar](https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-blue-tech-smart-city-background-citysmart-citybanner-backgroundbackgroundbuildingbluecity-image_68303.jpg)`)
        .addField("🟣 Cidade Tecnologica", `Ver Imagem : [Visualizar](https://i.pinimg.com/originals/4a/49/71/4a4971fff8827531a7aa4b13218cd6bb.jpg)`);

      msg.reactions.removeAll();
      msg.edit(embedperfil).then(msg => {
        msg.react("🔵").then(a => {
          msg.react("🟣").then(a => {});
        });
      });
    });

    Cores.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!

      let embedperfilcores = new Discord.MessageEmbed()

        .setTitle("Menu - Perfil Cores")
        .addField("🟦 Cor Azul", "Cor Azul na embed perfil")
        .addField("🟪 Cor Roxa", "Cor Roxa na embed Perfil");

      msg.reactions.removeAll();
      msg.edit(embedperfilcores).then(msg => {
        msg.react("🟦").then(a => {
          msg.react("🟪").then(a => {});
        });
      });
    });

    Teste2.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!

      let embedcores = new Discord.MessageEmbed()

        .setTitle("Menu - Teste 2")
        .setDescription(":purple_heart: Roxo\n :blue_circle: Azul");

      msg.reactions.removeAll();
      msg.edit(embedcores).then(msg => {
        msg.react("🔵").then(a => {
          msg.react("🟣").then(a => {});
        });
      });
    });

    ImagemCidadeTecnologicaAzul.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!

      if (poppycoin < 35000) {
        let erro1 = new Discord.MessageEmbed()

          .setTitle("Jina 진아 - Erro")
          .setDescription(":x: Você não possui 35000 Poppy Coins");

        return msg.edit(erro1), msg.reactions.removeAll();
      }

      let imagemazul = new Discord.MessageEmbed()

        .setTitle("Jina 진아 - Sucesso")
        .setDescription(
          "Parabéns, você comprou a imagem Cidade Tecnologica Azul com sucesso!"
        );

      db.ref(`Economia/Money/${message.author.id}/Dinheiro`).set(Number(poppycoin) - Number(35000));
      db.ref(`Economia/Wallpapper/${message.author.id}/Wallpaper`).set(`https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-blue-tech-smart-city-background-citysmart-citybanner-backgroundbackgroundbuildingbluecity-image_68303.jpg`);

      msg.edit(imagemazul), msg.reactions.removeAll();
    });

    ImagemCidadeTecnologica.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!

      if (poppycoin < 35000) {
        let erro2 = new Discord.MessageEmbed()

          .setTitle("Jina 진아 - Erro")
          .setDescription(":x: Você não possui 35000 Poppy Coins");

        return msg.edit(erro2), msg.reactions.removeAll();
      }

      let imagemtech = new Discord.MessageEmbed()

        .setTitle("Jina 진아 - Sucesso")
        .setDescription(
          "Parabéns, você comprou a imagem Cidade Tecnologica com sucesso!"
        );

      db.ref(`Economia/Money/${message.author.id}/Dinheiro`).set(Number(poppycoin) - Number(35000));
      db.ref(`Economia/Wallpapper/${message.author.id}/Wallpaper`).set(`https://i.pinimg.com/originals/4a/49/71/4a4971fff8827531a7aa4b13218cd6bb.jpg`);

      msg.edit(imagemtech), msg.reactions.removeAll();
    });

    CorAzul.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!

      if (poppycoin < 5000) {
        let erro3 = new Discord.MessageEmbed()

          .setTitle("Jina 진아 - Erro")
          .setDescription(":x: Você não possui 5000 Poppy Coins");

        return msg.edit(erro3), msg.reactions.removeAll();
      }

      let imagemtech = new Discord.MessageEmbed()

        .setTitle("Jina 진아 - Sucesso")
        .setDescription("Parabéns, você comprou a cor azul com sucesso!");

      db.ref(`Economia/Money/${message.author.id}/Dinheiro`).set(Number(poppycoin) - Number(5000));
      db.ref(`Economia/Color/${message.author.id}/Cor`).set(`#3263c7`);

      msg.edit(imagemtech), msg.reactions.removeAll();
    });

    CorRoxa.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!

      if (poppycoin < 5000) {
        let erro4 = new Discord.MessageEmbed()

          .setTitle("Jina 진아 - Erro")
          .setDescription(":x: Você não possui 5000 Poppy Coins");

        return msg.edit(erro4), msg.reactions.removeAll();
      }

      let imagemtech = new Discord.MessageEmbed()

        .setTitle("Jina 진아 - Sucesso")
        .setDescription("Parabéns, você comprou a cor roxa com sucesso!");

      db.ref(`Economia/Money/${message.author.id}/Dinheiro`).set(Number(poppycoin) - Number(5000));
      db.ref(`Economia/Color/${message.author.id}/Cor`).set(`#7f43cc`);

      msg.edit(imagemtech), msg.reactions.removeAll();
    });
  });
};

exports.help = {
  name: "loja",
  aliases: ["shop"]
};
