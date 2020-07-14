const Discord = require('discord.js')

exports.run = (sla, message, args) => {
  
  if(!args[0]){
    
    return message.channel.send({ embed: { color: 0xff6666, description: "Você não indicou nenhuma mensagem." } })

    const morse = require('morse')
    
    const text = morse.decode(args.join(" "))
    
    ? morse.decode(args.join(" "))
    : morse.encode(args.join(" ")).toLowerCase();
  
  
  message.channel.send(text)
    
  }
  
}
exports.help = {
  name: 'morse',
  aliases: ['']
}