'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
// const categoryRouter = require('../routes/categories-router');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// // Models
// // TODO: Pull these in (or create them)!
// const Products = require('./models/products.js');
// const products = new Products();
const Products = mongoose.Schema({
  name: String,
  description: String,
});

const products = mongoose.model('products',Products);

const Categories = mongoose.Schema({
  name: String,
  description: String,
});

const categories = mongoose.model('categories', Categories);

// const Categories = require('./models/categories.js');
// const categories = new Categories();


// // Routes
app.get('/api/v1/categories', getCategories);
// app.post('/api/v1/categories', postCategories);
// app.get('/api/v1/categories/:id', getCategory);
// app.put('/api/v1/categories/:id', putCategories);
// app.delete('/api/v1/categories/:id', deleteCategories);

app.get('/api/v1/products', getProducts);
// app.post('/api/v1/products', postProducts);
// app.get('/api/v1/products/:id', getProduct);
// app.put('/api/v1/products/:id', putProducts);
// app.delete('/api/v1/products/:id', deleteProducts);

// // ROUTE HANDLER FUNCTIONS
function getCategories(request,response,next) {
  categories.find({})
    .then(results => {
      response.send(results);
    });
}
//   // expects an array of object to be returned from the model
//   categories.get()
//     .then( data => {
//       const output = {
//         count: data.length,
//         results: data,
//       };
//       response.status(200).json(output);
//     })
//     .catch( next );
// }

// function getCategory(request,response,next) {
//   // expects an array with the one matching record from the model
//   categories.get(request.params.id)
//     .then( result => response.status(200).json(result[0]) )
//     .catch( next );
// }

// function postCategories(request,response,next) {
//   // expects the record that was just added to the database
//   categories.post(request.body)
//     .then( result => response.status(200).json(result[0]) )
//     .catch( next );
// }


// function putCategories(request,response,next) {
//   // expects the record that was just updated in the database
//   categories.put(request.params.id, request.body)
//     .then( result => response.status(200).json(result[0]) )
//     .catch( next );
// }

// function deleteCategories(request,response,next) {
//   // Expects no return value (resource was deleted)
//   categories.delete(request.params.id)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }


function getProducts(request,response,next) {
  // expects an array of objects back
  products.find({})
    .then(results => {
      response.send(results);
    });
  // products.get()
  //   .then( data => {
  //     const output = {
  //       count: data.length,
  //       results: data,
  //     };
  //     response.status(200).json(output);
  //   })
  //   .catch( next );
}

// function getProduct(request,response,next) {
//   // expects an array with one object in it
//   products.get(request.params.id)
//     .then( result => response.status(200).json(result[0]) )
//     .catch( next );
// }

// function postProducts(request,response,next) {
//   // expects the record that was just added to the database
//   products.post(request.body)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }


// function putProducts(request,response,next) {
//   // expects the record that was just updated in the database
//   products.put(request.params.id, request.body)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }

// function deleteProducts(request,response,next) {
//   // Expects no return value (the resource should be gone)
//   products.delete(request.params.id)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`Server up on ${port}`));
  },
};