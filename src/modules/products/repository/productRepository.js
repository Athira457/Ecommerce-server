import Product from "../model/productModel.js";

class ProductRepository {
  async createProducts(productData) {
    const product = new Product(productData);
    return await product.save();
  }
  
  async viewAllProducts() {
    const product = Product.find();
    return product;
  }

  async viewProductById(pid){
    try {
        const product = await Product.findById(pid);
        return product;
    }catch{
        console.error('Error fetching movie:', error);
        res.status(500).json({ message: 'Server error' });
    }
  }
  

}

export default new ProductRepository();