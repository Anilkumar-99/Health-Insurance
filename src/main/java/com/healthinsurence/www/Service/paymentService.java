package com.healthinsurence.www.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthinsurence.www.Entity.Payment;
import com.healthinsurence.www.Repositary.paymentRepo;
@Service
public class paymentService {
	@Autowired
	paymentRepo paymentrepo;
	
	

	public Payment addCustomer(Payment payment) {
		// TODO Auto-generated method stub
		return paymentrepo.save(payment);
	}
	
	
	
}
