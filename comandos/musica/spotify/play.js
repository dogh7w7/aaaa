const Discord = require('discord.js')
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: 'd281bf799c9a40ccae0b4e454e3067f8',
  secret: '49277e1838984f8cb34407347d147738'
});
    
exports.run = async (client, message, args) => {
  
  spotify.search({ type: 'track', query: args.slice(0).join(" ") })  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
  
  spotify.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx').then(function(data) {
    console.log(data); 
  })
}
exports.help = {
  name: 'spotify',
  aliases: []
}