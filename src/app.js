require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport')
require('./db/mongoose');

const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const orderRoutes = require('./routes/orders');
const AuthRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart')

// auth
const Authentication = require('./authentication')

const port = process.env.PORT || 3000;

const app = express();
const authentication = new Authentication();
const authRoutes = new AuthRoutes(app, passport);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use('signup', authentication.signUp())
passport.use('login', authentication.login())
passport.use('jwt', authentication.isAuthenticate())

authRoutes.routes();
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/orders', passport.authenticate('jwt', { session: false }), orderRoutes);
app.use('/user', passport.authenticate('jwt', { session: false }), userRoutes);
app.use('/cart', passport.authenticate('jwt', { session: false }), cartRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
