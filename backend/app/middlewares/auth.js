function checkIsAdmin(req, res, next) {
    console.log("authenticated")
    next();
}

module.exports = {checkIsAdmin}