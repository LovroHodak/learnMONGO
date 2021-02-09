const Movie = require("./models/Movie.model");
require("./config/db.config");
const mongoose = require("mongoose");
const Schema = mongoose.Schema

Movie.insertMany([
  {
    title: 'Pulp Fiction',
    year: 1999,
    star: '6021755e8853145168f1e6b8'
  },
  {
    title: 'Braveheart',
    year: 1995,
    star: '6021755e8853145168f1e6b7'
  },
  {
    title: 'Bourne',
    year: 2004,
    star: '6021755e8853145168f1e6b9'
  },
])
  .then(() => {
    console.log("Movies added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding: ", err);
  });