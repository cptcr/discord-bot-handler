const { model, Schema } = require("mongoose");

const schema = new Schema({
    User: String
});

module.exports = model("example", schema);