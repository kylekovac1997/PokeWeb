const axios = require('axios');

exports.getPokemon = async (req, res) => {
  try {
    const { offset} = req.query;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=30`);
    const posts = response.data;
    
    res.json(posts);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
