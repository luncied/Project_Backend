class ProductController {
  // Create Product
  async createProduct( req, res ) {
    try {
      const id = await SERVICE;
      return res.status( 201 ).json( id );
    } catch( error ) {
      console.error( error );
      return res.status( 500 ).send( 'Internal Server Error' );
    };
  };


  async getProductById( req, res ) {
    try {
      const id = req.params.id;
      const product = await SERVICE;
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
      const success = await SERVICE;
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
      const success = await SERVICE;
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

export default new FrutaController();