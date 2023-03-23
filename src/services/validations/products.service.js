const filter = require('../../models/talker.model');

const validateNull = async () => {
  const products = await filter.findAllProducts();
  
  if (!products || products.length === 0) {
    return { type: 'FIELD_REQUIRED', message: 'Product not found' };
  }
  
  return { type: null, message: '', products };
};

const validateNullId = async (productId) => {
  const [products] = await filter.findProductsByID(productId);
  
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
  
    return { type: null, message: '' };
};

module.exports = {
  validateNull,
  validateNullId,
  validateField,
};