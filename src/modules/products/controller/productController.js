import ProductRepository from '../repository/productRepository.js';
import ProductValidation from '../requests/productValidation.js';
import Product from "../model/productModel.js";

class ProductController {
    async createProducts(req, res) {
      const { error } = ProductValidation.register.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });
  
      try {
        const product = await ProductRepository.createProducts(req.body);
        res.status(201).json(product);
      } catch (err) {
        res.status(500).json({ error: "Error registering product" });
      }
    }

    async viewAllProducts(){
        try {
            const product = await ProductRepository.viewAllProducts(req.body);
            res.status(201).json(product);
          } catch (err) {
            res.status(500).json({ error: "Error registering product" });
          }
    }

    async getAllProducts(req, res){
      try {
        const product = await Product.find();
        res.json(product);
      } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Server Error');
      }
    };

    async viewProductById(pid){
        try {
            const product = await ProductRepository.viewProductById(pid);
            res.status(201).json(product);
          } catch (err) {
            res.status(500).json({ error: "Error registering product" });
          }
    }

    //Get product by id
    async  getProductById (req, res){
      const { id } = req.params;
      try {
        const product = await Product.findById(id);
        if (!product) {
          return res.status(404).json({ message: 'product not found' });
        }
        res.json(product);
      } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error' });
      }
    }
  }
  
  export default new ProductController();