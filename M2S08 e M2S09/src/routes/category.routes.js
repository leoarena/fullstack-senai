const { Router } = require("express");
const {
  createOneCategory,
  listCategories,
} = require("../controllers/category.controller");

class CategoryRoutes {
  routesFromCategory() {
    const categoryRoutes = Router();
    categoryRoutes.post("/createOneCategory", createOneCategory);
    categoryRoutes.get("/listCategories/:offset/:limit", listCategories);
    return categoryRoutes;
  }
}

module.exports = new CategoryRoutes();
