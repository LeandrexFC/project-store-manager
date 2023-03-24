const connection = require('./connection');

const insertSalesProducts = (sales) => {
  const promises = sales.map(async (sale) => {
    const { productId = null, quantity = null } = sale;
    const id = await connection.execute(
      'SELECT sale_id FROM sales_products ORDER BY id DESC LIMIT 1;',
    );
    await connection.execute(
      'INSERT INTO sales_products (product_id, quantity, sale_id) VALUES (?, ?, ?)',
      [productId, quantity, id],
     );
    
    return { productId, quantity, id };
  });

  return Promise.all(promises)
    .then((results) => results.flat())
    .catch((error) => console.log(error));
};

const insertSales = async () => {
   await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW())',
  );

  const [result] = await connection.execute(
    'SELECT id FROM sales ORDER BY id DESC LIMIT 1;',
  );

  return {
    id: result[0].id,
    // date,
  };
};

// sale = precisa do id, date,
// sales products = precisa do product_id, sale_id e quantity 

module.exports = {
  insertSalesProducts,
  insertSales,
};
