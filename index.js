const Discord = require("discord.js");
const { Structures } = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const { readdirSync } = require("fs");
const data = require("quick.db");
const { join } = require("path");
const http = require('http');
const express = require('express');
const app = express();
var userTickets = new Map()
const firebase = require('firebase')

Structures.extend('Guild', function(Guild) {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
    }
  }
  return MusicGuild;
});

//-----------------------------------------------------

//---------- < Firebase > ------ < Inicio > -----------

var firebaseConfig = {
  apiKey: "AIzaSyD35FshKMn3KD5OsfkeoR2S0ZXxwQXlYGA",
  authDomain: "jina-bot.firebaseapp.com",
  databaseURL: "https://jina-bot.firebaseio.com",
  projectId: "jina-bot",
  storageBucket: "jina-bot.appspot.com",
  messagingSenderId: "1069330553665",
  appId: "1:1069330553665:web:9d0fb5dfd36a95fd5b5fc0",
  measurementId: "G-748ENWY86K"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database()
  
//---------- < Firebase > ------ < Fim > --------------

//-----------------------------------------------------

  const ping = new Date();
  ping.setHours(ping.getHours() - 3);

//-----------------------------------------------------
      
fs.readdir("./comandos/devs/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() === "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/devs/${f}`)
    console.log(`[ Devs ] Comando ${f} Iniciado !`);
    
    client.commands.set(props.help.name, props);
  });
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/devs/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    })
  })
})
      
fs.readdir("./comandos/diversão/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() === "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/diversão/${f}`)
    console.log(`[ Comandos ] Comando ${f} Iniciado !`);
    
    client.commands.set(props.help.name, props);
  });
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/diversão/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    })
  })
})

fs.readdir("./comandos/economia/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() === "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/economia/${f}`)
    console.log(`[ Economia ] Comando ${f} Iniciado !`);
    
    client.commands.set(props.help.name, props);
  });
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/economia/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    })
  })
})

fs.readdir("./comandos/moderação/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() === "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/moderação/${f}`)
    console.log(`[ Moderação ] Comando ${f} Iniciado !`);
    
    client.commands.set(props.help.name, props);
  });
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/moderação/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    })
  })
})

fs.readdir("./comandos/musica/youtube/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() === "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/musica/youtube/${f}`)
    console.log(`[ Música - YouTube ] Comando ${f} Iniciado !`);
    
    client.commands.set(props.help.name, props);
  });
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/musica/youtube/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    })
  })
})

fs.readdir("./comandos/musica/spotify/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() === "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/musica/spotify/${f}`)
    console.log(`[ Música - Spotify ] Comando ${f} Iniciado !`);
    
    client.commands.set(props.help.name, props);
  });
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/musica/spotify/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    })
  })
})

fs.readdir("./comandos/uteis/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() === "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/uteis/${f}`)
    console.log(`[ Uteis ] Comando ${f} Iniciado !`);
    
    client.commands.set(props.help.name, props);
  });
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/uteis/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    })
  })
})
   
//-----------------------------------------------------

client.on('raw', async dados => {

    if(dados.t !== "MESSAGE_REACTION_ADD") return;

    let servidor2 = await db.ref(`Tickets/ServIDTicket/Servidores/${dados.d.guild_id}/IDServ`).once('value')
    servidor2 = servidor2.val()

    if(servidor2 === null) {
      return;
    }

    let idmsg = await db.ref(`Tickets/MsgIDTicket/Servidores/${dados.d.guild_id}/IDMsg`).once('value')
    idmsg = idmsg.val()

    if(idmsg === null) {
      return;
    }

    let servc = await db.ref(`Tickets/CanalIDTicket/Servidores/${dados.d.guild_id}/Canal`).once('value')
    servc = servc.val()

    if(servc === null) {
      return;
    }

    let role = await db.ref(`Tickets/CargoIDTicket/Servidores/${dados.d.guild_id}/Cargo`).once('value')
    role = role.val()

    if(role === null) {
      return;
    }

    if(dados.d.message_id != idmsg) return;

    const servidor = client.guilds.cache.get(servidor2)

    let membro = servidor.members.cache.get(dados.d.user_id)

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.name === "📩"){

        if(client.users.cache.get(dados.d.user_id).bot) {
          return;
        } else {
        let embederroc = new Discord.MessageEmbed()
  
        .setTitle(':x: ERROR!')
        .setDescription('**🔖 » Falta de permissão!** \nEu estou sem a permissão `ADMINISTRADOR`')
        .setColor('RANDOM')
        if(!membro.guild.me.hasPermission("ADMINISTRATOR")) {
        return client.channels.cache.get(servc).send(`${membro}`, embederroc).then(a => {
        setTimeout(() => {
        a.delete()
        }, 8000)
          })
        }
        
        servidor.channels.create(`new-ticket`, {type: "text"
          }).then(x => {
            x.updateOverwrite(membro.guild.roles.everyone, {VIEW_CHANNEL: false})
            x.updateOverwrite(membro, {VIEW_CHANNEL: true})
            x.updateOverwrite(role, {VIEW_CHANNEL: true})
            x.updateOverwrite(client.user.id, {VIEW_CHANNEL: true})

          const embedx = new Discord.MessageEmbed()
          .setTitle(`Olá ${membro.user.username}!`)
          .setDescription(`Seja bem vindo ao canal de ticket!\nCaso queira fechar o ticket, reaja com: :x:!`)          .setColor('RANDOM')
          x.send(`${membro}`, embedx).then(msg => {
              msg.react('❌')
        const FecharA = (reaction, user, ) => reaction.emoji.name === '❌' && user.id ===
        membro.user.id || role.id;
        const Fechar = msg.createReactionCollector(FecharA)

        Fechar.on('collect', r2 => {
        msg.delete()
        x.send(`${membro}, o canal será deletado em 5 segundos!`)
        setTimeout(() => {
        x.delete()
        }, 5000)
              })
            })
          })
        }
      }
    }
  })

client.on("ready", async () => {
  
  console.log(`Logado como ${client.user.username}`);
  
//------------ < Status > --- < Inicio > --------------
  
  let a = [
    { name: "Use r.help para ver meus comandos!", type: "WATCHING" },
    { name: "Use r.botinfo Para Ver Minhas Informações", type: "WATCHING" },
    { name: `Com ${client.commands.size} Comandos!`, type: "PLAYING" },
    { name: `Com ${client.guilds.cache.size} Servidores!`, type: "PLAYING" },
    { name: `Com ${client.users.cache.size} Membros`, type: "PLAYING" }
  ];
  let b = a[Math.floor(Math.random() * a.length)];
  function setStatus() {
    client.user.setActivity(b);
  }
  setStatus();
  setInterval(() => setStatus(), 150);
  
//------------ < Status > --- < Fim > ----------------
  
//------------ < Avatar > --- < Inicio > -------------

  let avatar = [
                "https://cdn.glitch.com/5d4ac7d0-a52b-4fbf-a419-9fb09fb9d4a6%2F8cfce37db799dcae3e46a254803dfb99.jpg?v=1593724546712",
                "https://cdn.glitch.com/5d4ac7d0-a52b-4fbf-a419-9fb09fb9d4a6%2Fb0236836bc20f6c7ca3624657f6cbdae.jpg?v=1593724550940",
                "https://cdn.glitch.com/5d4ac7d0-a52b-4fbf-a419-9fb09fb9d4a6%2Ffc7a51a1eaa49e3f9c0a12f32f32a28c.png?v=1593724556098",
                "https://cdn.glitch.com/5d4ac7d0-a52b-4fbf-a419-9fb09fb9d4a6%2Fghdsjkg.png?v=1593724558676",
                "https://cdn.glitch.com/5d4ac7d0-a52b-4fbf-a419-9fb09fb9d4a6%2F%C3%ADndice.jpeg?v=1593724561450",
                "https://cdn.glitch.com/5d421991-f193-4207-9116-116485b591ed%2F02e5d2da-b5cc-4876-bc35-86fd8597910f.image.png?v=1593963789232",
                "https://cdn.glitch.com/5d4ac7d0-a52b-4fbf-a419-9fb09fb9d4a6%2Furtueu5543753utyrdf.png?v=1593724569241"
               ];
  
  function avattar() {
  
      let statuss = avatar[Math.floor(Math.random() * avatar.length)];
  
      client.user.setAvatar(statuss);
  
  }
  
  avattar();
  setInterval(() => avattar(), 900500)
  setInterval(() => console.log('Perfil atualizado' + ' ' + ping.getUTCHours() + ':' + ping.getUTCMinutes() + ':' + ping.getUTCSeconds() + ' !'), 900500)
  
//------------ < Avatar > --- < Fim > ----------------

/*//------- < Statisticas > --- < Inicio > -------------
  
  async function Statisticas() {
  
    let xxx = await db.ref(`Jina/Dados/Comandos-Usados/Quantia`).once('value')
        xxx = xxx.val()
    
    let jinaserver = client.guilds.cache.get('721564616764686377')
    
    let servers         = jinaserver.channels.cache.get('721564808352235542')
    let users           = jinaserver.channels.cache.get('721564882549473291')
    let canais          = jinaserver.channels.cache.get('721564913767809024')
    let comandos        = jinaserver.channels.cache.get('721746673532928070')
    let commandsusados  = jinaserver.channels.cache.get('726422086985449575')

    servers.setName(`🔐 Servidores : ${client.guilds.cache.size}`)
    users.setName(`❤ Usuários : ${client.users.cache.size}`)
    canais.setName(`🔑 Canais : ${client.users.cache.size}`)
    comandos.setName(`⭕ Comandos : ${client.commands.size}`)
    commandsusados.setName(`⭕ Comandos Usados : ${xxx}`)
    
  }
  
  Statisticas();
  setInterval(() => Statisticas(), 30000)
  
//------- < Statisticas > --- < Fim > ----------------*/
  
})

client.on("message", async (message) => {
  
  if(message.author.bot) return;
  if(message.channel.type === 'DM') return;
  
    let xxx = await db.ref(`Jina/Dados/Mensagens-Lidas/Quantia`).once('value')
        xxx = xxx.val()
  
    let yyy = 1
    
    db.ref(`Jina/Dados/Mensagens-Lidas/Quantia`).set(xxx + yyy)
  
  let prefix = await db.ref(`Configurações/Prefixos/${message.guild.id}/Prefixo`).once('value')
      prefix = prefix.val()
  
  if (!prefix) prefix = config.prefix
  
  let mention = [`<@${client.user.id}>`, `<@!${client.user.id}>`]
  
    mention.find(mention => {
      
    if(message.content === mention) {
      
    let embed = new Discord.MessageEmbed()
        
      .setTitle('Meu prefixo')
      .setDescription(`Meu Prefixo nesse servidor é \`${prefix}\`, Use \`${prefix}ajuda\` Para Ver Meus Comandos!`)
        
    message.channel.send(embed)
      
    }
      
  });

    var premium = await db.ref(`Premium/Servidores/${message.guild.id}/Premium`).once('value')
        premium = premium.val()
  
/*    if(premium == 'premium-online') {
      
  db.ref(`Levels-e-XP/Server-ID/${message.guild.id}/Membro/${message.author.id}/Levels`).once('value').then(async function(SystemXP){
    
      if (SystemXP.val() == null) {
        
         db.ref(`Levels-e-XP/Server-ID/${message.guild.id}/Membro/${message.author.id}/Levels`).set({ xp: 0, level: 1 })
        
      } else {
        
        let gerarXP = Math.floor(Math.random() * 40) + 20;
        
        if (SystemXP.val().level*100 <= SystemXP.val().xp) {
          
      let cargo1 = await db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-5`).once('value')
          cargo1 = cargo1.val()
          
      let cargo2 = await db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-10`).once('value')
          cargo2 = cargo2.val()
      
      let cargo3 = await db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-15`).once('value')
          cargo3 = cargo3.val()
      
      let cargo4 = await db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-20`).once('value')
          cargo4 = cargo4.val()
      
          
          let role = await message.guild.roles.cache.get(cargo1)
          
            if (SystemXP.val().level+1 == '5') {
            
               message.member.roles.add(role);
            
             }
          
           let role2 = await message.guild.roles.cache.get(cargo2)
         
            if (SystemXP.val().level+1 == '10') {
            
               message.member.roles.add(role2)
            
            } 
          
           let role3 = await message.guild.roles.cache.get(cargo3)
         
            if (SystemXP.val().level+1 == '15') {
            
               message.member.roles.add(role3)
            
            } 
          
           let role4 = await message.guild.roles.cache.get(cargo4)
         
            if (SystemXP.val().level+1 == '20') {
            
               message.member.roles.add(role4)
            
            } 
          
          db.ref(`Levels-e-XP/Server-ID/${message.guild.id}/Membro/${message.author.id}/Levels`).update({ xp: 0, level: SystemXP.val().level + 1 });
          
          message.channel.send(`Parabens, ${message.author} Voce upou para o level ${SystemXP.val().level + 1}`)
          
        } else {
          
         db.ref(`Levels-e-XP/Server-ID/${message.guild.id}/Membro/${message.author.id}/Levels`).update({ xp: SystemXP.val().xp + gerarXP })
          
        }
      }
  })
      
    }
  
    if(!premium) {
  
  db.ref(`Levels-e-XP/Server-ID/${message.guild.id}/Membro/${message.author.id}/Levels`).once('value').then(async function(SystemXP){
    
      if (SystemXP.val() == null) {
        
         db.ref(`Levels-e-XP/Server-ID/${message.guild.id}/Membro/${message.author.id}/Levels`).set({ xp: 0, level: 1 })
        
      } else {
        
        let gerarXP = Math.floor(Math.random() * 20) + 10;
        
        if (SystemXP.val().level*100 <= SystemXP.val().xp) {
          
      let cargo1 = await db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-5`).once('value')
          cargo1 = cargo1.val()
          
      let cargo2 = await db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-10`).once('value')
          cargo2 = cargo2.val()
      
      let cargo3 = await db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-15`).once('value')
          cargo3 = cargo3.val()
      
      let cargo4 = await db.ref(`Configurações/Cargo-Levels/${message.guild.id}/Level-20`).once('value')
          cargo4 = cargo4.val()
      
          
          let role = await message.guild.roles.cache.get(cargo1)
          
            if (SystemXP.val().level+1 == '5') {
            
               message.member.roles.add(role);
            
             }
          
           let role2 = await message.guild.roles.cache.get(cargo2)
         
            if (SystemXP.val().level+1 == '10') {
            
               message.member.roles.add(role2)
            
            } 
          
           let role3 = await message.guild.roles.cache.get(cargo3)
         
            if (SystemXP.val().level+1 == '15') {
            
               message.member.roles.add(role3)
            
            } 
          
           let role4 = await message.guild.roles.cache.get(cargo4)
         
            if (SystemXP.val().level+1 == '20') {
            
               message.member.roles.add(role4)
            
            } 
          
          db.ref(`Levels-e-XP/Server-ID/${message.guild.id}/Membro/${message.author.id}/Levels`).update({ xp: 0, level: SystemXP.val().level + 1 });
          
          message.channel.send(`Parabens, ${message.author} Voce upou para o level ${SystemXP.val().level + 1}`)
          
        } else {
          
         db.ref(`Levels-e-XP/Server-ID/${message.guild.id}/Membro/${message.author.id}/Levels`).update({ xp: SystemXP.val().xp + gerarXP })
          
        }
      }
  })
      
}*/
    
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  
  if (command) {
    
    command.run(client, message, args)
    
  } else {
    
    message.channel.send(':x: | Comando inexistente!')
    
  }
  
})

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

client.login(config.token)