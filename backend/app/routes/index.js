const productRouter = require('./products')
function routes(app) {
    app.use('/products', productRouter);
}

module.exports = routes