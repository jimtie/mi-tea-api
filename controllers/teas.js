const db = require('../models');


//All Tea Shown
async function index(req,res){
  try{
    let allTea = await db.Tea.find();
    res.json(allTea);
  }
  catch(err){
    res.status(500).json({
      status:500,
      error: 'Something went wrong, please try again.'
    });
  }
}


// //Show TEA By ID
// async function show(req, res){
//   try{
//     let foundTea = await db.Tea.findById(req.params.id).populate({
//       path: 'orders',
//       populate: {
//         path: 'user',
//         select: 'name'
//       }
//     });
//     res.json(foundTea);
//   }
//   catch(err) {
//     console.log(err);
//     res.status(500).json({
//       status: 500,
//       error: 'Something went wrong, please try again'}
//     );
//   }
// };

module.exports = {
  index,
  // show,
};
