const validates = require('../services/validations/sales.service');

const insertSales = async (req, res) => {
  const sales = req.body;

  const sale = await validates.createSale(sales);

  return res.status(201).json(sale);
};

const returnSales = async (_req, res) => {
  const { sales, type, message } = await validates.notFoundSale();

  if (type === 'FIELD_REQUIRED') {
     res.status(404).json({ message });
     return;
   }
  
  res.status(200).json(sales);
};

const returnSalesId = async (req, res) => {
  const { id } = req.params;
  const { sales, type, message } = await validates.notFoundSaleById(id);

  if (type === 'FIELD_REQUIRED') {
     res.status(404).json({ message });
     return;
   }
  
  res.status(200).json(sales);
};

module.exports = {
  insertSales,
  returnSales,
  returnSalesId,
};