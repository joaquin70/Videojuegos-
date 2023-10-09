const { Router } = require("express");
const { getGenres } = require("../handlers/genhan");
const router = Router();

router.get("/", getGenres);

module.exports = router;