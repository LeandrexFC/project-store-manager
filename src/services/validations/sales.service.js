const connection = require('../../models/connection');
const salesModel = require('../../models/sales.model');

const validateSaleField = async (sales) => {
  for (const sale of sales) {
    const { productId, quantity } = sale;
    if (!productId) {
      return { type: 'FIELD_REQUIRED', message: '"productId" is required' };
    }
    if (quantity == null) {
      return { type: 'FIELD_QUANTITY_REQUIRED', message: '"quantity" is required' };
    }
    if (quantity <= 0) {
      return { type: 'FIELD_LENGTH', message: '"quantity" must be greater than or equal to 1' };
    }
    const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
    if (product.length === 0) {
      return { type: 'not_found', message: 'Product not found' };
    }
  }
  return { type: null, message: '' };
};

// const itemsSold = [];

const createSale = async (sales) => {
  const idSale = await salesModel.insertSales();

  const allProducts = sales.map(({ productId, quantity }) => 
    salesModel.insertSalesProducts({ productId, quantity, id: idSale }));
  
  await Promise.all(allProducts);

 return {
  id: idSale,
  itemsSold: sales,
};
  };

  module.exports = {
  validateSaleField,
  createSale,
};