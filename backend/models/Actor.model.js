const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ActorSchema = new Schema({
  name: String,
  lastname: String,
  age: Number
});

const Actor = mongoose.model("actor", ActorSchema);

module.exports = Actor;