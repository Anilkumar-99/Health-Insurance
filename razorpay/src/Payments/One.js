import React, { useState } from 'react';
import Razorpay from 'react-razorpay';
import './payment.css';

function One() {
  const [selectedOption, setSelectedOption] = useState(false);
  
  const handleOptionChange = (event) => {
    if (event.target.value === 'Razorpay') {
      setSelectedOption(true);
    } else {
      setSelectedOption(false);
    }
  };

  const handlePay = () => {
    console.log('Button Clicked! selectedOption',selectedOption);
    const amount = 1000;
    const userDetails ={
      fullName:'Anil Kumar',
      email:   'anilsaaho24@gmail.com'   ,
      mobile:    '8688177649'  ,
      propertyflatNbr:   '123',
      propertyStreet: 'ameerpet',
      propertyPincode: '500038'
    };

const options=
{
key:'rzp_test_Su4WV4zdBIGTmZ',
key_secret:'EmH6eToe5CvCfAfgfADREv3C',
amount: amount, // Amount in paise (e.g., 1000 paise = â‚¹10)
name: 'RS Insurance Company',
description: 'Product/Service Description',
handler: function (response) {

alert(response.razorpay_payment_id);


},
prefill: {
name: userDetails.fullName,
email: userDetails.email,
contact: userDetails.mobile,
},
notes: {
address: userDetails.propertyflatNbr+" ," + userDetails.propertyStreet+" ,"+userDetails.propertyPincode,


},
theme: {
color: 'blue',
},
};
var pay=new window.Razorpay(options);
pay.open();
}

   return (
  <div>
    <ins>
    <header className='b'>Welcome To The Payment Page</header>
    </ins>
    <div className='container'>
    <ins>
    <div>Choose Payment Options :</div>
    </ins>
      <label>
        <input className='c'
          type="radio"
          name='optionchange'
          id='Razorpay'
          value="Razorpay"
          onChange={handleOptionChange}
        />
        Razorpay
      </label>

      <label>
        <input className='c'
          type="radio"
          name='optionchange'
          id='UPI'
          value="UPI"
          onChange={handleOptionChange}
        />
        UPI
      </label>

      <label>
        <input className='c'
          type="radio"
          name='optionchange'
          id='Other options'
          value="Other Options"
          onChange={handleOptionChange} 
        />
        Other Options
      </label>
      <button className='submit' onClick={handlePay} disabled={!selectedOption}>Pay</button>
    </div>
  </div>    
  );
}

export default One;