const validates = require('../services/validations/sales.service');

const insertSales = async (req, res) => {
  const sales = req.body;

  const { type, message } = await validates.validateSaleField(sales);

  if (type === 'FIELD_REQUIRED') {
    return res.status(400).json({ message });
  } if (type === 'FIELD_QUANTITY_REQUIRED') {
    return res.status(400).json({ message });
  } if (type === 'FIELD_LENGTH') {
    return res.status(422).json({ message });
  } if (type === 'not_found') {
    return res.status(404).json({ message });
  }

  const sale = await validates.createSale(sales);

  return res.status(201).json(sale);
};

module.exports = {
  insertSales,
};