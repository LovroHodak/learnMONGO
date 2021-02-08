const Author = require("./models/AuthorRef.model");
require("./config/db.config");

Author.insertMany(([
    {
      name: 'Lovro',
      age: 30,
      books: [
        {
          title: 'Ne mislim',
          pages: 7
        }
      ]
    },
    {
      name: 'Jan',
      age: 30,
      books: [
        {
          title: 'Cirkus',
          pages: 43
        }
      ]
    },
    {
      name: 'Nejc',
      age: 31,
      books: [
        {
          title: 'Jaz in kolo',
          pages: 256
        }
      ]
    }
  ]))
.then(() => {
  console.log('Authors added')
  process.exit()
})
.catch((err) => {
  console.log('Problems with adding: ', err)
})
