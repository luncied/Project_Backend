const db = require( '../database/db' );

class ProductDAO {
  async createProduct ( nombre, categoria, descripcion, cantidad, precio ) {
    const [ id ] = await db( 'products' )
      .insert({
        nombre,
        categoria,
        descripcion,
        cantidad,
        precio
      })
      .returning( 'id' )
    return id;
  };

  async getProducts () {
    const productsList = await db( 'products' )
      .select( '*' )
      .orderBy( 'id', 'asc' )
    return productsList;
  };

  async getProductById ( id ) {
    const product = await db( 'products' )
      .select( '*' )
      .where({ id })
      .first()
    return product
  };

  async updateProduct ( id, updates ) {
    await db( 'products' )
      .where({ id })
      .update( updates )
    return true;
  };

  async deleteProduct ( id ) {
    await db( 'products' )
      .where({ id })
      .del()
    return true;
  };
};

module.exports = ProductDAO;
