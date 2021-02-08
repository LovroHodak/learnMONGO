const Actor = require("./models/Actor.model");
require("./config/db.config");

Actor.insertMany([
  {
    name: "Mel",
    lastname: "Gibson",
    age: 62,
  },
  {
    name: "John",
    lastname: "Travolta",
    age: 68,
  },
  {
    name: "Matt",
    lastname: "Damon",
    age: 48,
  },
])
  .then(() => {
    console.log("Actors added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding: ", err);
  });
