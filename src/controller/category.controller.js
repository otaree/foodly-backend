const Category = require('../models/Category');
const Product = require('../models/Product');

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

  /**
   * gets all products from a category
   * 
   * @param {*} req
   * @param {*} res
   */
  async get (req, res) {
    const { id } = req.params;
    let { limit, page } = req.query;
    limit = !limit ? 3 : parseInt(limit);
    page = !page ? 0 : page;

    try {
      const products = await Product.find({ category: id }).populate('category').limit(limit).skip(limit * page);
      res.json({
        products,
        next: limit === products.length ? true : false
      });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  }

  /**
   * returns products by category name
   * @param {*} req 
   * @param {*} res 
   */
  async getByName (req, res) {
    console.log(req.params);
    const { title } = req.params;
    let { limit, page } = req.query;
    limit = !limit ? 3 : parseInt(limit);
    page = !page ? 0 : page;

    try {
      const category = await Category.findOne({ title })
      if (!category) throw "Category Not Found";
      const id = category._id;
      const products = await Product.find({ category: id }).limit(limit).skip(limit * page);
      res.json({
        products,
        next: limit === products.length ? true : false
      });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  }
}

module.exports = CategoryController;