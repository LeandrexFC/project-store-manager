const connection = require('./connection');

const insertSalesProducts = async ({ productId, quantity, id }) => 
      connection.execute(
      'INSERT INTO sales_products (product_id, quantity, sale_id) VALUES (?, ?, ?)',
      [productId, quantity, id],
     );

const insertSales = async () => {
  const [data] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW())',
  );

  return data.insertId;
    // date,
};

// sale = precisa do id, date,
// sales products = precisa do product_id, sale_id e quantity 

module.exports = {
  insertSalesProducts,
  insertSales,
};
