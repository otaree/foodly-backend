const Category = require('../models/Category');

class CategoryController {
  /**
   * gets all categories
   * 
   * @param {*} req
   * @param {*} res
   */
  async getAll (req, res) {
    try {
      const categories = await Category.find({});
      res.json(categories);
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  }
}

module.exports = CategoryController;