const express = require("express");
const router = express.Router();
const ActorModel = require("../models/Actor.model");
const MovieModel = require("../models/Movie.model");

router.get("/actors", (req, res) => {
  console.log("req.body GET", req.body);
  ActorModel.find()
    .then((actors) => {
      res.status(200).json(actors);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    });
});

router.get("/movies", (req, res) => {
  console.log("req.body GET", req.body);
  MovieModel.insertMany([
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
    .then((movies) => {
        console.log('Those are movies: ', movies)
      res.status(200).json(movies);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    });
});

router.get("/populatedMovies", (req, res) => {
    console.log("req.body GET", req.body);
    MovieModel.find().populate('star')
      .then((movies) => {
          console.log('Those are movies: ', movies)
        res.status(200).json(movies);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      });
  });

module.exports = router;
