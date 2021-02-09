const mongoose = require("mongoose");
const Schema = mongoose.Schema

const SuperHeroSchema = new Schema({
    id: Number,
  name: String,
  strength: Number,
  health: Number
});

const SuperHero = mongoose.model("superHero", SuperHeroSchema);

module.exports = SuperHero;