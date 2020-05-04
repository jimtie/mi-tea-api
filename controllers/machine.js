const db = require('../models');


//All Machine Shown
async function index(req,res){
  try{
    let allMachine = await db.Machine.find();
    res.json(allMachine);
  }
  catch(err){
    res.status(500).json({
      status:500,
      error: 'Something went wrong, please try again.'
    });
  }
}