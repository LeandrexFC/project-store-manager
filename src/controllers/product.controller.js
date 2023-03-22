const validates = require('../services/validations/products.service');

const productController = async (_req, res) => {
  const { products, type, message } = await validates.validateNull();

  //  quem recebe o req res é o controller
  if (type === 'FIELD_REQUIRED') {
     res.status(404).json({ message });
     return;
   }
  
  res.status(200).json(products);
};

const productControllerId = async (req, res) => {
  const { id } = req.params;
  const { products, type, message } = await validates.validateNullId(id);

  if (type === 'FIELD_REQUIRED') {
     res.status(404).json({ message });
     return;
   }
  
  res.status(200).json(products);
};

module.exports = {
  productController,
  productControllerId,
};