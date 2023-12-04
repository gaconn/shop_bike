const common = require('../common/database')
const MAX_UNIT_PER_PAGE = 10;

class ProductModel {
    constructor(common) {
        if (common.isDBConnect() == true) {
            this.DBConnection = common.getDBConnect();
        } else {
            common.initDBConnect();
            this.DBConnection = common.getDBConnect();
        }
    }

    getAll = (params) => {
        if (!params.page) {
            params.page = 1;
        } 

        let query = 
        'SELECT xe_may.id AS id_xe_may,\
                xe_may.sku AS sku,\
                xe_may.ten_xe AS ten_xe,\
                xe_may.mo_ta AS mo_ta,\
                xe_may.thong_so_ky_thuat AS thong_so_ky_thuat,\
                xe_may.so_km_da_di AS so_km_da_di,\
                xe_may.dung_tich_xe AS dung_tich_xe,\
                xe_may.xuat_xu AS xuat_xu,\
                xe_may.created_date AS created_date,\
                xe_may.updated_date AS updated_date,\
                xe_may.deleted_date AS deleted_date,\
                xe_may.id_loai_xe AS id_loai_xe,\
                xe_may.id_hang_xe AS id_hang_xe,\
                loai_xe.ten_loai AS ten_loai,\
                hang_xe.ten_hang AS ten_hang,\
                dong_xe.ten_dong AS ten_dong,\
        FROM \
            xe_may LEFT JOIN hinh_anh ON xe_may.id = hinh_anh.id\
                    LEFT JOIN loai_xe ON xe_may.id_loai_xe = loai_xe.id\
                    LEFT JOIN hang_xe ON xe_may.id_hang_xe = hang_xe.id\
                    LEFT JOIN dong_xe ON hang_xe.id = dong_xe.id_hang_xe\
        OFFSET ?\
        LIMIT ?\
        ORDER BY xe_may.updated_date desc,\
                 xe_may.created_date desc'

    }
}