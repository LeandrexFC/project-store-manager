const connection = require('../models/connection');

const isProductValid = async (req, res, next) => {
  const sales = req.body;
  const errors = [];

  const promises = sales.map(async (sale) => {
    if (!sale.productId) {
      errors.push({ status: 400, message: '"productId" is required' });
      return;
    }

    const [product] = await connection
      .execute('SELECT * FROM products WHERE id = ?', [sale.productId]);
    if (product.length === 0) {
      errors.push({ status: 404, message: 'Product not found' });
    }
  });

  await Promise.all(promises);

  if (errors.length > 0) {
    return res.status(errors[0].status).json(errors[0]);
  }

  return next();
};

module.exports = isProductValid;
