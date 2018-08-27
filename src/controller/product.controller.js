const Product = require('../models/Product');

class ProductController {
  /**
   * gets all products
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getAll (req, res) {
    let { limit, page } = req.query;
    limit = !limit ? 3 : parseInt(limit);
    page = !page ? 0 : page;
    
    try {
      const products = await Product.find({}).populate('category').limit(limit).skip(limit * page);
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
   * gets single product by id
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async get (req, res) {
    const { id } = req.params;

    try {
      const product = await Product.findOne({ _id: id });
      res.json(product);
    } catch (e) {
      console.error(e);
      res.status(400).end();
    } 
  }
}

module.exports = ProductController;