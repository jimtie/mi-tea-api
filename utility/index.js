// Utility Functions

const httpErrors = {
  400: Error('Bad Request'),
  401: Error('Unauthorized'),
  403: Error('Forbidden'),
  404: Error('Not Found'),
}

// Error Utilities
function throw4xx(status){
  err = httpErrors[status];
  err.number = status;
  throw err;
}

function throwAuthError(){
  throw4xx(401);
}

function handleError(err, res) {
  console.log('----------');
  console.log(err);
  console.log('----------');

  if (!err.number) {
    err.number = 500;
  }
  res.status(err.number).json({
    status: err.number,
    message: err.message,
  });
}

function clientUser(user){
  let clientUser = {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: user.address,
    creditCard: user.creditCard,
  }

  return clientUser;
}

function serverLog(message){
  console.log('#\n#\n', message, '\n#\n#\n');
}

module.exports = {
  throw4xx,
  throwAuthError,
  handleError,
  clientUser,
  serverLog
}
