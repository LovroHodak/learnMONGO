const express = require("express");
const router = express.Router();
const SuperHeroModel = require("../models/SuperHero.model");

// GET all
router.get("/superHeros", (req, res) => {
    SuperHeroModel.find()
      .then((superHeros) => {
        res.status(200).json(superHeros);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      });
  });
//GET one
router.get("/superHeros/:id", (req, res) => {
  console.log('req.params GET', req.params)
  let createdId = req.params.id
  SuperHeroModel.findOne({id: createdId})
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
router.post("/superHeros", (req, res) => {
    const { id, name, strength, health } = req.body;
    SuperHeroModel.create({ id: id, name: name, strength: strength, health:health })
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
//PATCH
router.patch("/superHeros/:id", (req, res) => {
  console.log('req.params PATCH', req.params)
  console.log('req.body PATCH', req.body)
  const {strength, health} = req.body;
  SuperHeroModel.findOneAndUpdate({id: req.params.id}, {$set: {strength: strength, health: health}})
  .then((response) => {
    res.status(200).json(response)
})
/*   let id = req.body._id
  const {strength, health} = req.body;
  console.log(strength)
  SuperHeroModel.findByIdAndUpdate(id, {$set: {strength: strength, health: health}})
  .then((response) => {
    res.status(200).json(response)
}) */
.catch((err) => {
    console.log(err)
    res.status(500).json({
         error: 'Something went wrong',
         message: err
    })
}) 
})


module.exports = router;
