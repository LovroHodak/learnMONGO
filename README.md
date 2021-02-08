1. created empty folder "" and open in VSC
2. npm init -y
3. mkdir frontend (creates frontend inside "learnDB")
4. mkdir backend (creates backend inside "learnDB")
5. npm i express mongoose dotenv
6. npm i --save-dev nodemon concurrently (so i will be able to run front and back with one command)

7. cd frontend
8. npx create-react-app . (creates react app in that folder)

in backend 
9. create index.js (require('dotenv').config(), const express, const app, const PORT, app.listen)

10. global file .env (PORT=5000, MONGO_URI=)
11. global file .gitignore ()

12. node backend/index.js (to check if server is running)

SERVER SHOULD WORK!!

1. a) go to fronted folder-.gitignore and copy paste everything in our GLOBAL .gitignore

b) replace 
(/node_modules) 
with 
(node_modules
node_modules/)

2. cd frontend
3. Remove-Item -Recurse -Force .git (deletes .git)
4. ls (to see that .git is deleted)
5. fizically delete .gitignore from frontend

6. cd .. (navigate to global "learnDB")
7. git init (creates global git repo --it also shadows node_modules)

8. go to global .gitignore and under .DS_Store add .env
9. go to global package.json replace in "scripts"
("test": "echo \"Error: no test specified\" && exit 1")
with
(    "start": "node backend/index.js",
    "server": "nodemon backend/index.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\"")

in global
10. npm run dev

FULLSTACK SHOULD WORK!! 

BACKEND
1. cd backend
2. create folders (config, models, data)
3. in config folder create db.js (fill it up!!!!)
4. in index.js copy paste (require('./config/db'))

5. node index.js

DATABASE SHOULD WORK!!

BACKEND
1. in models folder create product.model.js (fill it up!!!!)
2. in data folder create shopItems.js (fill it up!!!!)
3. in backend create seederScript.js file (fill it up!!!!)
4. in package.json add another script ("data:import": "node backend/seederScript")

5. npm run data:import

ITEMS SHOULD BE IN YOUR DATABASE!!

BACKEND
1. folder routes inside file products.routes.js (fill it up!!!!)

2. go to index.js 
a) npm i body-parser cors
b) add cors and body parser
c) add routes

FRONTEND
3. clean src (delete: setupTests, reportWebVitals, App.test.js, logo, )
4. cd frontend
5. npm i react-router-dom axios
6. go to index.js and import {browserRouter}
7. go to App.js and import {useState, useEffect} {Switch, Route, withRouter} and axios (export default withRouter(App))
8. useEffect - with axios fetch data and setState to response.data
9. create components folder and inside Home component
10. in App create Switch and inside put Route with exact path which renders Home and sends state to it

11. npm run dev

YOUR WEBSITE WORKS!!