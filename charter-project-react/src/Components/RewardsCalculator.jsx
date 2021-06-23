import React, { useState } from "react";
import { useEffect } from "react";
import TransactionDataService from "../Services/TransactionService";

const RewardsCalculator = ({ customerId, startDate, endDate }) => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        retrieveTransactions(customerId, startDate, endDate);
    }, [customerId, startDate, endDate])

    const retrieveTransactions = (customerId, startDate, endDate) => {
        console.log(customerId);
        TransactionDataService.getAllBetweenDates(customerId, startDate, endDate)
            .then(response => {
                console.log(response.data);
                setTransactions(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const rewardPoints = () => {

        if(transactions.length > 0) {
            let points = 0;
            for(let transaction of transactions) {
                let amount = transaction.transactionAmount;
                
                if(amount > 100) {
                    points += 50;
                    points += Math.floor(amount -100) * 2;
                } else if (amount > 50) {
                    points += Math.floor(amount) -50;
                }

            }
            return points;
        }
        return 0;
    }

    return (
        <td>{rewardPoints()}</td>
    );

}

export default RewardsCalculator;