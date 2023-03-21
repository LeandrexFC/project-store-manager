const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id DESC',
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

module.exports = {
  findAllProducts,
  findProductsByID,
};
