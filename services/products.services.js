const ProductDAO = require( '../dao/product.dao' );
const productDao = new ProductDAO();

class ProductServices {
  async createProduct( productInfo ) {
    const { nombre, categoria, descripcion, cantidad, precio } = productInfo;
    return productDao.createProduct( nombre, categoria, descripcion, cantidad, precio );
  };

  async getProducts() {
    return productDao.getProducts();
  };

  async getProductById( id ) {
    return productDao.getProductById( id );
  };

  async updateProduct( id, updates ) {
    return productDao.updateProduct( id, updates );
  };

  async deleteProduct( id ) {
    return productDao.deleteProduct( id );
  };
};

module.exports = ProductServices;
