const { Router } = require("express");
const { routesFromCategory } = require("./category.routes");
const { routesFromTrainee } = require("./trainee.routes");
const { routesFromCompany } = require("./company.routes");
const { routesFromContract } = require("./contract.routes");
const { routesFromUsuario } = require("./usuario.routes");

const routes = Router();

routes.use("/api", [
  routesFromCategory(),
  routesFromTrainee(),
  routesFromCompany(),
  routesFromContract(),
  routesFromUsuario(),
]);

module.exports = routes;
