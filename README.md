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
- **MongoDB Connection**: Easy setup for a BSON Database.
- **Error Handling**: The error will be shown in the console, but your discord bot wont shutdown.

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