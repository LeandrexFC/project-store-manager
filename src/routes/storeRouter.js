const { Router } = require('express');
const filter = require('../models/talker.control');

const storeMangerRouter = Router();

storeMangerRouter.get('/products', async (_req, res) => {
  const products = await filter.findAllProducts();
  
  if (!products) {
    res.status(404).json({ message: 'Product not found' });
  }
  
  res.status(200).json(products);
});

storeMangerRouter.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const [products] = await filter.findProductsByID(id);

  if (!products) {
    res.status(404).json({ message: 'Product not found' });
  }
    res.status(200).json(products);
});

module.exports = storeMangerRouter;