const sqlite3 = require('sqlite3').verbose();

exports.initialize = (path) => {
    let db = new sqlite3.Database(path, (err) => {
        if (err) {
            console.error('Could not connect to SQLite database', err);
            return;
        }
        console.log('Connected to the SQLite database.');
    });

    return db;
};
