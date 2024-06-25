const mysql = require('mysql2');

exports.initialize = (config, client) => {
    const connection = mysql.createConnection(config);
    connection.connect(error => {
        if (error) {
            console.error('Could not connect to MariaDB', error);
            return;
        }
        console.log('Successfully connected to MariaDB.');
        client.db = connection; // Attach connection to client
    });
};
