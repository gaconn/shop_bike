const ProductModel = require('../models/ProductModel')
class ProductController {
    getHomeProducts = async(req, res) => {
        try {
            const model = new ProductModel()
            await model.getHomeList(req.params)
            return res.json({isSuccess: true});
        } catch (error) {
            return res.json({isSuccess: false})
        }
    }

    getProductById = (req, res) => {
        return res.json({isSuccess: true});
    }

    addNewProduct = (req, res) => {
        return res.json({isSuccess: true});
    }

    updateProduct = (req, res) => {
        return res.json({isSuccess: true});
    }

    deleteProducts = (req, res) => {
        return res.json({isSuccess: true});
    }
}

module.exports = new ProductController();