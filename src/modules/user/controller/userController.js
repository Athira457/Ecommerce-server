// userConroller
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';

class UserController {
    //signup page working
    async signUp(req, res){
        const { name, email, password } = req.body;
        try {    
            const user = new User({ name, email, password });
            await user.save();
        
            return res.status(201).json({ success: true, message: 'User created successfully' });
          } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error' });
          }
    }

    async login(req, res){
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });   
            if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
            }
            const isMatch = await bcrypt.compare(password, user.password);    
            if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
            }
            const token = jwt.sign(
            { userId: user._id },
            "key",
            { expiresIn: '1h' }
            );

            return res.status(200).json({
            success: true,
            user,
            token, 
            message: 'Login successful'
            });
            
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }

}
export default new UserController();
