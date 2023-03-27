const connection = require('./connection');

const insertSalesProducts = async ({ productId, quantity, id }) => {
    await connection.execute(
      'INSERT INTO sales_products (product_id, quantity, sale_id) VALUES (?, ?, ?)',
      [productId, quantity, id],
    );
};

const insertSales = async () => {
  const [data] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW())',
  );

  return data.insertId;
};

const findAllSales = async () => {
  const [result] = await connection.execute(` 
  SELECT sale_id AS saleId, sales.date, sales_products.product_id AS productId, 
    sales_products.quantity
    FROM sales_products JOIN sales ON sales.id = sales_products.sale_id
    ORDER BY sales.id ASC, sales_products.product_id ASC`);
   return result;
};

const findSalesById = async (saleId) => {
  const [result] = await connection.execute(`
  SELECT sales.date,
  sales_products.product_id AS productId, sales_products.quantity
  FROM sales_products
  JOIN sales ON sales.id = sales_products.sale_id
  WHERE sales.id = ?
  ORDER BY sales_products.product_id ASC
`, [saleId]);
   return result;
}; 

module.exports = {
  insertSalesProducts,
  insertSales,
  findAllSales,
  findSalesById,
};
