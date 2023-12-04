class ProductController {
    getAll = (req, res) => {
        return res.json({isSuccess: true});
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