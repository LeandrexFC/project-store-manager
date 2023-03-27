const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id ASC',
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

const attProduct = async (productId, name) => {
  const [result] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, productId],
  );
  const newProduct = {
    id: result.insertId + 1,
    name,
  };
  return newProduct;
};

module.exports = {
  findAllProducts,
  findProductsByID,
  insertProduct,
  attProduct,
};
