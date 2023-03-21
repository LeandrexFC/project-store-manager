const filter = require('../../models/talker.control');

const validateNull = async () => {
  const products = await filter.findAllProducts();
  
  if (!products || products.length === 0) {
    return { type: 'FIELD_REQUIRED', message: 'Product not found' };
  }
  
  return { type: null, message: '' };
};

module.exports = validateNull;