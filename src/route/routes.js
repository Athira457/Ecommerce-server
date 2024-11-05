import express from 'express';
import ProductController from '../modules/products/controller/productController.js';
import UserController from '../modules/user/controller/userController.js';
import CartController from '../modules/cart/controller/cartController.js';

const router = express.Router();

//Authentication routes
router.post('/signup',UserController.signUp);
router.post('/login',UserController.login);

// product routes
router.post("/productRegister", ProductController.createProducts);
router.get("/productShow", ProductController.viewAllProducts);
router.get("/getProducts", ProductController.getAllProducts);
router.get("/productById/:pid", ProductController.viewProductById);
router.get('/productId/:id', ProductController.getProductById);

//cart routes
router.post("/addCart", CartController.AddToCart);
router.get("/GetAllCart", CartController.GetAllCart);
router.get("/getOneBuyOne", CartController.getOneBuyOne);
router.get("/CardDiscount", CartController.CardWideDiscount);
router.get("/Loyalty", CartController.LoyaltyDiscount);
router.get("/Exclusive", CartController.ExclusiveTier);
router.get("/cartTotal", CartController.cartTotal);

export default router;