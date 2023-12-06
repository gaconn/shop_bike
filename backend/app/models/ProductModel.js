const common = require('../common/database')
const MAX_UNIT_PER_PAGE = 10;

class ProductModel {
    constructor() {
        this.DBConnection = common.getDBConnect();
        if (!this.DBConnection) {
            throw new Error("Error init connect to database")
        }
    }

    getHomeList = async (params) => {
        let offset = 0;
        if (params.page) {
            offset = params.page * MAX_UNIT_PER_PAGE;
        } 

        let query = 
        'SELECT xe_may.id AS id_xe_may,\
                xe_may.sku AS sku,\
                xe_may.ten_xe AS ten_xe,\
                xe_may.created_date AS created_date,\
                xe_may.updated_date AS updated_date,\
                xe_may.deleted_date AS deleted_date\
         FROM \
            xe_may\
         WHERE xe_may.deleted_date IS NULL\
         OFFSET ?\
         LIMIT ?\
         ORDER BY xe_may.updated_date desc,\
                  xe_may.created_date desc';
        const [rows, field] = await this.DBConnection.execute(query, [offset, MAX_UNIT_PER_PAGE]);

        console.log(rows, field)

    }
}

module.exports = ProductModel;