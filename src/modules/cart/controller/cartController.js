import Cart from "../model/cartModel.js";

class CartController {
    async AddToCart(req, res){
        const { pid, uid, productname, items, Quantity, amount } = req.body;
        try {    
            const cart= new Cart({ pid, uid, productname, items, Quantity, amount });
            await cart.save();
        
            return res.status(201).json({ success: true, message: 'item add to cart' });
          } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error' });
          }       
    }

    async GetAllCart(req, res){
        try {
            const cart = await Cart.find();
            return res.json(cart);
          } catch (error) {
            console.error('Error fetching Cart:', error);
            return res.status(500).send('Server Error');
          }
    }

    async cartTotal(req,res){
        try{
            let cart= await Cart.find();          
            const TotalItems= cart.Quantity;
            console.log("cart:",cart)
            const CartAmount= parseInt(cart.amount);
            const TotalAmount= CartAmount * TotalItems;
            console.log("total items:",parseInt(TotalAmount));
        }catch{
            return res.status(500).send('Server Error');
        }
    }

    //Get one extra product if purchase cool water
    async getOneBuyOne(req, res){
        try{
            let isPid= await Cart.findOne({});
            if (isPid.pid==='PF1') { 
                const item = parseInt(isPid.items) + 1;
                return res.status(400).json({ message: 'You got extra product',item });
              }
              else{
                return res.status(400).json({ message: 'product not fount' });
              }
        }catch{
            return res.status(500).send('Server Error');
        }
    }
    
    async CardWideDiscount(req, res){
        try{
            let cart= await Cart.findOne({});
            console.log(cart);
            if (cart.amount > '500') {
                const discount = total-500;
                return res.status(400).json({ message: 'You got 500 discount', discount });
              }
            else{
                return res.status(400).json({ message: 'purchased under 500'});
            }
        }catch{
            return res.status(500).send('Server Error');
        }
    }

    // if purchased more than 5 get discount 5%
    async LoyaltyDiscount(req, res){
        try{
            let cart= await Cart.find({});
            if (totalItems >= "5") {
                const discount = totalPrice-(totalPrice*(5/100));
                return res.status(400).json({ message: 'You got 5% discount', discount });
              }
            else{
                return res.status(400).json({ message: 'invalid'});
            }
        }catch{
            return res.status(500).send('Server Error');
        }
    }

    async ExclusiveTier(req, res){
        const { amount } = req.body;
        try{
            let totalPrice= await Cart.findOne({amount});
            if (totalPrice >= "5000") {
                const discount = totalPrice-(totalPrice*(10/100));
                return res.status(400).json({ message: 'You got 10% discount', discount });
              }
            else{
                return res.status(400).json({ message: 'invalid'});
            }
        }catch{
            return res.status(500).send('Server Error');
        }
    }

    async SeasonalDiscount(req, res){
        try{
            let cart= await Cart.findOne({});
            const totalPrice = cart.totalPrice;
            if (cart.pid == 'PF6') {
                const discount = totalPrice-(totalPrice*(25/100));
                return res.status(400).json({ message: 'You got 25% discount', discount });
              }
            else{
                return res.status(400).json({ message: 'invalid'});
            }
        }catch{
            return res.status(500).send('Server Error');
        }
    }
 

}
export default new CartController();