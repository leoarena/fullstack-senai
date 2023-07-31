const { Router } = require("express");
const {
  createOneCategory,
  listCategories,
} = require("../controllers/category.controller");
const { auth } = require("../middlewares/auth");

class CategoryRoutes {
  routesFromCategory() {
    const categoryRoutes = Router();
    categoryRoutes.post("/createOneCategory", auth, createOneCategory);
    categoryRoutes.get("/listCategories/:limit/:offset", auth, listCategories);
    return categoryRoutes;
  }
}

module.exports = new CategoryRoutes();
