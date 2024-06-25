const fs = require("fs");
const path = require("path");

/**
 * Generates a random token and logs it to a file if requested.
 * @param {number} length - Length of the token to generate.
 * @param {boolean} log - Whether to log the token to a file.
 * @param {Object} options - Character set options.
 * @returns {string} - The generated token.
 */
async function generatetoken(length, log, options = { uppercase: true, lowercase: true, numbers: true, specialChars: true }) {
    const {
        uppercase,
        lowercase,
        numbers,
        specialChars
    } = options;

    let charSet = "";
    if (lowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) charSet += "0123456789";
    if (specialChars) charSet += "._-&$#@!?%";

    let token = "";
    console.log(`[ TOKEN GEN ] Generating Token with length: ${length} || Logged: ${log}`)
    for (let i = 0; i < length; i++) {
        token += charSet[Math.floor(Math.random() * charSet.length)];
    }
    console.log(`[ TOKEN GEN ] Token generated! ${token}`)

    if (log) {
        console.log("[ TOKEN GEN ] Writing to tokens.txt...");
        const date = new Date().toISOString(); // Better readable timestamp
        const content = `\n${date} \nTOKEN = ${token}\n`;
        const fileName = "tokens.txt";
        const filePath = path.join(__dirname, '../', fileName);

        // Append file instead of writing/overwriting
        fs.appendFile(filePath, content, (err) => {
            if (err) {
                console.error('[ TOKEN GEN ] Error writing to tokens.txt', err);
                return;
            }
            console.log(`[ TOKEN GEN ] tokens.txt updated! Token ID: ${date}`);
        });
    }

    return token;
}

module.exports = { generatetoken };
