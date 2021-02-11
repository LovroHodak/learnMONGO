const express = require("express");
const router = express.Router();
const ProductModel = require("../models/Product.model");

router.get("/products", (req, res) => {
  console.log("req.body GET", req.body);
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
    imageUrl: imageUrl,
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
  let id = req.params.id;
  ProductModel.findByIdAndUpdate(id, { $set: { countInStock: countInStock } })
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
//PATCH
router.patch("/products", (req, res) => {
  let updatedProducts = req.body.changedItemz
  let productzz = updatedProducts.map((count) => {
    return {stock: count.countInStock, name: count.name}
  })

  let pro0 = productzz[0]
  let pro1 = productzz[1]
  let pro2 = productzz[2]
  let pro3 = productzz[3]
  let pro4 = productzz[4]
  let pro5 = productzz[5]

  console.log('pro0, pro1, pro2, pro3, pro4, pro5', pro0, pro1, pro2, pro3, pro4, pro5)

  ProductModel.bulkWrite([
    {
      updateOne: {
        filter: { name: pro0.name },
        update: { $set: { countInStock: pro0.stock } },
      },
    },
    {
      updateOne: {
        filter: { name: pro1.name },
        update: { $set: { countInStock: pro1.stock } },
      },
    },
    {
      updateOne: {
        filter: { name: pro2.name },
        update: { $set: { countInStock: pro2.stock } },
      },
    },
    {
      updateOne: {
        filter: { name: pro3.name },
        update: { $set: { countInStock: pro3.stock } },
      },
    },
    {
      updateOne: {
        filter: { name: pro4.name },
        update: { $set: { countInStock: pro4.stock } },
      },
    },
    {
      updateOne: {
        filter: { name: pro5.name },
        update: { $set: { countInStock: pro5.stock } },
      },
    },
  ])
    .then((response) => {
      console.log("MANY FILTERED - bulkwrite ", response);
        ProductModel.find()
        .then((products) => {
          console.log("MANY FILTERED - updateMany ");
          res.status(200).json(products);
        })
        .catch(() => {
        console.log("smt didnt work");
      });
    })
    .catch(() => {
      console.log("smt didnt work");
    });


/*   ProductModel.updateMany({ $set: { countInStock: pro0.stock } })
    .then(() => {
      console.log("MANY FILTERED - updateMany ");
      ProductModel.find()
        .then((products) => {
          console.log("MANY FILTERED - updateMany ");
          res.status(200).json(products);
        })
        .catch(() => {
        console.log("smt didnt work");
      });
      
    })
    .catch(() => {
      console.log("smt didnt work");
    }); */

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
