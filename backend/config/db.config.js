require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/mongoDBcompass', {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB mongoDBcompass connected')
    })
    .catch((err) => {
        console.log('Error: ', err)
})