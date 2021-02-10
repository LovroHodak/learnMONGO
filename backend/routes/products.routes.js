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

  //GET one
router.get("/products/:id", (req, res) => {
  console.log("req.params GET", req.params);
  let createdId = req.params.id;
  ProductModel.findOne(createdId)
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
router.post("/products", (req, res) => {
  console.log("req.params POST", req.params);
  console.log("req.body POST", req.body);
  const { name, description, price, countInStock, imageUrl } = req.body;
  ProductModel.create({
    name: name,
    description: description,
    price: price,
    countInStock: countInStock,
    imageUrl: imageUrl
  })
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
router.patch("/products/:id", (req, res) => {
  console.log("req.params PATCH", req.params);
  console.log("req.body PATCH", req.body);
  const { countInStock } = req.body;
  let id = req.params.id
  ProductModel.findByIdAndUpdate(
    id,
    { $set: { countInStock: countInStock } }
  )
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
//DELETE
router.delete("/products/:id", (req, res) => {
  console.log("req.params DELETE", req.params);
  ProductModel.findByIdAndDelete(req.params.id)
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




module.exports = router;
