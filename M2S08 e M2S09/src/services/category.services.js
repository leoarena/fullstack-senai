const { Category } = require("../models/category");

class CategoryServices {
  async listCategoriesService(limit, offset) {
    const list = await Category.findAll({ limit, offset });
    return list;
  }
}

module.exports = new CategoryServices();
