import {axiosInstance}   from "./axiosInstance";
export const categoryApi = {
    getAll(params) {
        var url = '/categories';
        return axiosInstance.get(url, { params })
    },
    get(id) {
        var url = `/categories/${id}`;
        return axiosInstance.get(url)
    },
    add(data) {
        var url = `/categories`
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/categories/${id}`
        return axiosInstance.put(url, data)
    },
    del(id) {
        var url = `/categories/${id}`
        return axiosInstance.delete(url)
    }
}