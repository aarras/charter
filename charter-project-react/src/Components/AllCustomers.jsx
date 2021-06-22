import React, { useState, useEffect } from "react";
import CustomerDataService from "../Services/CustomerService";
import TransactionDataService from "../Services/TransactionService";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [startDate, setStartDate] = useState(new Date().getTime());
    const [endDate, setEndDate] = useState(new Date().getTime());

    useEffect(() => {
        retrieveCustomers();
        getTransactions();
    }, [startDate], [endDate]);

    const retrieveCustomers = () => {
        CustomerDataService.getAll()
            .then(response => {
                setCustomers(response.data);
                console.log(response.data);
                getTransactions();
                // let sentArray = response.data;
                // let customerWithTransactions = [];

                // for (let customer of sentArray) {
                //     customerWithTransactions.push({
                //         id: customer.id,
                //         firstName: customer.firstName,
                //         lastName: customer.lastName,
                //         transactions: TransactionDataService.getAllBetweenDates(customer.id, startDate, endDate)})
                //         console.log(TransactionDataService.getAllBetweenDates(customer.id, startDate, endDate));
                // }
                // console.log(customerWithTransactions);
                // setCustomers(customerWithTransactions);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getTransactions = () => {
        TransactionDataService.getAllBetweenDates(startDate, endDate)
            .then(response => {
                console.log(response.data);
                let sentArray = response.data;
                for (let obj of sentArray) {
                    console.log(customers[obj.customer.id]);
                    console.log(customers);
                    setCustomers({ ...customers, [obj.customer.id]: { ...customers[obj.customerid], transactions: obj }});
                }
            })
            .then(console.log(customers))
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="mr-5">
            <div className="row no-gutters" name="options">
                <div className="col-md-auto no-gutters">
                    <p className="mb-0">Start Date</p>
                    <DatePicker 
                        className="mr-3"
                        selected={startDate}
                        onChange={(date) => setStartDate(date.getTime())}
                    />
                </div>
                <div className="col-md-auto no-gutters">
                    <p className="mb-0">End Date</p>
                    <DatePicker 
                        className="mr-3"
                        selected={endDate}
                        onChange={(date) => setEndDate(date.getTime())}
                    />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Last Name</td>
                        <td>First Name</td>
                    </tr>
                </thead>
                <tbody>
                    {customers && customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.firstName}</td>
                            {/* <td>{customer.transactions}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default CustomerList;