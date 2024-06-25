const { ShardingManager } = require("discord.js")

async function shardManager(shards, token) {
    const manager = new ShardingManager('./src/index.js', {
        token: token,
        totalShards: parseInt(shards)
    });

    manager.on('shardCreate', shard => console.log("[ CLIENT ] Launched Shard: ", `${shard.id + 1}`));
    manager.spawn().catch(console.error);
}

module.exports = { shardManager }