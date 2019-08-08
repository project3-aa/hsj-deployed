require('dotenv').config();

const bodyParser   = require('body-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require("express-session");
const passport     = require("passport");
const cors         = require('cors');

require('./config/passport-login');


mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
    


app.use(session({
  secret:"some secret goes here",
  resave: true,
  saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session()); 



app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'https://hop-skip-and-jump.herokuapp.com']
}));


const userRoutes = require('./routes/UserRoutes');
app.use('/api/auth', userRoutes);

const jumpRoutes = require('./routes/jumpRoutes');
app.use('/api/jump', jumpRoutes);

const skipRoutes = require('./routes/skipRoutes');
app.use('/api/skip', skipRoutes);

const hopRoutes = require('./routes/hopRoutes');
app.use('/api/hop', hopRoutes);

app.use((req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
