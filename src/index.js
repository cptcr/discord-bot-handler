const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, Events, Partials } = require(`discord.js`);
const fs = require('fs');
const path = require("path");

const client = new Client({ 
    intents: [
      //Guild
          GatewayIntentBits.Guilds, 
          GatewayIntentBits.GuildMessages, 
          GatewayIntentBits.GuildMessageReactions,
          GatewayIntentBits.GuildVoiceStates,
          GatewayIntentBits.GuildInvites,
          GatewayIntentBits.GuildModeration,
          GatewayIntentBits.GuildMessagePolls,
          GatewayIntentBits.GuildScheduledEvents,
          GatewayIntentBits.GuildEmojisAndStickers,
          GatewayIntentBits.GuildMembers,
          GatewayIntentBits.GuildIntegrations,
      //Direct
          GatewayIntentBits.DirectMessages,
          GatewayIntentBits.DirectMessageReactions,
          GatewayIntentBits.DirectMessageTyping,
      //Message
          GatewayIntentBits.MessageContent,
      //Automod
          GatewayIntentBits.AutoModerationConfiguration,
          GatewayIntentBits.AutoModerationExecution,
  
          
    ],
    partials: [
        Partials.Channel, 
        Partials.Reaction, 
        Partials.Message
    ],
    allowedMentions: {
    parse: [`users`, `roles`],
    repliedUser: true,
    }
}); 

process.on('unhandledRejection', (reason, promise) => {
    console.error("[ ERROR ] Unhandled Rejection at:", promise, "reason:", reason);
});
  
process.on('uncaughtException', (err) => {
    console.error("[ ERROR ] Uncaught Exception:", err);
});
  
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.error("[ ERROR ] Uncaught Exception Monitor:", err, "Origin:", origin);
});

client.setMaxListeners(99999999999);

const lib = require("../lib/lib-export");

client.commands = new Collection();

require('dotenv').config();

//Load Client Stuff
const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");
const devCommandFolders = fs.readdirSync("./src/dev");
const customCommandFolders = fs.readdirSync("./src/custom-commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.handleDevCommands(devCommandFolders, "./src/dev");
    client.handleGuildCommands("./src/custom-commands");
    client.login(process.env.TOKEN.toString())
})();

// Load handlers
fs.readdirSync('./src/Event Handler').forEach((dir) => {
    fs.readdirSync(`./src/Event Handler/${dir}`).forEach((handler) => {
        require(`./Event Handler/${dir}/${handler}`)(client);
        getEventsStatus = true
    }); 
});

//Writing all interactions
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

//Handling Components
client.on(Events.InteractionCreate, async (interaction) => {
    let componentType;
  
    try {
      if (interaction.isButton()) {
        componentType = 'Buttons';
      } else {
        if (interaction.customId.startsWith('channel')) {
          componentType = 'ChannelSelect';
        } else if (interaction.customId.startsWith('role')) {
          componentType = 'RoleSelect';
        } else if (interaction.customId.startsWith('string')) {
          componentType = 'StringSelect';
        } else if (interaction.customId.startsWith('user')) {
          componentType = 'UserSelect';
        }
      }
  
    } catch (error) {
      return;
    }
  
    if (componentType) {
      try {
        const filePath = path.join(__dirname, 'Component_Handler', componentType, `${interaction.customId}.js`);
        const componentModule = require(filePath);
  
        if (!componentModule || !filePath ) { return; } else { await componentModule.run(interaction); }
      } catch (error) {
        console.log(`[COMPONENT HANDLER] ERROR \n${error.stack()}`)
      }
    }
});

//lib.connectToMongoDB(process.env.MONGODBURI);
lib.handleExpress();
lib.getSystemInfo();
lib.shardManager(process.env.SHARDS, process.env.TOKEN);