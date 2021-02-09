const express = require("express");
const router = express.Router();
const AuthorModel = require("../models/AuthorRef.model");

router.get("/authors", (req, res) => {
  console.log("req.body GET", req.body);
  AuthorModel.find()
    .then((authors) => {
      res.status(200).json(authors);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    });
});



module.exports = router;
