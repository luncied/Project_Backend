class ProductServices {
  async createProduct( productInfo ) {
    const { nombre, categoria, descripcion, cantidad, precio } = productInfo;
    return PRODUCTDAO.createProduct( nombre, categoria, descripcion, cantidad, precio );
  };

  async getProductById( id ) {
    return PRODUCTDAO.getProductById( id );
  };


  async updateProduct( id, updates ) {
    return PRODUCTDAO.updateProduct( id, updates );
  };


  async deleteProduct( id ) {
    return PRODUCTDAO.deleteProduct( id );
  };
};

export default new ProductServices();