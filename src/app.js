require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
require('./db/mongoose');

const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

const port = process.env.PORT || 3000;

const app = express();



app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => res.send('Hello World'));
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);


app.listen(port, () => console.log(`Server is running on port ${port}`));
