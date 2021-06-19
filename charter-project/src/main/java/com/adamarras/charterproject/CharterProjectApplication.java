package com.adamarras.charterproject;

import com.adamarras.charterproject.model.Customer;
import com.adamarras.charterproject.model.Transaction;
import com.adamarras.charterproject.repository.CustomerRepository;
import com.adamarras.charterproject.repository.TransactionRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.Calendar;

@SpringBootApplication
public class CharterProjectApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext configurableApplicationContext =
				SpringApplication.run(CharterProjectApplication.class, args);
		CustomerRepository customerRepository =
				configurableApplicationContext.getBean(CustomerRepository.class);
		Customer customer = new Customer("Adam", "Arras");
		customerRepository.save(customer);

	}

}
