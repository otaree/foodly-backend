require('dotenv').config();
require('../db/mongoose');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Types = require('mongoose').Types;

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
    title: 'Dessert',
    _id: Types.ObjectId()
  }
];


const northIndian = [
  {
    category: categories[0]._id,
    title: "Aloo Gobi",
    description: "Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.",
    img: "https://i.imgur.com/TKoqTB0.png",
    price: 4500
  },
  {
    category: categories[0]._id,
    title: "Baati",
    description: "Ghee (clarified butter), wheat flour",
    img: "https://i.imgur.com/jMU95gc.png",
    price: 5000
  },
  {
    category: categories[0]._id,
    title: "Bhatura",
    description: "Bread. All-purpose flour",
    img: "https://i.imgur.com/ZtCRAOI.png",
    price: 3000
  },
  {
    category: categories[0]._id,
    title: "Biryani",
    description: "Main or side dish. Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.",
    img: "https://i.imgur.com/mAyx6Tw.png",
    price: 12000
  },
  {
    category: categories[0]._id,
    title: "Butter Chicken",
    description: "Also known as murgh mahal",
    img: "https://i.imgur.com/e8GbGjM.png",
    price: 11000
  },
  {
    category: categories[0]._id,
    title: "Chaat",
    description: "Street food usually containing a potato patty fried in oil, topped with sweet yogurt, and other sauces, spices",
    img: "https://i.imgur.com/v0KR3js.png",
    price: 5000
  },
  {
    category: categories[0]._id,
    title: "Chapati",
    description: "Bread. Whole wheat flour",
    img: "https://i.imgur.com/BoPv4gK.png",
    price: 1000
  },
  {
    category: categories[0]._id,
    title: "Chicken Tikka",
    description: "Chicken with spices served on a skewer",
    img: "https://i.imgur.com/ZjV1PRk.png",
    price: 10000
  },
  {
    category: categories[0]._id,
    title: "Tandoori Chicken",
    description: "Tandoori chicken as a dish originated in the Punjab before the independence of India and Pakistan.",
    img: "https://i.imgur.com/zlnWnEK.png",
    price: 15000
  },
];

const southIndian = [
  {
    category: categories[1]._id,
    title: "Avial",
    description: "Coconut paste, curd mixed with vegetables and some spices.",
    img: "https://i.imgur.com/Y6zcXq1.png",
    price: 5000
  },
  {
    category: categories[1]._id,
    title: "Bajji",
    description: "Vegetable or onion fritters",
    img: "https://i.imgur.com/9lPG7gj.png",
    price: 5000
  },
  {
    category: categories[1]._id,
    title: "Bonda",
    description: "Snack. Potatoes, gram flour.",
    img: "https://i.imgur.com/CyR2Ij6.png",
    price: 5000
  },
  {
    category: categories[1]._id,
    title: "Chicken 65",
    description: "Popular deep fried chicken preparation. Chicken, onion, ginger",
    img: "https://i.imgur.com/93xGiuj.png",
    price: 12000
  },
  {
    category: categories[1]._id,
    title: "Dosa",
    description: "Pancake/Hopper. Ground rice, urad dal",
    img: "https://i.imgur.com/1jW2RtV.png",
    price: 8000
  },
  {
    category: categories[1]._id,
    title: "Idiappam",
    description: "Steamed rice noodles / vermicelli. Ground rice",
    img: "https://i.imgur.com/W44Bpzc.png",
    price: 4000
  },
  {
    category: categories[1]._id,
    title: "Idli",
    description: "Steamed cake of fermented rice and pulse flour. Rice, urad dal",
    img: "https://i.imgur.com/4YuTvEI.png",
    price: 4000
  },
  {
    category: categories[1]._id,
    title: "Masala Dosa",
    description: "Dosa with masala and potato.",
    img: "https://i.imgur.com/7xkHfBW.png",
    price: 4000
  },
  {
    category: categories[1]._id,
    title: "Parotta",
    description: "Layered kerala parotta made with maida and dalda.",
    img: "https://i.imgur.com/zwj9Xfl.png",
    price: 3000
  },
  {
    category: categories[1]._id,
    title: "Vada",
    description: "Savory donut. Urad dal.",
    img: "https://i.imgur.com/b8eX0vL.png",
    price: 3000
  }
]

const dessert = [
  {
    category: categories[2]._id,
    title: "Barfi",
    description: "Sweet",
    img: "https://i.imgur.com/1CEWq34.png",
    price: 9000
  },
  {
    category: categories[2]._id,
    title: "Gajar ka halwa",
    description: "Carrots, milk, sugar, ghee, cashews and raisins",
    img: "https://i.imgur.com/LdulgeZ.png",
    price: 9000
  },
  {
    category: categories[2]._id,
    title: "Chocolate cake",
    description: "Chocolate cake or chocolate gâteau (from French: gâteau au chocolat) is a cake flavored with melted chocolate, cocoa powder, or both.",
    img: "https://i.imgur.com/2c4SL7i.png",
    price: 50000
  },
  {
    category: categories[2]._id,
    title: "Ice cream",
    description: "ce cream (derived from earlier iced cream or cream ice[1]) is a sweetened frozen food typically eaten as a snack or dessert. It is usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavors. It is typically sweetened with sugar or sugar substitutes.",
    img: "https://i.imgur.com/W4dP24a.png",
    price: 9000
  },
  {
    category: categories[2]._id,
    title: "Gulab jamun",
    description: "Fried milk balls soaked in sweet syrup, such as rose syrup or honey.",
    img: "https://i.imgur.com/Tt36nSL.png",
    price: 3000
  },
  {
    category: categories[2]._id,
    title: "Jalebi",
    description: "Dough fried in a coil shape dipped in sugar syrup, often taken with milk, tea, yogurt, or lassi.",
    img: "https://i.imgur.com/PBDnoKb.png",
    price: 3000
  },
  {
    category: categories[2]._id,
    title: "Kheer",
    description: "A rice pudding made with milk, rice, sugar and dried fruits",
    img: "https://i.imgur.com/384BBm7.png",
    price: 6000
  },
  {
    category: categories[2]._id,
    title: "Lassi",
    description: "Yogurt, milk, nuts, can be made with mango (mango lassi)",
    img: "https://i.imgur.com/fOJU64N.png",
    price: 6000
  },
];


const populate = async () => {
  for (let i = 0; i < categories.length; i++) {
    await new Category(categories[i]).save();
  }
  for (let i = 0; i < northIndian.length; i++) {
    await new Product(northIndian[i]).save()
  }
  for (let i = 0; i < southIndian.length; i++) {
    await new Product(southIndian[i]).save()
  }
  for (let i = 0; i < dessert.length; i++) {
    await new Product(dessert[i]).save()
  }
};

populate()
  .then(() => console.log('POPULATED'))
  .catch(console.error)