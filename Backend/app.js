const dotenv = require('dotenv');
dotenv.config(); 
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Good Morning');
});

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports = app;


app.js