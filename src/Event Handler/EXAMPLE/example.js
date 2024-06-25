const { Events  } = require("discord.js");

module.exports = async (client) => {
    client.on(Events.InteractionCreate, async interaction => {
        //handle stuff in here
    })
}