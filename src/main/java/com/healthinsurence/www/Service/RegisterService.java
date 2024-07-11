package com.healthinsurence.www.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthinsurence.www.Entity.Loginpage;
import com.healthinsurence.www.Entity.Registration;
import com.healthinsurence.www.Repositary.LoginRepository;
import com.healthinsurence.www.Repositary.RegistrationReposotory;

@Service
public class RegisterService {
	
	@Autowired
	RegistrationReposotory registerRepo;
	@Autowired
	LoginRepository loginRepositary;	
	public Registration addregister(Registration register) {
		Registration reg=registerRepo.save(register);
		  Loginpage userlogin = new Loginpage();

		 userlogin.setUsername(reg.getEmail());
		 userlogin.setUserpassword(reg.getPassword());
		loginRepositary.save(userlogin);
		
		return registerRepo.save(register);
	}
	public List<Registration> getAll() {
		return registerRepo.findAll();
	}
	
	public boolean check(String username,String password) 
	{
		Registration reg=registerRepo.findByEmail(username);
		if(reg==null)
		{
			return false;
		}
		
		return reg.getPassword().equals(password);
	}
	

	public Registration getById(String email) {
		return registerRepo.findByEmail(email);
	}

}