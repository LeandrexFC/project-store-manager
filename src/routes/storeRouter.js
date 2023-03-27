const { Router } = require('express');
const productsController = require('../controllers/product.controller');
const salesController = require('../controllers/sales.controller');
 const salesMiddleware = require('../middlewares/salesProductMiddlewares');
 const salesQuantityMiddleware = require('../middlewares/salesQuantityMiddleware');

const storeMangerRouter = Router();

storeMangerRouter.get('/products', productsController.productController);

storeMangerRouter.get('/products/:id', productsController.productControllerId);

storeMangerRouter.post('/products', productsController.productInserted);

storeMangerRouter.post('/sales', salesMiddleware,
  salesQuantityMiddleware, salesController.insertSales);

storeMangerRouter.post('/sales', salesMiddleware,
  salesQuantityMiddleware, salesController.insertSales);

storeMangerRouter.get('/sales', salesController.returnSales);

storeMangerRouter.get('/sales/:id', salesController.returnSalesId);

module.exports = storeMangerRouter;