const { Events, EmbedBuilder } = require("discord.js");
const lib = require("../../../lib");

module.exports = async (client) => {
    client.on(Events.InteractionCreate, async (interaction) => {
        const logged = lib.writeLogs
    
        const channel = client.channels.fetch(process.env.DEVCHANNEL.toString());
    
        const embed = new EmbedBuilder({
            title: "Interaction Logged!",
            description: `${interaction}`,
            fields: [
                { name: "User:", value: `${interaction.user}`, inline: false},
                { name: "Username:", value: `${interaction.user.username}`, inline: false},
                { name: "User ID:", value: `${interaction.user.id}`, inline: false},
                { name: "Server:", value: `${interaction.guild.name}`, inline: false},
                { name: "Server ID:", value: `${interaction.guild.id}`, inline: false},
                { name: "Log File Path:", value: `${logged.writeFilePath}`}
            ]
        }).setColor("Orange").setTimestamp()
    
        try {
            await channel.send({ embeds: [embed] });
        } catch (error) {
            console.error(error);
        }
    })
}