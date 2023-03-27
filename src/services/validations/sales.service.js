const salesModel = require('../../models/sales.model');

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
  
const notFoundSale = async () => {
  const sales = await salesModel.findAllSales();

  if (!sales || sales.length === 0) {
    return { type: 'FIELD_REQUIRED', message: 'Sale not found' };
  }
  
  return { type: null, message: '', sales };
};

const notFoundSaleById = async (saleId) => {
  const sales = await salesModel.findSalesById(saleId);

  if (!sales || sales.length === 0) {
    return { type: 'FIELD_REQUIRED', message: 'Sale not found' };
  }
  
  return { type: null, message: '', sales };
};

  module.exports = {
  // validateSaleField,
    createSale,
    notFoundSale,
    notFoundSaleById,
};