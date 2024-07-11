package com.healthinsurence.www.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthinsurence.www.Entity.Registration;
import com.healthinsurence.www.Service.RegisterService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/register")
public class RegisterController {
	
	@Autowired
	RegisterService registerservice;
	
	@PostMapping("/addregister")
	private Registration addregister(@RequestBody Registration register) {
		return registerservice.addregister(register);
	}
	@GetMapping("/getAll")
	private List<Registration> getAll() {
		return registerservice.getAll();
	}
	
	@GetMapping("/getById/{email}")
	private Registration getById(@PathVariable String email) {
	 return registerservice.getById(email);
		

		
		
	}

}
