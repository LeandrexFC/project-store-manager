const connection = require('../models/connection');

const isProductValid = async (req, res, next) => {
  const sales = req.body;

  try {
    const promises = sales.map(async (sale) => {
      if (!sale.productId) {
        return res.status(400).json({ message: '"productId" is required' });
      }

      const [product] = await connection
        .execute('SELECT * FROM products WHERE id = ?', [sale.productId]);
      if (product.length === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
    });
    await Promise.all(promises);
    return next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = isProductValid;
