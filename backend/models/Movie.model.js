const mongoose = require("mongoose");
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  title: String,
  year: Number,
  star: { type: Schema.Types.ObjectId, ref: 'actor' }
});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;