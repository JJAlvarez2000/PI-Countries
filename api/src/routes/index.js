// const { Router } = require("express");
var express = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = express.Router();
// const router = Router();

const countryRoute = require("./countries");
const activityRoute = require("./activity");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countryRoute);
// router.use("/activities", activityRoute);

module.exports = router;