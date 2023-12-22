const common = require('../common/database')
const constant = require('../common/constant')
const {ModelCommonReturnBuilder} = require('../utils/ModelReturnBuilder')
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
        let result = new ModelCommonReturnBuilder();
        if (params.page) {
            offset = (params.page-1) * MAX_UNIT_PER_PAGE;
        } 

        let query = 
        `SELECT xe_may.id AS id_xe_may,\
                xe_may.sku AS sku,\
                xe_may.ten_xe AS ten_xe,\
                xe_may.created_date AS created_date,\
                xe_may.updated_date AS updated_date,\
                xe_may.deleted_date AS deleted_date,\
                GROUP_CONCAT(CONCAT('{id: "', hinh_anh.id, '",', 'src: "', hinh_anh.src, '"}') SEPARATOR ',') AS list_images\
         FROM \
            xe_may LEFT JOIN hinh_anh ON xe_may.id = hinh_anh.id_xe_may\
         WHERE xe_may.deleted_date IS NULL\
         GROUP BY xe_may.id\
         ORDER BY xe_may.updated_date desc,\
                  xe_may.created_date desc\
         LIMIT 10\
         OFFSET ${offset}`;
        
        try {
            const [rows, field] = await this.DBConnection.execute(query);

            if (rows.length <= 0) {
                return result.SetStatusCode(constant.DB_CONSTANT.QUERY_RESULT_NOT_FOUND).Build();
            }

            return result.SetStatusCode(constant.DB_CONSTANT.QUERY_RESULT_SUCCESS).SetDataResponse(rows).Build();
        } catch (error) {
            return result.SetStatusCode(constant.DB_CONSTANT.QUERY_RESULT_INTERNAL_ERROR).SetMessage(error.message).Build();
        }
    }
}

module.exports = ProductModel;