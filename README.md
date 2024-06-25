# Advanced Discord.js Bot/Client Handler

## Links 
**Documentation**: https://docs.sxssy.xyz (is slighlty different, but most of the code is explained and used here!) <br>
**Inspired by**: https://youtube.com/channel/mrJAwesomeyt

## Features
- **Easy Command Handling**: Create commands with ease using the `commands` folder.
- **Event Handling**: Handle Discord.js events with ease using the `Event Handler` folder.
- **Configurable**: Configure your bot using the `.env` file.
- **Interaction Logs**: Automatically logs every interaction in the `logs` folder by creating txt files.
- **Developer Only Commands**: Create commands only for developers.
- **Token generator**: Purpose? I dont know. I just added it. You can use it to generate a token for several things.
- **Shard Manager**: Dont know how sharding works? You dont need to.
- **Express Handler**: Handle your express sites easily in the `express` folder.
- **Component Handler**: Handle components easily.
- **Error Handling**: The error will be shown in the console, but your discord bot wont shutdown.
- **Customizable**: You can customize almost everything in this bot.
- **Support for Slash Commands**: Supports slash commands with the `@discordjs/rest` package.
- **Support for Developer Guild only commands**: Creates commands only visible in the developer guild. Folder: `src/dev`
- **Support for Custom Commands**: Create custom commands within every server. Includes a check if the command exists in the bot or the server. Folder: `src/custom-commands`
- **Multiple Databases Supported**: Choose your database in `database.config.json` and fill out the required information to connect. (MariaDB, MongoDB, Postgres, Redis, SLQITE)
- **Shard Manager**: Automatically adds sharding system to your discord bot.
- **Autocomplete Support**: Want to use autocomplete? We added the backend logic for it.
= **TypeScript Support**: Supports JavaScript and TypeScript!

## The .env File
```js
TOKEN= //Your Discord Bot Token
ID= //Your Discord Client/Bot ID
SHARDS= //The amount of shards you want to create
MONGODBURI= //your MongoDB URL
PORT= //the port the express server will use (can be empty, we have a default port ;-;)
DEVELOPERS= [ "USERID" ] //an array full with the developer discord user IDs
DEVCHANNEL= //The channel ID where logs should be sent
```