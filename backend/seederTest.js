const Product = require("./models/Product.model");
require("./config/db.config");

const productData = require("./data/shopItems");

let playStation = productData[0].name

/* let id = "6021540fbbf45347404e5448"; */


Product.bulkWrite([
  {
    updateOne: {
      filter: { name: playStation },
      update: { $set: { countInStock: 1000 } },
    },
  },
  {
    updateOne: {
      filter: { name: "Jabolko 12" },
      update: { $set: { price: 1000 } },
    },
  },
])
  .then(() => {
    console.log("MANY FILTERED - bulkwrite ");
  })
  .catch(() => {
    console.log("smt didnt work");
  });
/*
Product.findByIdAndUpdate(id, { $inc: { countInStock: -1 } })
  .then(() => {
    console.log("ONE with spec ID has decriesed by -1");
  })
  .catch(() => {
    console.log("smt didnt work");
  }); */

/* Product.updateMany( {price: 10} , { $set: { countInStock: 666 } })
.then(() => {
    console.log("MANY that has same key:value pair, set stock: 666");
  })
  .catch(() => {
    console.log("smt didnt work");
  }); */

/* Product.updateMany( { $set: { countInStock: 100 } })
.then(() => {
    console.log("ALL, set stock: 100");
  })
  .catch(() => {
    console.log("smt didnt work");
  }); */


