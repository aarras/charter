import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CustomerDataService from "../Services/CustomerService";
import TransactionDataService from "../Services/TransactionService";
import RewardsCalculator from "./RewardsCalculator";

const CustomerComponent = () => {

    const [customer, setCustomer] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const { customerId } = useParams();

    useEffect(() => {
        retrieveCustomer();
        retrieveTransactions();
    }, [customerId]);

    const retrieveCustomer = () => {
        CustomerDataService.get(customerId)
            .then(response => {
                setCustomer(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const retrieveTransactions = () => {
        TransactionDataService.getAllByCustomer(customerId)
            .then(response => {
                setTransactions(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const calculatePoints = (amount) => {
        if(amount > 100) {
            return (Math.floor(amount-100) * 2) + 50;
        } else if(amount > 50) {
            return Math.floor(amount) -50;
        } else return 0;
    }

    const getDate = (milliseconds) => {
        let theDate = new Date(milliseconds);
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }
        return Intl.DateTimeFormat('en-US', options).format(theDate);
    }

    return (
        <div className="ml-4">
            <div className="row mt-4 h3">
                ID {customer.id}: {customer.firstName} {customer.lastName}
            </div>
            <div className="row justify-content-start mt-5 font-weight-bold">
                <div className="col-3">
                    <div>Transaction Date</div>
                </div>
                <div className="col-3">
                    <div>Transaction Amount</div>
                </div>
                <div className="col-3">
                    <div>Points Earned</div>
                </div>
            </div>
                {transactions && transactions.map((transaction) => (
                    <div className="row justify-content-start mt-3">
                        <div className="col-3">
                            <div>{getDate(transaction.transactionDate)}</div>
                        </div>
                        <div className="col-3">
                            <div>${transaction.transactionAmount}</div>
                        </div>
                        <div className="col-3">
                            <div>{calculatePoints(transaction.transactionAmount)}</div>
                        </div>
                    </div>
                ))}
        </div>
    );

};

export default CustomerComponent;