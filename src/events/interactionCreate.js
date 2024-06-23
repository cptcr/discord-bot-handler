const { Interaction } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return
        
        try{
            if (command.devOnly && !process.env.DEVELOEPRS.includes(interaction.user.id)) {
                return await interaction.reply({
                    content: "Sorry, this command is for developers only!",
                    ephemeral: true
                })
            } else {
                command.execute(interaction, client)
            }
        } catch (error) {
            console.log(error);
            await interaction.reply({
                content: 'There was an error while executing this command!', 
                ephemeral: true
            });
        } 

    },
    


};