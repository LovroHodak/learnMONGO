const express = require("express");
const router = express.Router();
const ActorModel = require("../models/Actor.model");
const MovieModel = require("../models/Movie.model");

// GET all
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
//GET one
router.get("/actors/:id", (req, res) => {
  ActorModel.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});
// POST
router.post("/addActor", (req, res) => {
  console.log('req.params: ', req.params)
  console.log('req.body: ', req.body);
  const { name, lastname, age } = req.body;
  ActorModel.create({ name: name, lastname: lastname, age: age })
    .then((response) => {
      console.log("added", response);
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});
//PATCH
router.patch("/actors/:id", (req, res) => {
  console.log("req.params: ", req.params);
  let id = req.params.id;
  const { name, lastname, age } = req.body;
  ActorModel.findByIdAndUpdate(id, {
    $set: { name: name, lastname: lastname, age: age },
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

// POPULATEDmOVIES
//GET all
router.get("/populatedMovies", (req, res) => {
  console.log("req.body GET", req.body);
  MovieModel.find()
    .populate("star")
    .then((movies) => {
      console.log("Those are movies: ", movies);
      res.status(200).json(movies);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    });
});

module.exports = router;
