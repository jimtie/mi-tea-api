const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const AddressSchema = mongoose.Schema({
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  user: {
    type: ObjectId,
    ref: 'User'
  },
  city: {
    type: String,
  },
  zipcode: {
    type: String,
  }
});

const Address = mongoose.model('Address', AddressSchema);

module.exports= Address;
