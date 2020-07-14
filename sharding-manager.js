const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./index.js', { token: 'NzE5MzExNDIzNzM3NjkyMjUy.XwIHsw.H9zvcStYDvKCUth3-QBP1f5fN14' });

manager.spawn(4);
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));