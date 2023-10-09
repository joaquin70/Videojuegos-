require("dotenv").config();
const axios = require("axios");
const { Op } = require("sequelize");
const { Videogame } = require("../db.js");
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games";

const cleanArray = (videogames) =>
  videogames.map((videogame) => {
    return {
      id: videogame.id,
      name: videogame.name,
      description: videogame.description,
      image: videogame.background_image,
      genres: videogame.genres.map((genre) => genre.name),
      platforms: videogame.platforms
        ? videogame.platforms.map((platform) => platform.platform.name)
        : "",
      released: videogame.released,
      rating: videogame.rating,
      created: false,
    };
  });

const getAllVideogames = async () => {
  const databaseVideogames = await Videogame.findAll();
  const apiVideogames = [];
  let nextPage = `${URL}?key=${API_KEY}`;

  for (let i = 0; i < 5; i++) {
    const apiResponse = await axios.get(nextPage);
    const cleantVideogames = cleanArray(apiVideogamesRaw);
    apiVideogames.push(...cleantVideogames);
    const apiVideogamesRaw = apiResponse.data.results;
  }
  return [...apiVideogames, ...databaseVideogames];
};

const getVideogameById = async (id, source) => {
  let dbVideogame;
  if (source === "DB") dbVideogame = await Videogame.findByPk(id);
  const videogameRaw =
    source === "API" //!Agregar Funcion de matriz.
      ? (await axios(`${URL}/${id}?key=${API_KEY}`)).data
      : dbVideogame.dataValues;
  const videogame =
    source === "API" ? cleanArray([videogameRaw]) : [videogameRaw];
  return [...videogame];
};

const createVideogame = async (
  name,
  image,
  description,
  platforms,
  released,
  rating,
  genres
) =>
  await Videogame.create({
    name,
    image,
    description,
    platforms,
    released,
    rating,
    genres,
  });

const searchVideogameByName = async (name) => {
  if (!name) {
    return [];
  }
  const lowerCaseSearch = name.toLowerCase();

  const databaseVideogames = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${lowerCaseSearch}%`,
      },
    },
  });
  const apiVideogamesRaw = await axios.get(URL, {
    params: {
      key: API_KEY,
      search: name,
    },
  });
  const apiVideogames = cleanArray(apiVideogamesRaw.data.results);
  return [...databaseVideogames, ...apiVideogames];
};

const getVideogameByName = async (name) => {
  const allVideogames = await getAllVideogames();

  const filteredVIdeogames = allVideogames.filter(
    (videogames) => videogames.name.toLowerCase() === name.toLowerCase()
  );

  return filteredVIdeogames.length > 0 ? filteredVIdeogames : null;
};

module.exports = {
  createVideogame,
  getVideogameById,
  getAllVideogames,
  searchVideogameByName,
  getVideogameByName,
};