const productData = require("./data/shopItems");
const Product = require("./models/Product.model");
require("./config/db.config");

Product.insertMany(productData)
.then(() => {
  console.log('Products added')
  process.exit()
})
.catch((err) => {
  console.log('Problems with adding: ', err)
})

