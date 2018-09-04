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
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Aloo_gobi.jpg",
    price: 4500
  },
  {
    category: categories[0]._id,
    title: "Baati",
    description: "Ghee (clarified butter), wheat flour",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/53/Baati.jpg",
    price: 5000
  },
  {
    category: categories[0]._id,
    title: "Bhatura",
    description: "Bread. All-purpose flour",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Bhatura.jpg",
    price: 3000
  },
  {
    category: categories[0]._id,
    title: "Biryani",
    description: "Main or side dish. Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/48/India_food.jpg",
    price: 12000
  },
  {
    category: categories[0]._id,
    title: "Butter Chicken",
    description: "Also known as murgh mahal",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Chicken_makhani.jpg",
    price: 11000
  },
  {
    category: categories[0]._id,
    title: "Chaat",
    description: "Street food usually containing a potato patty fried in oil, topped with sweet yogurt, and other sauces, spices",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Delhi_Chaat_with_saunth_chutney.jpg",
    price: 5000
  },
  {
    category: categories[0]._id,
    title: "Chapati",
    description: "Bread. Whole wheat flour",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Delhi_Chaat_with_saunth_chutney.jpg",
    price: 1000
  },
  {
    category: categories[0]._id,
    title: "Chicken Tikka",
    description: "Chicken with spices served on a skewer",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/83/Chicken_tikka_by_fatima.jpg",
    price: 10000
  },
  {
    category: categories[0]._id,
    title: "Tandoori Chicken",
    description: "Tandoori chicken as a dish originated in the Punjab before the independence of India and Pakistan.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/A_piece_of_a_tandoori_chicken.JPG",
    price: 15000
  },
];

const southIndian = [
  {
    category: categories[1]._id,
    title: "Avial",
    description: "Coconut paste, curd mixed with vegetables and some spices.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sambar%26Avial.jpg",
    price: 5000
  },
  {
    category: categories[1]._id,
    title: "Bajji",
    description: "Vegetable or onion fritters",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Chilli_Bites_%28Bhaji%29.jpg",
    price: 5000
  },
  {
    category: categories[1]._id,
    title: "Bonda",
    description: "Snack. Potatoes, gram flour.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bonda2.jpg",
    price: 5000
  },
  {
    category: categories[1]._id,
    title: "Chicken 65",
    description: "Popular deep fried chicken preparation. Chicken, onion, ginger",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Chicken_65.jpg",
    price: 12000
  },
  {
    category: categories[1]._id,
    title: "Dosa",
    description: "Pancake/Hopper. Ground rice, urad dal",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dosa-chutney-sambhar.jpg",
    price: 8000
  },
  {
    category: categories[1]._id,
    title: "Idiappam",
    description: "Steamed rice noodles / vermicelli. Ground rice",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/Idiyappam.jpg",
    price: 4000
  },
  {
    category: categories[1]._id,
    title: "Idli",
    description: "Steamed cake of fermented rice and pulse flour. Rice, urad dal",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Idli_Sambar.JPG",
    price: 4000
  },
  {
    category: categories[1]._id,
    title: "Masala Dosa",
    description: "Dosa with masala and potato.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Masala_Dosa_with_Aloo_masala.jpg",
    price: 4000
  },
  {
    category: categories[1]._id,
    title: "Parotta",
    description: "Layered kerala parotta made with maida and dalda.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Parotta.jpg",
    price: 3000
  },
  {
    category: categories[1]._id,
    title: "Vada",
    description: "Savory donut. Urad dal.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Vada_2.jpg",
    price: 3000
  }
]

const dessert = [
  {
    category: categories[2]._id,
    title: "Barfi",
    description: "Sweet",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/72/Barfi-Diwali_sweet.jpg",
    price: 9000
  },
  {
    category: categories[2]._id,
    title: "Gajar ka halwa",
    description: "Carrots, milk, sugar, ghee, cashews and raisins",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Carrot_gajar_halwa_with_kheer_India_Sweets.jpg",
    price: 9000
  },
  {
    category: categories[2]._id,
    title: "Chocolate cake",
    description: "Chocolate cake or chocolate gâteau (from French: gâteau au chocolat) is a cake flavored with melted chocolate, cocoa powder, or both.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Chocolate_fudge_cake.jpg",
    price: 50000
  },
  {
    category: categories[2]._id,
    title: "Ice cream",
    description: "ce cream (derived from earlier iced cream or cream ice[1]) is a sweetened frozen food typically eaten as a snack or dessert. It is usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavors. It is typically sweetened with sugar or sugar substitutes.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg",
    price: 9000
  },
  {
    category: categories[2]._id,
    title: "Gulab jamun",
    description: "Fried milk balls soaked in sweet syrup, such as rose syrup or honey.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/43/1_Gulab_Jamun_Mithai_Sweets_of_India_cropped.jpg",
    price: 3000
  },
  {
    category: categories[2]._id,
    title: "Jalebi",
    description: "Dough fried in a coil shape dipped in sugar syrup, often taken with milk, tea, yogurt, or lassi.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Jalebi_%28sweet%29.jpg",
    price: 3000
  },
  {
    category: categories[2]._id,
    title: "Kheer",
    description: "A rice pudding made with milk, rice, sugar and dried fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Kheer.jpg",
    price: 6000
  },
  {
    category: categories[2]._id,
    title: "Lassi",
    description: "Yogurt, milk, nuts, can be made with mango (mango lassi)",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Fatfreelassi.jpg",
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