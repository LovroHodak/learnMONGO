const express = require("express");
const router = express.Router();
const ProductModel = require("../models/Product.model");

router.get("/products", (req, res) => {
    console.log('req.body GET', req.body)
    ProductModel.find()
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      });
  });




module.exports = router;
