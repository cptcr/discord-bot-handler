const mongoose = require('mongoose');

exports.initialize = (config, client) => {
    mongoose.connect(config.uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
            client.db = mongoose; // Attach mongoose to client
        })
        .catch(err => console.error('Could not connect to MongoDB', err));
};
