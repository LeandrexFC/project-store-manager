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

module.exports = {
  validateNull,
  validateNullId,
};