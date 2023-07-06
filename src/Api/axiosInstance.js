import axios from "axios";
import { AppUrl } from "./AppUrl";
const axiosInstanceConfig = {
    baseURL :AppUrl.BaseURL,
    headers:{
        'Authorization':`Bearer ${AppUrl.token}`,
        'Content-Type':`application/json`
    }
}
export const axiosInstance = axios.create(axiosInstanceConfig);