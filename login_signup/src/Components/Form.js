import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import './Form.css';
import GoogleSignUp from "./GoogleSignUp";

function Form(){

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword  = (password) => {
  const passwordRegex =  /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,8}$/;
    return passwordRegex.test(password);
    
  };

  const handleSubmit = () => {
    let isValid = true;
    if(!validateName(name)){
      setNameError('Please enter a valid name');
      isValid = false;
    } else {
      setNameError('');
    }     

    if(!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }else{
      setEmailError('');
    }

    if(!validatePassword(password)) {
       setPasswordError('Please enter a valid password');
       isValid = false;
    } else {
      setPasswordError('');
    }

    if(isValid) {
      console.log("Form submitted successfully:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      navigate('/Login');
    }
    };
    
  return(
    <>
    <div className="border w-25 mt-5 m-auto p-3">
 
      <h2 className="text-primary text-center">Login Form</h2>

      <div className="mt-3">
        <label>Name</label>
        <input type='text'className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} />
        {nameError && <p className="text-danger">{nameError}</p>}
        </div> 

      <div className="mt-3">
        <label>Email</label>
        <input type='email'className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          {emailError && <p className="text-danger">{emailError}</p>}
      </div>

      <div className="mt-3">
        <label>Password</label>
        <input type='password'className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        {passwordError && <p className="text-danger">{passwordError}</p>}
      </div>

      <div className="mt-3">
        <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
        <button className="btn btn-primary with-margin-left ">Signup</button>
      </div>

    </div>
    <GoogleSignUp />
    </>
  )
}

export default Form;