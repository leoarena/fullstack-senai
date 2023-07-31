const {
  createOneCompany,
  listCompanies,
  listOneCompany,
} = require("../controllers/company.controller");
const { auth } = require("../middlewares/auth");

const { Router } = require("express");

class CompanyRouter {
  routesFromCompany() {
    const companyRoutes = Router();
    companyRoutes.post("/createOneCompany", auth, createOneCompany);
    companyRoutes.get("/listCompanies", auth, listCompanies);
    companyRoutes.get("/listOneCompany", auth, listOneCompany);

    return companyRoutes;
  }
}

module.exports = new CompanyRouter();
