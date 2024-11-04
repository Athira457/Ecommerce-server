// /index.js
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import connectDB from '../server/src/config/database/dbConnect.js';
import cors from 'cors';
import Routes from './src/route/routes.js'; 

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,POST,PUT,DELETE',
  credentials: true 
}));

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

// Connect to MongoDB
connectDB();

// Routes
app.use(Routes);


// Starting the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



