//the filename MUST be the customId of the component (doesnt matter which folder)

module.exports = {
    async run(interaction) {
        return await interaction.reply({
            content: "You stink!",
            ephemeral: true
        })
    }
}