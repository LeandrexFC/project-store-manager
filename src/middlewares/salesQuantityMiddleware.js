const isQuantityValid = (req, res, next) => {
  const sales = req.body;
  const errors = [];

  for (let i = 0; i < sales.length; i += 1) {
    if (sales[i].quantity == null) {
      errors.push({ status: 400, message: '"quantity" is required' });
    } else if (sales[i].quantity <= 0) {
      errors.push({ status: 422, message: '"quantity" must be greater than or equal to 1' });
    }
  }

  if (errors.length > 0) {
    return res.status(errors[0].status).json(errors[0]);
  } 
    return next();
};

module.exports = isQuantityValid;
