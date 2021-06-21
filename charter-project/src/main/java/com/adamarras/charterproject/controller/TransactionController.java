package com.adamarras.charterproject.controller;

import com.adamarras.charterproject.model.Customer;
import com.adamarras.charterproject.model.Transaction;
import com.adamarras.charterproject.repository.CustomerRepository;
import com.adamarras.charterproject.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TransactionController {

    @Autowired
    public TransactionRepository transactionRepository;

    @Autowired
    public CustomerRepository customerRepository;

    @GetMapping("/inputs")
    public ResponseEntity<List<Transaction>> getAllTransactions(@RequestParam(required = false) Calendar transactionDate) {
        try {
            List<Transaction> transactions = new ArrayList<Transaction>();

            if (transactionDate == null)
                transactionRepository.findAll().forEach(transactions::add);
            else
                transactionRepository.findByTransactionDate(transactionDate).forEach(transactions::add);

            if (transactions.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(transactions, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/transactions-between/{id}/{start-date}/{end-date}")
    public ResponseEntity<List<Transaction>> getAllTransactionsBetweenDates(@PathVariable("id") String id, @PathVariable("start-date") String startDate, @PathVariable("end-date") String endDate) {

        long start = Long.parseLong(startDate);
        Calendar startCal = Calendar.getInstance();
        startCal.setTimeInMillis(start);

        long end = Long.parseLong(endDate);
        Calendar endCal = Calendar.getInstance();
        endCal.setTimeInMillis(end);

        try {
            List<Transaction> transactions = new ArrayList<Transaction>();

            transactionRepository.findByTransactionDateBetween(startCal, endCal).forEach(transactions::add);

            if (transactions.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(transactions, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/customer/{id}/transactions")
    public ResponseEntity<List<Transaction>> getAllTransactionsByCustomer(@PathVariable("id") long id) {
        Optional<Customer> customerData = customerRepository.findById(id);

        try {
            List<Transaction> transactions = new ArrayList<Transaction>();

            transactionRepository.findByCustomer(customerData).forEach(transactions::add);

            if (transactions.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(transactions, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/transactions/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable("id") long id) {
        Optional<Transaction> transactionData = transactionRepository.findById(id);

        if (transactionData.isPresent()) {
            return new ResponseEntity<>(transactionData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
