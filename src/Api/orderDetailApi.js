import {axiosInstance}   from "./axiosInstance";
export const orderDetaillApi = {
    getAll(params) {
        var url = '/orderdetaills';
        return axiosInstance.get(url, { params })
    },
    get(id,params={}) {
        var url = `/orderdetaills/${id}`;
        return axiosInstance.get(url,{params})
    },
    add(data) {
        var url = `/orderdetaills`
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/orderdetaills/${id}`
        return axiosInstance.put(url, data)
    },
    del(id) {
        var url = `/orderdetaills/${id}`
        return axiosInstance.delete(url)
    }
}