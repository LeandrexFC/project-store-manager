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

const productInserted = async (req, res) => {
  const { name } = req.body;

  const { type, message, response } = await validates.validateField(name);

  if (type === 'FIELD_REQUIRED') {
    res.status(400).json({ message });
  } else if (type === 'FIELD_LENGTH') {
    res.status(422).json({ message });
  } else {
    return res.status(201).json(response);
  }
};

const attProduct = async (req, res) => {
   const { id } = req.params;
   const { name } = req.body;

   const { type, message, newProduct } = await validates.attNameField(name, id);

   if (type === 'FIELD_REQUIRED') {
    return res.status(400).json({ message });
  } if (type === 'FIELD_LENGTH') {
    return res.status(422).json({ message }); 
  } if (type === 'FIELD_NOT_FOUND') {
    return res.status(404).json({ message });
    }

     return res.status(200).json(newProduct);
    };

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await validates.validateNullId(id);

  if (type === 'FIELD_REQUIRED') {
     res.status(404).json({ message });
  }

  await validates.deleteProductById(id);
  
  return res.status(204).end();
};

module.exports = {
  productController,
  productControllerId,
  productInserted,
  attProduct,
  deleteProduct,
};