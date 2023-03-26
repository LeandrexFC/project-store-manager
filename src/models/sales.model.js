const connection = require('./connection');

const insertSalesProducts = async ({ productId, quantity, id }) => {
 if (productId === undefined ? null : productId) {
    await connection.execute(
      'INSERT INTO sales_products (product_id, quantity, sale_id) VALUES (?, ?, ?)',
      [productId, quantity, id],
    );
  }
};

const insertSales = async () => {
  const [data] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW())',
  );

  return data.insertId;
};

module.exports = {
  insertSalesProducts,
  insertSales,
};
