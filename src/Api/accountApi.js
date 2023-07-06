import {axiosInstance}   from "./axiosInstance";
export const accountApi = {
    getAll(params) {
        var url = '/accounts';
        return axiosInstance.get(url, { params })
    },
    get(id) {
        var url = `/accounts/${id}`;
        return axiosInstance.get(url)
    },
    add(data) {
        var url = `/accounts`
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/accounts/${id}`
        return axiosInstance.put(url, data)
    },
    del(id) {
        var url = `/accounts/${id}`
        return axiosInstance.delete(url)
    }
}