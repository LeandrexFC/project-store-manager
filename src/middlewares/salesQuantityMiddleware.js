const isQuantityValid = (req, res, next) => {
  const sales = req.body;

  sales.forEach((sale) => {
    if (sale.quantity == null) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    if (sale.quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });
  
  return next();
};

module.exports = isQuantityValid;
