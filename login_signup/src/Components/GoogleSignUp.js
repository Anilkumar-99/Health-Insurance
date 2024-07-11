import React from 'react';
import { GoogleLogin  } from 'react-google-login';
import './Form.css'
const GoogleSignUp = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle successful Google sign-in
  };

  const onFailureGoogle = (error) => {
    console.error(error);
    // Handle failed Google sign-in
  };

  return (
    
    <GoogleLogin
      className=' google mt-2  fw-bold '
      clientId="247096855525-0qp2mpvhn2dggoap7u1341psc1rr7rl0.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={onFailureGoogle}
      cookiePolicy={'single_host_origin'}
    />
   
  );
};

export default GoogleSignUp;