const fs = require("fs");
const path = require("path");
const lib = require('./lib-export');

async function writeLogs(content) {
    let writeFilePath = path.join(__dirname, 'logs', `${lib.generatetoken(8, false)}.txt`)

    fs.writeFile(writeFilePath, content, (err) => {
        if (err) {
            console.error("Error writing Logs:", err);
        }
    })

    return writeFilePath;
}

module.exports = { writeLogs }