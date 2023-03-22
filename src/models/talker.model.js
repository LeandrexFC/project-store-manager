const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );
   return result;
};

const findProductsByID = async (productID) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id = ? ORDER BY id ASC',
    [productID],
  );
   return result;
}; 

const insertProduct = async (productName) => {
  const [result] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)', [productName],
  );

  const newProduct = {
    id: result.insertId,
    name: productName,
  };

  return newProduct;
};

module.exports = {
  findAllProducts,
  findProductsByID,
  insertProduct,
};
