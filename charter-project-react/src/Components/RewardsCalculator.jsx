import React, { useState } from "react";
import TransactionDataService from "../Services/TransactionService";

const RewardsCalculator = ({ customerId, startDate, endDate }) => {

    //const [transactions, setTransactions] = useState([]);

    const retrieveTransactions = (customerId, startDate, endDate) => {
        console.log(customerId);
        TransactionDataService.getAllBetweenDates(customerId, startDate, endDate)
            .then(response => {
                console.log(response.data);
                //setTransactions(response.data);
                return rewardPoints(response.data);
                //rewardPoints(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const rewardPoints = (transactions) => {
        //let transactions = retrieveTransactions(customerId, startDate, endDate);
        let points = 0;

        if(transactions.length > 0) {
            console.log(points);

            for(let transaction of transactions) {
                points += transaction.transactionAmount;
                console.log(points);
            }
            return points;
        }
    }

    return (
        <td>{rewardPoints()}</td>
    );

}

export default RewardsCalculator;