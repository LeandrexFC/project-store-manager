const { Router } = require('express');
// const filter = require('../models/talker.model');
const productsController = require('../controllers/product.controller');
// const productModel = require('../models/talker.model');

const storeMangerRouter = Router();

storeMangerRouter.get('/products', productsController.productController);

storeMangerRouter.get('/products/:id', productsController.productControllerId);

storeMangerRouter.post('/products', productsController.productInserted);

module.exports = storeMangerRouter;