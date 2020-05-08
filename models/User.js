const mongoose = require("mongoose");
// const City = require('./City');


const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name.']
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your last name.']
  },
  email: {
    type: String,
    required: [true, 'Please enter a working email.'],
    unique: true
  },
  password: {
    type: String,
    required: [true,'Please enter a password.']
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // },
  // city: City.schema

});

const User = mongoose.model('User', UserSchema)

module.exports = User;
