import http from "../http-common";

const getAll = () => {
    return http.get("/customers");
};

const get = id => {
    return http.get(`/customers/${id}`);
};

export default {
    getAll,
    get
};