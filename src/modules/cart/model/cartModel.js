import mongoose from 'mongoose';

// User Schema
const cartSchema = new mongoose.Schema({
  pid: {
    type: String,
  },
  uid: {
    type: String,
  },
  productname:{
    type: String,
  },
  items: {
    type: String,
  },
  Quantity:{
    type: String,
  },
  amount:{
    type: String,
  },
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
