const mongooose = require("mongoose");
const Schema = mongooose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongooose.model("Book", bookSchema);
