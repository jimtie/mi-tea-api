const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');
const app = express();

// CORS

app.use(
  cors({
    origin: `http://localhost:3000`,
    credentials: true,
    optionsSuccessStatus: 200
  })
);

// BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Express Session (Authentication)
app.use(session({
  store: new MongoStore({
    url: process.env.MONGODB_URI
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
}));

// Morgan (logging)
app.use(morgan('tiny'));

// Routes
app.get('/', (req, res) => {
  res.sendStatus(403)
});

app.use('/api/v1/auth', routes.auth);
// app.use('/api/v1/teas', routes.teas);
// app.use('/api/v1/machine', routes.machine);
// app.use('/api/v1/order', routes.orders);
app.use('/api/v1/users', routes.users);

app.listen(process.env.PORT || 3001)

function serverLog(data) {
  console.log('----------');
  console.log(data);
  console.log('----------');
}
