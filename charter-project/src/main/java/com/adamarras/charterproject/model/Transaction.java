package com.adamarras.charterproject.model;

import javax.persistence.*;
import java.util.Calendar;

@Entity
public class Transaction {

    @Id
    @GeneratedValue
    private Long id;

    private Calendar transactionDate;

    @ManyToOne
    private Customer customer;

    public Transaction(Calendar transactionDate, Customer customer) {
        this.transactionDate = transactionDate;
        this.customer = customer;
    }

    public Long getId() { return id; }

    public Calendar getTransactionDate() { return transactionDate; }

    public void setTransactionDate(Calendar transactionDate) { this.transactionDate = transactionDate; }

    public Customer getCustomer() { return customer; }

    public void setCustomer(Customer customer) { this.customer = customer; }
}
