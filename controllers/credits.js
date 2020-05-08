const db = require('../models');
const auth = require('./auth');
const utility = require('../utility');

// SHOW one Credit
async function show(req,res) {
  try {
    let foundCredit = await db.Credit.findById(req.params.id).populate('user', 'email');
    if (!foundCredit) {
      return res.sendStatus(404);
    }
    res.json(foundCredit);
  }
  catch(err){
    utility.handleError(err, res);
  }
};

// CREATE Credit
async function create(req, res) {
  try {
    if (!auth.authorized(req)){
      utility.throwAuthError();
    }

    let data = req.body;
    data.user = req.session.currentUser.id
    console.log(data.user)
    let newCredit = await db.Credit.create(data);
    res.json(newCredit);
  }
  catch(err) {
    utility.handleError(err, res);
  }
};

// UPDATE Credit
async function update(req,res) {
  try{
    let credit = await db.Credit.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    );
    res.json(credit);
  }
  catch(err){
    utility.handleError(err, res);
  }
}

// DELETE Credit
async function deleteCredit(req, res){
  try{
    let credit = await db.Credit.findByIdAndDelete(req.params.id);
    if (!credit){
      utility.throw4xx(404);
    }
    res.json(credit);
  }
  catch(err){
    utility.handleError(err, res);
  }
};


// INDEX User Credits
async function userCredit(req, res){
  try{
    let credits = await db.Credit.find({
      user: req.params.id
    });
    res.json(credits)
  }
  catch(err){
    utility.handleError(err, res);
  }
}


module.exports = {
  show,
  create,
  update,
  deleteCredit,
  userCredit,
}
