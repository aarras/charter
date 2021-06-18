package com.adamarras.charterproject.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Calendar;

@Entity
@Table(name="transactions")
public class Transaction {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name="transaction_date")
    private Calendar transactionDate;

    @Column(name="transaction_amount")
    private BigDecimal transactionAmount;

    @ManyToOne
    private Customer customer;

    public Transaction () {}

    public Transaction(Calendar transactionDate, BigDecimal transactionAmount, Customer customer) {
        this.transactionDate = transactionDate;
        this.transactionAmount = transactionAmount;
        this.customer = customer;
    }

    public Long getId() { return id; }

    public Calendar getTransactionDate() { return transactionDate; }

    public void setTransactionDate(Calendar transactionDate) { this.transactionDate = transactionDate; }

    public Customer getCustomer() { return customer; }

    public void setCustomer(Customer customer) { this.customer = customer; }
}
