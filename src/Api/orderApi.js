import {axiosInstance}   from "./axiosInstance";
export const orderApi = {
    getAll(params) {
        var url = '/orders';
        return axiosInstance.get(url, { params })
    },
    get(id,params={}) {
        var url = `/orders/${id}`;
        return axiosInstance.get(url,{params})
    },
    add(data) {
        var url = `/orders`
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/orders/${id}`
        return axiosInstance.put(url, data)
    },
    del(id) {
        var url = `/orders/${id}`
        return axiosInstance.delete(url)
    }
}