import React, { useState, useEffect } from "react";
import CustomerDataService from "../Services/CustomerService";
import TransactionDataService from "../Services/TransactionService";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RewardsCalculator from "./RewardsCalculator";

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [refreshCustomers, setRefreshCustomers] = useState(true);
    const [startDate, setStartDate] = useState(new Date().getTime());
    const [endDate, setEndDate] = useState(new Date().getTime());

    useEffect(() => {
        if(refreshCustomers == true) {
            setRefreshCustomers(false);
            retrieveCustomers();
        }
    }, [refreshCustomers]);

    const retrieveCustomers = () => {
        
        CustomerDataService.getAll()
            .then(response => {
                setCustomers(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleStartDateChange = (date) => {
        setStartDate(date.getTime());
        setRefreshCustomers(true);
    }

    const handleEndDateChange = (date) => {
        setEndDate(date.getTime());
        setRefreshCustomers(true);
    }

    return (
        <div className="mr-5">
            <div className="row no-gutters" name="options">
                <div className="col-md-auto no-gutters">
                    <p className="mb-0">Start Date</p>
                    <DatePicker 
                        className="mr-3"
                        selected={startDate}
                        onChange={(date) => handleStartDateChange(date)}
                    />
                </div>
                <div className="col-md-auto no-gutters">
                    <p className="mb-0">End Date</p>
                    <DatePicker 
                        className="mr-3"
                        selected={endDate}
                        onChange={(date) => handleEndDateChange(date)}
                    />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Last Name</td>
                        <td>First Name</td>
                        <td>Reward Points</td>
                    </tr>
                </thead>
                <tbody>
                    {customers && customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.firstName}</td>
                            <RewardsCalculator 
                                customerId={customer.id}
                                startDate={startDate}
                                endDate={endDate} 
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default CustomerList;