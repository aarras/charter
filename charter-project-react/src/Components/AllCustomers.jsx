import React, { useState, useEffect } from "react";
import CustomerDataService from "../Services/CustomerService";
import TransactionDataService from "../Services/TransactionService";
import DatePickerComponent from './DatePickerComponent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [startDate, setStartDate] = useState(new Date().getTime());
    const [endDate, setEndDate] = useState(new Date().getTime());

    useEffect(() => {
        retrieveCustomers();
    }, []);

    const retrieveCustomers = () => {
        CustomerDataService.getAll()
            .then(response => {
                setCustomers(response.data);
                console.log(response.data);

            let sentArray = response.data;
            let newObject = {};

            for (let cus of sentArray) {
                const addObject = Object.assign(newObject, {
                    [cus.id]: {
                        firstName: cus.firstName,
                        lastName: cus.lastName,
                        transactions: getTransactions(cus.id, startDate, endDate)
                    }
                })
            }

            setTransactions({ ...transactions, newObject });
            console.log(newObject);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getTransactions = (customerId, startDate, endDate) => {
        TransactionDataService.getAllBetweenDates(customerId, startDate, endDate)
            .then(response => {
                setTransactions(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="mr-5">
            {/* <DatePickerComponent /> */}
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
                            {getTransactions(customer.id, startDate, endDate)}
                            <td>{customer.id}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.firstName}</td>
                            <td>{transactions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default CustomerList;