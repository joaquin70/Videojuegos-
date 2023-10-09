const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genreRouter = require("./genres");
const videogamesRoutes = require("./videogames");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/genres", genreRouter);
router.use("/videogames", videogamesRoutes);

module.exports = router;
