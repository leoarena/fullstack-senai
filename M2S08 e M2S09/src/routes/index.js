const { Router } = require("express");
const { routesFromCategory } = require("./category.routes");
const { routesFromTrainee } = require("./trainee.routes");

const routes = Router();
routes.use("/api", [routesFromCategory(), routesFromTrainee()]);

module.exports = routes;
