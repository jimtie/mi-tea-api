const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const CreditSchema = mongoose.Schema({
  number: {
    type: String,
  },
  name: {
    type: String,
  },
  user: {
    type: ObjectId,
    ref: 'User'
  },
  expiration: {
    type: Date,
  },
  cvv: {
    type: String,
  }
});

const Credit = mongoose.model('Credit', CreditSchema);

module.exports= Credit;
