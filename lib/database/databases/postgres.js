const { Pool } = require('pg');

exports.initialize = (connectionString) => {
    const pool = new Pool({ connectionString });

    pool.connect()
        .then(() => console.log('Connected to PostgreSQL'))
        .catch(err => console.error('Could not connect to PostgreSQL', err));
};
