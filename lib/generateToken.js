const fs = require("fs");
const path = require("path");

async function generatetoken(length, log) {
    let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._-&$#@!?%";
    let tk = "";

    for (let i = 0; i < length; i++) {
        tk += a[Math.floor(Math.random() * a.length)];
    }

    if (log) {
        const content = `\n${Date.now()} \nTOKEN = ${tk}\n`,
              fileName = "tokens.txt",
              filePath = path.join(__dirname, 'lib', fileName)

        fs.writeFile(filePath, content, (err) => {
            if (err) {
                console.error('Error writing tokens.txt', err)
            }
        })
    }

    return tk;
}

module.exports = { generatetoken }