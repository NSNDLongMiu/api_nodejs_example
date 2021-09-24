'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');
  var usersCtrl = require('./controllers/UsersController');
  var eventCtrl = require('./controllers/EventController');
  var cartsCtrl = require('./controllers/CartsController');

  // todoList Routes
  app.route('/products')
    .get(productsCtrl.get)
    .post(productsCtrl.store);


  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);


  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);

  //users
  app.route('/users')
    .get(usersCtrl.get)
    .post(usersCtrl.store);


  app.route('/users/:usersId')
    .get(usersCtrl.detail)
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);


  app.route('/users/:usersId')
    .get(usersCtrl.detail)
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);
  
  app.route('/users/login')
    .post(usersCtrl.login);
    
  //event
  app.route('/event')
    .get(eventCtrl.get)
    .post(eventCtrl.store);


  app.route('/event/:eventId')
    .get(eventCtrl.detail)
    .put(eventCtrl.update)
    .delete(eventCtrl.delete);


  app.route('/event/:eventId')
    .get(eventCtrl.detail)
    .put(eventCtrl.update)
    .delete(eventCtrl.delete);

    app.route('/carts')
    .get(cartsCtrl.get)
    .post(cartsCtrl.store);


  app.route('/carts/:cartsId')
    .get(cartsCtrl.detail)
    .put(cartsCtrl.update)
    .delete(cartsCtrl.delete);

  app.route('/carts/:cartsId')
    .get(cartsCtrl.detail)
    .put(cartsCtrl.update)
    .delete(cartsCtrl.delete);
  
    app.route('/carts/cart_user_id')
    .post(cartsCtrl.cartuserid);

    app.route('/carts/cart_update')
    .post(cartsCtrl.cartupdate);

    app.route('/carts/cart_delete')
    .post(cartsCtrl.cartdelete);
};
