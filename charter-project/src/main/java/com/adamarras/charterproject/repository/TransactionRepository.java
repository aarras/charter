package com.adamarras.charterproject.repository;

import com.adamarras.charterproject.model.Customer;
import com.adamarras.charterproject.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByTransactionDate(Calendar transactionDate);
    List<Transaction> findByTransactionDateBetween(Calendar startDate, Calendar endDate);
    List<Transaction> findByCustomer(Optional<Customer> customer);

    @Query(value = "SELECT * FROM Transaction t WHERE t.customer_id=:id AND t.transaction_date BETWEEN :startDate AND :endDate", nativeQuery = true)
    List<Transaction> findTransactionByIdWithTransactionDateBetween(
            @Param("id") Long id,
            @Param("startDate") Calendar startDate,
            @Param("endDate") Calendar endDate);
}
