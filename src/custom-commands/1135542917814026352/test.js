const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("test").setDescription("test"),

    async execute (interaction) {
        return await interaction.reply({
            content: "custom commands working!",
            ephemeral: true
        })
    }
}