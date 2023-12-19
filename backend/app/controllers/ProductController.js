const ProductModel = require('../models/ProductModel');
const { ResponseBuilder } = require('../utils/ResponseBuilder');
class ProductController {
    getHomeProducts = async(req, res) => {
        try {
            const model = new ProductModel()
            const result = await model.getHomeList(req.query)
            return res.json(result);
        } catch (error) {
            var errorResponse = new ResponseBuilder();
            errorResponse.SetMessage(error.message);
            errorResponse.SetStatusCode(401);
            return res.json(errorResponse.Build());
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