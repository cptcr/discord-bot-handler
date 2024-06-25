const express = require("express");
const fs = require("fs")

async function handleExpress() {
    // Express Setup
    const app = express();
    const PORT = process.env.PORT || 3129;

    app.set('view engine', 'ejs');
    
    // Load Express
    fs.readdirSync('./express').forEach((dir) => {
        fs.readdirSync(`./express/${dir}`).forEach((handler) => {
            require(`./express/${dir}/${handler}`)(app);
        }); 
    });

    app.listen(PORT,  'localhost', () => console.log("[ EXPRESS] Server running on port ", `${PORT}`));
}

module.exports = { handleExpress }