const { Router } = require('express');
// const filter = require('../models/talker.model');
const productsController = require('../controllers/product.controller');
const salesController = require('../controllers/sales.controller');
// const salesMiddleware = require('../middlewares/salesProductMiddlewares');
// const salesQuantityMiddleware = require('../middlewares/salesQuantityMiddleware');
// const productModel = require('../models/talker.model');

const storeMangerRouter = Router();

storeMangerRouter.get('/products', productsController.productController);

storeMangerRouter.get('/products/:id', productsController.productControllerId);

storeMangerRouter.post('/products', productsController.productInserted);

storeMangerRouter.post('/sales', salesController.insertSales);

module.exports = storeMangerRouter;