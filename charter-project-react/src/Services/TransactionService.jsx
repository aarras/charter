import http from "../http-common";


const getAllBetweenDates = (startDate, endDate) => {
    return http.get(`/transactions-between/${startDate}/${endDate}`)
}

const getAllByCustomer = (customerId) => {
    return http.get(`/customer/${customerId}/transactions`)
}

export default {
    getAllBetweenDates,
    getAllByCustomer
};
