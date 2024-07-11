package com.healthinsurence.www.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthinsurence.www.Entity.Payment;

@Repository
public interface paymentRepo extends JpaRepository<Payment,  String>{

	
	Payment save(Payment payment);

	

}
