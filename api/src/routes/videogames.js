const { Router } = require("express");

const {
  getVideogameHandler,
  getVideogamesHandler,
  createVideogameHandler,
} = require("../handlers/videogamesHandler.js");

const router = Router();

const validate = (req, res, next) => {
  const { name, platforms, rating } = req.body;

  if (!platforms) res.status(400).json({ error: "Missing platforms" });
  if (!name) res.status(400).json({ error: "Missing name" });
  if (!rating) res.status(400).json({ error: "Missing rating" });

  next();
};

router.get("/", getVideogameHandler);
router.get("/:id", getVideogameHandler);
router.post("/", validate, createVideogameHandler);

module.exports = router;