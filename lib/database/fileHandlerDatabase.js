const dbTemplate = {
    'mongodb': `const mongoose = require('mongoose');\nexports.initialize = (config, callback) => { /* MongoDB init code */ };`,
    'mariadb': `const mysql = require('mysql2');\nexports.initialize = (config, callback) => { /* MariaDB init code */ };`,
    // Add templates for other databases similarly
};

function createDBFile(dbType) {
    if (!dbTemplate[dbType]) {
        console.error('No template available for the specified database type.');
        return;
    }
    fs.writeFile(dbFiles[dbType], dbTemplate[dbType], err => {
        if (err) {
            console.error('Failed to create the database file:', err);
            return;
        }
        console.log(`Database file created for ${dbType}`);
    });
}

function deleteDBFile(dbType) {
    if (fs.existsSync(dbFiles[dbType])) {
        fs.unlink(dbFiles[dbType], err => {
            if (err) {
                console.error('Failed to delete the database file:', err);
                return;
            }
            console.log(`Database file deleted for ${dbType}`);
        });
    }
}
