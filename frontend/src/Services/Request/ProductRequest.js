import axios from 'axios'
import { API_URL } from '../../Common/Const'

export const GetHomeProducts = async (params, handleErrorCallbackFunc) => {
    try {
        const result = await axios.get(API_URL.PRODUCT.HOME_PRODUCT, params);
        return result;
    } catch (error) {
        //logging...
        console.log(error.message);
        //redirect to error page
        if (handleErrorCallbackFunc != null && typeof handleErrorCallbackFunc === "function") {
            handleErrorCallbackFunc(error);
        }
    }
}