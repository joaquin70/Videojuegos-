//Importaciones
const {
    createVideogame,
    getVideogameById,
    getAllVideogames,
    searchVideogameByName,
    getVideogameByName,
  } = require("../controllers/vgcont");
  
  const getVideogamesHandler = async (req, res) => {
    const { name } = req.query;
  
    const results = name
      ? await searchVideogameByName(name)
      : await getAllVideogames();
  
    try {
      res.status(200).json(results);
    } catch (error) {
      res
        .status(500)
        .json({ message: "There was an error while fetching the videogames " });
    }
  };
  
  const getVideogameHandler = async (req, res) => {
    const { id } = req.params;
  
    const source = isNaN(id) ? "DB" : "API";
    try {
      const videogame = await getVideogameById(id, source);
  
      res.status(200).json(videogame);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const createVideogameHandler = async (req, res) => {
    try {
      const { name, image, description, platforms, released, rating, genres } =
        req.body;
  
      const existingVideogame = await getVideogameByName(name);
      if (existingVideogame !== null) {
        throw new Error("The videogame already exists");
      }
      const newVideogame = await createVideogame(
        name,
        image,
        description,
        platforms,
        released,
        rating,
        genres
      );
      res.status(201).json(newVideogame);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getVideogamesHandler,
    getVideogameHandler,
    createVideogameHandler,
  };