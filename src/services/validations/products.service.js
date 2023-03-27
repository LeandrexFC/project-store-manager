// const connection = require('../../models/connection');
const productModel = require('../../models/product.model');

const validateNull = async () => {
  const products = await productModel.findAllProducts();
  
  if (!products || products.length === 0) {
    return { type: 'FIELD_REQUIRED', message: 'Product not found' };
  }
  
  return { type: null, message: '', products };
};

const validateNullId = async (productId) => {
  const [products] = await productModel.findProductsByID(productId);
  
  if (!products || products.length === 0) {
    return { type: 'FIELD_REQUIRED', message: 'Product not found' };
  }
  
  return { type: null, message: '', products };
};

const validateField = async (name) => {
  if (!name) {
    return { type: 'FIELD_REQUIRED', message: '"name" is required' };
  }
  if (name.length < 5) {
    return { type: 'FIELD_LENGTH', message: '"name" length must be at least 5 characters long' };
  } 

  const response = await productModel.insertProduct(name);

     return { type: null, message: '', response };
};

const attNameField = async (name, productId) => {
  if (!name) {
    return { type: 'FIELD_REQUIRED', message: '"name" is required' };
  }
  if (name.length < 5) {
    return { type: 'FIELD_LENGTH', message: '"name" length must be at least 5 characters long' };
  }
  const [products] = await productModel.findProductsByID(productId);
  
  if (!products || products.length === 0) {
    return { type: 'FIELD_NOT_FOUND', message: 'Product not found' };
  }

  const newProduct = await productModel.attProduct(productId, name);
  
  return { type: null, message: '', newProduct };
};

module.exports = {
  validateNull,
  validateNullId,
  validateField,
  attNameField,
};