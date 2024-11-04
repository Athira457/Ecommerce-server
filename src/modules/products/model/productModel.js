import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    pid:{
    type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: false,
    },
  });
  
  const Product = mongoose.model("Product", productSchema);
  export default Product;