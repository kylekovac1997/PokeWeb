
const express = require('express');
const router = express.Router();
const AllPokemon = require('../Controllers/AllPokemon');

router.get('/Pokedex', AllPokemon.getPokemon);

module.exports = router;
