'use strict';

const server = require('./lib/server');
require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect('mongodb://localhost:27017/class08', mongooseOptions);


server.start(3000);
