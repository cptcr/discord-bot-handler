# Advanced Discord.js Bot/Client Handler

This advanced Discord.js Bot/Client Handler simplifies the development of robust Discord bots through a structured and feature-rich framework. It includes easy-to-use handlers for commands, events, interactions, and more, providing a solid foundation for building sophisticated bots with both custom and developer-only commands.

## Documentation and Inspiration

- **Documentation**: Visit our [comprehensive documentation](https://docs.sxssy.xyz) for detailed guidance on implementing and customizing the bot. The documentation might differ slightly but remains a reliable resource for most code implementations.
- **Inspiration**: This project is inspired by content from [MrJAwesome's YouTube channel](https://youtube.com/channel/mrJAwesomeyt), which provides valuable insights into Discord bot development.

## Requirements

| Name            | Minimum                    | Recommended                 |
|-----------------|----------------------------|-----------------------------|
| discord.js      | 14.0.0                     | 14.5.3                      |
| NodeJS          | 14.0.0                     | 16.0.0                      |
| CPU             | 1 GHz single-core          | 2 GHz dual-core             |
| RAM             | 512 MB                     | 1 GB                        |
| Internet Latency| < 200 ms                   | < 100 ms                    |
| Bandwidth       | 1 Mbps download/upload     | 5 Mbps download/upload      |
| Storage         | 1 GB free space            | 2 GB free space             |
| Operating System| Windows, macOS, Linux      | Windows, macOS, Linux       |
| Network         | 1 Mbps download/upload     | 5 Mbps download/upload      |
| Database        | Not required (basic bots)  | MongoDB, MySQL, PostgreSQL  |
| Dependencies    | Basic npm packages         | Managed npm dependencies    |
| Environment     | Local development setup    | Separate dev/prod environments |
| Backup          | Manual backups             | Automated backup solutions  |
| Security        | Basic firewall rules       | Regular updates and security patches |

## Key Features

### Command Handling
- **Easy Command Handling**: Streamline command creation using the dedicated `commands` folder.
- **Event Handling**: Efficient management of Discord.js events through the `Event Handler` folder.
- **Support for Slash Commands**: Incorporate slash commands with ease using the `@discordjs/rest` package.
- **Developer Guild Commands**: Deploy commands exclusively in the developer guild (folder: `src/dev`).
- **Custom Commands**: Facilitate server-specific custom commands and validate their existence (folder: `src/custom-commands`).
- **User Installed Commands**: Utilize Discord's newest features for user-installed commands.

### Configuration and Logging
- **Configurable Settings**: Utilize the `.env` file for essential configurations like tokens and database connections.
- **Interaction Logs**: Automatic logging of interactions within the `logs` folder, generating text files for record-keeping.
- **Error Handling**: Robust error management that logs issues to the console without halting the bot.

### Advanced Features
- **Developer Only Commands**: Restrict certain commands to bot developers for testing and debugging.
- **Token Generator**: Generate tokens for various applications; specific usage is open to developer discretion.
- **Express Handler**: Simplify the management of Express websites within the `express` folder.
- **Component Handling**: Efficient management of interactive components.
- **Multiple Databases Support**: Connect to a database of your choice (MariaDB, MongoDB, Postgres, Redis, SQLite) through `database.config.json`.
- **Sharding**: Integrate a sharding system to scale the bot across multiple servers.
- **Autocomplete**: Implement autocomplete functionality in commands.
- **TypeScript Support**: Full support for both JavaScript and TypeScript, enhancing development flexibility.

## Configuration Details (.env File)

```js
TOKEN= //Your Discord Bot Token
ID= //Your Discord Client/Bot ID
SHARDS= //Number of shards to deploy
MONGODBURI= //Your MongoDB URL
PORT= //Port for the Express server (default provided if left empty)
DEVELOPERS= ["USERID"] //Array of developer Discord user IDs
DEVCHANNEL= //Channel ID for sending logs
DEVGUILDID= "1254387341100060684" //Guild ID for deploying developer-only commands
```

## Setup Instructions

1. **Clone the Repository**: Begin by cloning the repository to your local machine or server.
2. **Install Dependencies**: Run `npm install` to install all required dependencies.
3. **Configure the .env File**: Fill in the `.env` file with your bot's specific details like token, database URI, and others.
4. **Run the Bot**: Start your bot using `node src/index.js` or your preferred command as configured in your package.json.

## Community and Support

Join our community on Discord to get support, share ideas, and collaborate with other developers. You can also contribute to the project by submitting pull requests or reporting issues on our GitHub repository.

## Potential Use Cases

- **Gaming Communities**: Enhance engagement with features like game integrations, matchmaking, and more.
- **Educational Platforms**: Use the bot to manage virtual classrooms, distribute assignments, and facilitate learning through quizzes and interactive sessions.
- **Business Operations**: Automate tasks, handle customer inquiries, and streamline communication within teams.

## Getting Started

To get started with this bot handler, clone the repository, configure the .env file as described, and review the documentation to understand the framework structure and feature set. This handler is designed to accommodate both beginner and advanced developers with its extensive customization capabilities and built-in functionality.

## Why Use discord.js Directly Instead of the Sapphire Framework?

Discord.js is a powerful library for interacting with the Discord API, and while frameworks like Sapphire offer additional features and abstractions, there are several reasons why developers might choose to use discord.js directly:

### Direct Control and Flexibility
- **Lower Level Control**: Using discord.js directly provides finer control over bot behavior and interactions. This direct interaction with the API allows for more custom and complex features tailored to specific needs.
- **Flexibility**: Developers can design the architecture and features of their bots without the constraints or assumptions made by higher-level frameworks.

### Learning and Understanding
- **Fundamental Understanding**: Working directly with discord.js encourages a deeper understanding of the Discord API and bot mechanics. This knowledge is invaluable for debugging and extending bot functionality.
- **Community Resources**: discord.js has a vast and active community, with extensive documentation and examples. This makes it easier for new developers to learn and solve issues independently.

### Performance Considerations
- **Reduced Overhead**: Using discord.js without additional frameworks can reduce computational overhead, potentially leading to faster response times and lower resource consumption.
- **Simplicity**: For smaller or less complex bots, the additional features offered by frameworks like Sapphire might not justify the extra layer of complexity and the performance implications.

### Customization
- **Custom Implementations**: Direct use of discord.js allows developers to implement custom solutions that might not be supported or easily achievable within the confines of a framework.
- **Selective Feature Integration**: Developers can choose to integrate only the features they need, potentially leading to a more optimized and efficient bot.

### Dependency and Maintenance
- **Fewer Dependencies**: Operating directly with discord.js means fewer dependencies and potential points of failure related to external frameworks.
- **Up-to-date with Discord API**: Direct use ensures that the latest features of the Discord API are accessible as soon as they are supported by discord.js, without waiting for the framework to catch up.

## Conclusion

Choosing between discord.js and a framework like Sapphire depends on the specific needs and skills of the developer. Those seeking direct control, a deep understanding of Discord bot workings, and high customization might prefer using discord.js directly. Meanwhile, developers looking for quicker deployments and less boilerplate code might opt for frameworks like Sapphire.

## Quick Docs

- **Autocomplete Setup**: [https://docs.sxssy.xyz/commands/autocomplete](https://docs.sxssy.xyz/commands/autocomplete)
- **Creating Commands**: [https://docs.sxssy.xyz/commands/creating-commands](https://docs.sxssy.xyz/commands/creating-commands)
- **Creating Developer Commands**: [https://docs.sxssy.xyz/commands/creating-developer-commands](https://docs.sxssy.xyz/commands/creating-developer-commands)
- **Creating Custom Bot Functions**: [https://docs.sxssy.xyz/building-the-bot/custom-bot-functions](https://docs.sxssy.xyz/building-the-bot/custom-bot-functions)
- **Database Integration `MongoDB`**: [https://docs.sxssy.xyz/database/mongodb-connection](https://docs.sxssy.xyz/database/mongodb-connection)
- **User Installed Commands**: [https://docs.sxssy.xyz/commands/creating-user-installed-commands](https://docs.sxssy.xyz/commands/creating-user-installed-commands)
