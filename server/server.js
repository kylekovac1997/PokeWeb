const express = require('express');
const session = require('express-session');
require("dotenv").config()
const app = express();
const port = process.env.PORT || 4000;
const AllPokemonApi = require('./Routes/PokeBoxApi');
const LoginApi = require("./Routes/LoginApi")
const logoutApi = require("./Routes/logoutApi")
const signupApi = require("./Routes/signupApi")
const cors = require('cors');
const { connectToMongoDb } = require("./database/mongoDB.js");
connectToMongoDb();

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET_KEY, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true for HTTPS
  })
);

// Api to grab pokemon data {gifs, images, names, hp, moves, etc } 
app.use('/api', AllPokemonApi);
// Api that handles login routes
app.use('/api', LoginApi);
// Api tha handles logout routes
app.use('/api', logoutApi);
// Api tha handles signup routes
app.use('/api', signupApi);

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
