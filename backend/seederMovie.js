const Movie = require("./models/Movie.model");
require("./config/db.config");
const mongoose = require("mongoose");
const Schema = mongoose.Schema

Movie.insertMany([
  {
    title: 'Pulp Fiction',
    year: 1999,
    star: [{ type: Schema.Types.ObjectId, ref: 'actor' }]
  },
  {
    title: 'Braveheart',
    year: 1995,
    star: [{ type: Schema.Types.ObjectId, ref: 'actor' }]
  },
  {
    title: 'Bourne',
    year: 2004,
    star: [{ type: Schema.Types.ObjectId, ref: 'actor' }]
  },
])
  .then(() => {
    console.log("Movies added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding: ", err);
  });