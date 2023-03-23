const validates = require('../services/validations/products.service');
const productModel = require('../models/talker.model');

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

const productInserted = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await validates.validateField(name);

  if (type === 'FIELD_REQUIRED') {
    res.status(400).json({ message });
  } else if (type === 'FIELD_LENGTH') {
    res.status(422).json({ message });
  } else {
    const response = await productModel.insertProduct(name);

    return res.status(201).json(response);
  }
};

module.exports = {
  productController,
  productControllerId,
  productInserted,
};