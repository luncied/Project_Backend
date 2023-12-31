const ProductServices = require( '../services/products.services' ) 
const productServices = new ProductServices();

class ProductController {
  // Create Product
  async createProduct( req, res ) {
    try {
      const id = await productServices.createProduct( req.body );
      return res.status( 201 ).json( id );
    } catch( error ) {
      console.error( error );
      return res.status( 500 ).send( 'Internal Server Error' );
    };
  };

  async getProducts( req, res ) {
    try {
      const products = await productServices.getProducts();
      if( !products ) {
        return res.status( 404 ).send( 'No Products found in Database' );
      };
      return res.status( 201 ).json( products );
    } catch( error ) {
      console.error( error );
      return res.status( 500 ).send( 'Internal Server Error' );
    };
  };

  async getProductById( req, res ) {
    try {
      const id = req.params.id;
      const product = await productServices.getProductById( id );
      if( !product ) {
        return res.status( 404 ).send( 'Product not found' );
      };
      return res.status( 201 ).json( product );
    } catch( error ) {
      console.error( error );
      return res.status(500).send('Internal Server Error');
    };
  };

  async updateProduct( req, res ) {
    try {
      const id = req.params.id;
      const update = req.body;
      const success = await productServices.updateProduct( id, update );
      if( !success ) {
        return res.status( 404 ).send( 'Product not found' );
      };
      return res.status( 201 ).send( 'Product updated successfully' );
    } catch( error ) {
      console.error( error );
      return res.status( 500 ).send( 'Internal Server Error ' );
    };
  };

  async deleteProduct( req, res ) {
    try {
      const id = req.params.id;
      const success = await productServices.deleteProduct( id );
      if( !success ) {
        return res.status( 404 ).send( 'Product not found' );
      } 
      return res.status( 201 ).send( 'Product deleted successfully' );
    } catch( error ) {
        console.error( error );
        return res.status( 500 ).send( 'Internal Server Error ' );
    };
  };
};

module.exports = ProductController;