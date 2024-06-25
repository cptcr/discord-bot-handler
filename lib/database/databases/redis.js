const redis = require('redis');

exports.initialize = (uri) => {
    const client = redis.createClient({
        url: uri
    });

    client.on('error', (err) => console.error('Redis Client Error', err));

    client.connect()
        .then(() => console.log('Connected to Redis'))
        .catch(err => console.error('Could not connect to Redis', err));

    return client;
};
