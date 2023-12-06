const express = require('express');
const Router = express.Router();
const ProductController = require('../controllers/ProductController');
const auth = require('../middlewares/auth');

Router.get('/home_product', ProductController.getHomeProducts)
Router.get('/:id', ProductController.getProductById)
Router.post('/add', auth.checkIsAdmin, ProductController.addNewProduct)
Router.put('/update', auth.checkIsAdmin, ProductController.updateProduct)
Router.delete('/delete/:id', auth.checkIsAdmin, ProductController.deleteProducts)

module.exports = Router;