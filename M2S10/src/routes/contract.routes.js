const {
  createOneContract,
  listContracts,
  listOneContract,
} = require("../controllers/contract.controller");
const { Router } = require("express");
const { auth } = require("../middlewares/auth");

class ContractRouter {
  routesFromContract() {
    const contractRoutes = Router();
    contractRoutes.post("/createOneContract", auth, createOneContract);
    contractRoutes.get("/listContracts", auth, listContracts);
    contractRoutes.get("/listOneContract/:id", auth, listOneContract);

    return contractRoutes;
  }
}

module.exports = new ContractRouter();
