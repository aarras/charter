import http from "../http-common";


const getAllBetweenDates = (customerId, startDate, endDate) => {
    return http.get(`/transactions-between/${customerId}/${startDate}/${endDate}`)
}

const getAllByCustomer = (customerId) => {
    return http.get(`/customer/${customerId}/transactions`)
}

export default {
    getAllBetweenDates,
    getAllByCustomer
};
