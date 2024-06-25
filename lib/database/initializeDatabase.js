const mongoConnector = require('./databases/mongo');
const mariadbConnector = require('./databases/mariadb');
const sqliteConnector = require('./databases/sqlite');
const redisConnector = require('./databases/redis');
const postgresConnector = require('./databases/postgres');
const config = require('../../database.config.json'); 

function initializeDatabase() {
    const dbType = config.database.type;
    const dbConfig = config.database[dbType];

    switch (dbType) {
        case 'mongodb':
            mongoConnector.initialize(dbConfig.uri);
            break;
        case 'mariadb':
            mariadbConnector.initialize(dbConfig);
            break;
        case 'sqlite':
            sqliteConnector.initialize(dbConfig.path);
            break;
        case 'redis':
            redisConnector.initialize(dbConfig.uri);
            break;
        case 'postgres':
            postgresConnector.initialize(dbConfig.connectionString);
            break;
        default:
            throw new Error('Unsupported database type');
    }
}

module.exports = { initializeDatabase }