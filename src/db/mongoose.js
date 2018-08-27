const mongoose = require('mongoose');

mongoose.set('useCreateIndexes', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));