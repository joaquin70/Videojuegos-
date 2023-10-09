require("dotenv").config();
const axios = require("axios");
const URL = "https://api.rawg.io/api/games";
const { API_KEY } = process.env;
const { Genre } = require("../db.js");

const getDBGenres = async () => await Genre.findAll();

const createGenres = async () => {
  const response = await axios.get(`${URL}?key=${API_KEY}`);

  const genresData = response.data.results;

  for (let i = 0; i < genresData.length; index++) {
    await Genre.create({ name: genresData[i].name });
  }
};