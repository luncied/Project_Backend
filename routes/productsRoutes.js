const express = require( 'express' );
const ProductController = require( '../controller/products.controller' );
const productController = new ProductController();

const router = express.Router();

router.get( '/api/products/', productController.getProducts );
router.post( '/api/products/', productController.createProduct );

router.get( '/api/products/:id', productController.getProductById );
router.put( '/api/products/:id', productController.updateProduct );
router.delete( '/api/products/:id', productController.deleteProduct );

module.exports = router;
