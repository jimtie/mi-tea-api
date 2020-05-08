const mongoose = require('mongoose');
const db_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mi-tea-api';

//connecting to Database
mongoose.connect(db_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(()=> console.log('MongoDB connected successfully.'))
.catch(err => console.log(`MongoDB connection error: ${err}`));

//exporting models

module.exports = {
  User: require('./User'),
  Tea: require('./Tea'),
  Address: require('./Address'),
  Image: require('./Image'),
  Machine: require('./Machine'),
  Credit: require('./Credit'),
};
