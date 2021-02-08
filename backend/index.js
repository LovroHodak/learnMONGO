require('dotenv').config()
require('./config/db.config')

const express = require('express')
const app = express()


//ENABLE FRONT+BACK
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

//REQ.BODY + BODY.PARSER => to get serverside console.log!! ALWAYS
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Use body parser. To be able parse post request information
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //crucial for post requests from client


//ROUTES
const productsRoutes = require('./routes/products.routes')
app.use('/api', productsRoutes)

const authorsRoutes = require('./routes/authors.routes')
app.use('/api', authorsRoutes)

//LISTEN
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}, dirname ${__dirname}`))