const mongooose = require("mongoose");
const Schema = mongooose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongooose.model("Author", authorSchema);
