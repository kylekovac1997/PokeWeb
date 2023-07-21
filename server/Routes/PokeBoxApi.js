
const express = require('express');
const router = express.Router();
const AllPokemon = require('../controllers/AllPokemon');

router.get('/Pokedex', AllPokemon.getPokemon);

module.exports = router;
