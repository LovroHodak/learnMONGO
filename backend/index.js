require('dotenv').config()
require('./config/db.config')

const express = require('express')
const app = express()

const mongoose = require('mongoose')
//ensure database is connected
var path = require('path');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(
  session({
    secret: 'my-secret-weapon',
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000, //60 sec * 60 min * 24hrs = 1 day (in milliseconds)
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      //time to live (in seconds)
      ttl: 60 * 60 * 24,
      autoRemove: 'disabled',
    }),
  })
);



//A library that helps us log the requests in the console
const logger = require('morgan');
app.use(logger('dev'));


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



const cookieParser = require('cookie-parser');
app.use(cookieParser());

//ROUTES
const productsRoutes = require('./routes/products.routes')
app.use('/api', productsRoutes)

const authorsRoutes = require('./routes/authors.routes')
app.use('/api', authorsRoutes)

const actorsRoutes = require('./routes/actors.routes')
app.use('/api', actorsRoutes)

const superHeroRoutes = require('./routes/superHero.routes')
app.use('/api', superHeroRoutes)

const authRoutes = require('./routes/auth.routes')
app.use('/api', authRoutes);

const stripeRoutes = require('./routes/stripe.routes')
app.use('/api', stripeRoutes);

//LISTEN
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}, dirname ${__dirname}`))