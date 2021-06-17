package com.adamarras.charterproject.repository;

import com.adamarras.charterproject.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findByLastNameContaining(String lastName);
    List<Customer> findByFirstNameContaining(String firstName);
}
