const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    devOnly: true,
    data: new SlashCommandBuilder()
    .setName("dev-only-command")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDescription("This is a example code for a developer only command"),
    async execute (interaction) {
    }
}