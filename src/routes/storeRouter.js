const { Router } = require('express');
// const filter = require('../models/talker.model');
const productsController = require('../controllers/product.controller');

const storeMangerRouter = Router();

storeMangerRouter.get('/products', productsController.productController);

storeMangerRouter.get('/products/:id', productsController.productControllerId);

module.exports = storeMangerRouter;