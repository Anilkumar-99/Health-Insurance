package com.healthinsurence.www.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthinsurence.www.Entity.Payment;

import com.healthinsurence.www.Service.paymentService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/payment")
public class paymentController {
	@Autowired
	paymentService paymentservice;
	
	@PostMapping("/addCustomer")
	private Payment addCustomer(@RequestBody Payment payment) {
		return paymentservice.addCustomer(payment);
	}

}
