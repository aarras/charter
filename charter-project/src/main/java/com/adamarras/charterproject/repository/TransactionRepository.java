package com.adamarras.charterproject.repository;

import com.adamarras.charterproject.model.Customer;
import com.adamarras.charterproject.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByTransactionDate(Calendar transactionDate);
    List<Transaction> findByTransactionDateBetween(Calendar startDate, Calendar endDate);
    List<Transaction> findByCustomer(Optional<Customer> customer);
}
