async function connectToMongoDB(url) {
    try {
        //mongoose.set('strictQuery', false);
        mongoose.connect(process.env.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .catch(err => console.error('Could not connect to MongoDB:', err));
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); 
    } 
}

module.exports = { connectToMongoDB }