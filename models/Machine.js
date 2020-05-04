const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;
const Image = require('./Image');

const MachineSchema = mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  description: String,
  images: {
    icon: Image.schema,
    header: Image.schema,
  },
});

const Machine = mongoose.model('Machine', MachineSchema);

module.exports = Machine;
