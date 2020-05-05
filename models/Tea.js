const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;
const Image = require('./Image');

const TeaSchema = mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  description: String,
  images: {
    icon: Image.schema,
    header: Image.schema,
  },

});

const Tea = mongoose.model('Tea', TeaSchema);

module.exports = Tea;
