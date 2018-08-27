require('dotenv').config();
require('../db/mongoose');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Types = require('mongoose').Types;
const faker = require('faker');

const categories = [
  {
    title: 'North Indian',
    _id: Types.ObjectId()
  },
  {
    title: 'South Indian',
    _id: Types.ObjectId()
  },
  {
    title: 'Local',
    _id: Types.ObjectId()
  },
  {
  title: 'Chinese',
  _id: Types.ObjectId()
  }
];

const populate = async () => {
  for (let i = 0; i < categories.length; i++) {
    await new Category(categories[i]).save();
  }
  for (let i = 0; i < 20; i++) {
    await new Product({
      category: categories[Math.floor(Math.random() * categories.length)],
      title: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      img: 'https://source.unsplash.com/random/800x600',
      price: faker.random.number()
    }).save();
  }
};

populate()
  .then(() => console.log('POPULATED'))
  .catch(console.error)
