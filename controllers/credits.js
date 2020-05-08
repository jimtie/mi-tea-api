const db = require('../models');
const auth = require('./auth');
const utility = require('../utility');


async function show(req,res) {
  try {
    let foundAddress = await db.Address.findById(req.params.id).populate('user', 'email');
    if (!foundAddress) {
      return res.sendStatus(404);
    }
    res.json(foundAddress);
  }
  catch(err){
    utility.handleError(err, res);
  }
};


async function create(req, res) {
  try {
    if (!auth.authorized(req)){
      utility.throwAuthError();
    }

    let data = req.body;
    data.user = req.session.currentUser.id
    console.log(data.user)
    let newAddress = await db.Address.create(data);
    res.json(newAddress);
  }
  catch(err) {
    utility.handleError(err, res);
  }
};


async function update(req,res) {
  try{
    let address = await db.Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    );
    res.json(address);
  }
  catch(err){
    utility.handleError(err, res);
  }
}


async function deleteAddress(req, res){
  try{
    let address = await db.Address.findByIdAndDelete(req.params.id);
    if (!address){
      utility.throw4xx(404);
    }
    res.json(address);
  }
  catch(err){
    utility.handleError(err, res);
  }
};


// INDEX User Addresses
async function userAddress(req, res){
  try{
    let addresses = await db.Address.find({
      user: req.params.id
    });
    res.json(addresses)
  }
  catch(err){
    utility.handleError(err, res);
  }
}


module.exports = {
  show,
  create,
  update,
  deleteAddress,
  userAddress,
}
