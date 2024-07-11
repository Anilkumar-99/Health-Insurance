import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import pageturner from "../Profiledetails/page-turner.png";
import { ReactComponent as StickerSVG } from "../Profiledetails/health.svg";
import { ReactComponent as CustomerSVG } from "../Profiledetails/Customer.svg";
import { handleEmailOtp } from "../Profiledetails/otpFunctions";
import Headercopy from './Header copy';
import "./Profile.css";
import fileDownload from "js-file-download";

function Profile() {
  const [policyvalues, setPolicyValues] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [otpMode, setOtpMode] = useState(false);
  const [emailOtpMode, setEmailOtpMode] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [phoneEditMode, setPhoneEditMode] = useState(false);
  const [newPhoneNumberError, setNewPhoneNumberError] = useState("");
  const [emailEditMode, setEmailEditMode] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [emailError, setEmailError] = useState("");
  const [generatedEmailOtp, setGeneratedEmailOtp] = useState("");
  const [otpMailSendMsg,setOtpMailSendMsg] = useState('')
  const [generatedNumberOtp, setGeneratedNumberOtp] = useState("");
  const [otpNumberSendMsg,setOtpNumbersendMsg] =useState('')

  const location = useLocation();
  const initialValues1 = location.state?.values1 || JSON.parse(localStorage.getItem('values1')) || {};
  const [values1, setValues1] = useState(initialValues1);
 
  console.log(values1+"yuuyuuio");
  const [values, setValues] = useState({});

  console.log(values.firstname+"99999999")
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const registerResponse = await axios.get(
          `http://192.168.1.2:9098/register/getById/${values1}`
        );
        setValues(registerResponse.data);
        console.log(values.email+"this is values");

        const paymentResponse = await axios.get(
          `http://192.168.1.2:9098/payment/getCustomerDetailsByMail/${values1}`
          
        );
        console.log(values.username+"edee raa ");
        setPolicyValues(paymentResponse.data);
        console.log(policyvalues+"policy values::::::::::")
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (values1) {
      fetchData();
    }
  }, [values1, values.email]);

  const generateOtp = (length) => {
    const characters = "0123456789";
    let otp = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      otp += characters.charAt(index);
    }
    return otp;
  };

  const handleSendOtp = async () => {
    const mobileno = newPhoneNumber;
    const otp = generateOtp(6);
    setGeneratedOtp(otp);

    const proxyUrl = `http://192.168.1.2:9098/register/sendOtp?mobileno=${mobileno}&otp=${otp}`;
    try {
      const response = await axios.get(proxyUrl);
      if (response.data.status === "success") {
        // alert("OTP sent successfully");
        setOtpNumbersendMsg('Email OTP sent successfully')
        setGeneratedNumberOtp(String(response.data))
        console.log('otp:'+response.data);
        setOtpMode(true);
      } else {
        // alert("Failed to send OTP");
        setOtpNumbersendMsg('Failed to send Email OTP')
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleSendEmailOtp = async () => {
    const useremail = newEmail;
    // const otp = generateOtp(6);
    // setGeneratedEmailOtp(otp);

    const proxyUrl = `http://192.168.1.2:9098/register/sendEmail/emailUpdation/${useremail}`;
    try {
      const response = await axios.post(proxyUrl);
      if (response.data) {
        // alert("Email OTP sent successfully");
        setOtpMailSendMsg('Email OTP sent successfully')
        setGeneratedEmailOtp(String(response.data))
        console.log('otp:'+response.data);
        setEmailOtpMode(true);
      } else {
        // alert("Failed to send Email OTP");
        setOtpMailSendMsg('Failed to send Email OTP')
      }
    } catch (error) {
      console.error("Error sending Email OTP:", error);
    }
  };

  const handleOtpSubmit = async () => {
    if (otp === generatedNumberOtp) {
      try {
        await axios.put(
          `http://192.168.1.2:9098/register/user/update/${values.email}`,
          {
            ...values,
            contactNo: newPhoneNumber,
          }
        );
        alert("Phone number updated successfully");
        setValues((prevValues) => ({
          ...prevValues,
          contactNo: newPhoneNumber,
        }));
        setOtpMode(false);
        setPhoneEditMode(false);
      } catch (error) {
        console.error("Error updating phone number:", error);
      }
    } else {
      alert("Invalid OTP");
      setOtp("");

    }
    setOtp("");

  };

  const handleEmailOtpSubmit = async () => {
    if (emailOtp === generatedEmailOtp) {
      try {
        await axios.put(
          `http://192.168.1.2:9098/register/user/update/${values.email}`,
          {
            ...values,
            email:newEmail
          }
        );
        alert("Email updated successfully");
        setValues((prevValues) => ({
          ...prevValues,
          email: newEmail,
        }));
        setValues((prevValues1) => ({
          ...prevValues1,
          username: newEmail,
        }));
        setEmailOtpMode(false);
        setEmailEditMode(false);
      } catch (error) {
        console.error("Error updating email:", error);
        alert("Error updating email. Please try again.");
      }
    } else {
      alert("Invalid Email OTP");
      setEmailOtp("");
    }
    setEmailOtp("");

  };

  const handleContentChange = (key, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: newValue,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://192.168.1.2:9098/register/user/update/${values.email}`,
        values
      );
      alert("Details updated successfully");
      setEditMode(false);
    } catch (error) {
      console.error("Error updating details:", error);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handlePhoneEditClick = () => {
    setPhoneEditMode(true);
  };

  const handleEmailEditClick = () => {
    setEmailEditMode(true);
  };

  const phoneRegex = /^[6-9]{1}[0-9]{9}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validatePhoneNumber = (number) => phoneRegex.test(number);
  const validateEmail = (email) => emailRegex.test(email);

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setNewPhoneNumber(value);

    if (!validatePhoneNumber(value)) {
      setNewPhoneNumberError("Enter a valid phone number");
    } else {
      setNewPhoneNumberError("");
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setNewEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const handleVerifyPhone = () => {
    if (validatePhoneNumber(newPhoneNumber)) {
      handleSendOtp();
    } else {
      setNewPhoneNumberError("Enter a valid phone number");
    }

  };

  const handleVerifyEmail = () => {
    if (validateEmail(newEmail)) {
      handleSendEmailOtp();
    } else {
      setEmailError("Enter a valid email");
    }

  };

  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/PolicyDetails", { state: { values1 } });
  };
  const handleDownloadInvoice = async (policyId) => {
    try {
      const response = await axios.get(`http://192.168.1.2:9098/payment/create?userId=${policyId}`, {
        responseType: 'blob', // Important to handle binary data
      });
  
      // Use the 'fileDownload' package to handle the download
      const fileName = `invoice_${policyId}.pdf`; // You can customize the file name
      fileDownload(response.data, fileName);
      console.log(`Invoice downloaded for policyId: ${policyId}`);
    } catch (error) {
      console.error(`Error downloading invoice for policyId: ${policyId}, error`);
    }
  };

  return (
<div>
      <div className="text-light">.</div>
      <div>
      <h1 className="light fixed" style={{marginTop:"61px"}}><i class="animation"></i>Profile<i class="animation"></i></h1></div><br/>

      <Headercopy />
{/* ------------- */}
  <div className="col">
                <div className="col-3 mx-1 profilesidediv">
                    {/* <h1 className="h1prf font" style={{marginTop:"20%"}}>My Profile &nbsp;<i class="fa-solid fa-address-card fa-xs text-dark"></i></h1> */}
                    <div class="kard"style={{marginTop:"-1%"}}>
                           <div class="btn1"></div>
                           <div class="btn2"></div>
                           <div class="btn3"></div>
                           <div class="btn4"></div>
                    <div class="kard-int">
                    <h1 className="text-light fw-bold font h1prf"><span className="mx-3">My Profile</span><i class="fa-solid fa-address-card fa-xs text-dark"></i></h1>
                    <h6 className="text-dark fw-bold mx-2 font">Name &nbsp;&nbsp; &nbsp; &nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-primary">{values.firstname}</span></h6>
                    <h6 className="text-dark fw-bold mx-2 font">D O B &nbsp;&nbsp; &nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary font">{values.dateofbirth}</span></h6>
                    <h6 className="text-dark fw-bold mx-2 font">Gender &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; &nbsp; &nbsp;<span className="text-primary">{values.gender}</span></h6>
                    <div className="d-flex">
                    <div><h6 className="text-dark fw-bold mx-2 font"> Ph-No &nbsp;&nbsp; &nbsp; &nbsp;:</h6></div>
                    <div>
                    {phoneEditMode ? (
                <>
                  <input
                    type="text"
                    value={newPhoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Enter new phone number"
                    maxLength={10}
                  /> &nbsp;
                  <button
                    className="btn btn-success font fw-bold btn-sm"
                    onClick={handleVerifyPhone}
                  >
                    V e r i f y
                  </button>
                  <p className="text-success fw-bold font">{otpNumberSendMsg}</p>
                  {newPhoneNumberError && (
                    <div className="text-danger">{newPhoneNumberError}</div>
                  )}
                </>
              ) : (
                <div className="d-flex align-items-center">
                  <h6 className="text-primary mb-0 font mx-3">{values.contactNo}</h6>
                  <button
                    className="btn btn-link p-0 ms-2"
                    onClick={handlePhoneEditClick}
                  >
                    <FontAwesomeIcon icon={faEdit}  className="text-success"/>
                  </button>
                </div>
              )}  
              </div>
              </div>
            {otpMode && (
            <div className="row mb-4">
              <div className="col-2">
                <h6 className="text-dark fw-bold font mx-4 font">OTP</h6>
              </div>
              <div className="col-8 mx-4">
                <input
                  type="text"
                  className="mt-2"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  placeholder="Enter OTP"
                /> &nbsp;
                <button
                  className="btn btn-primary btn-sm mt-2 fw-bold font"
                  onClick={handleOtpSubmit}
                >
                  S u b m i t
                </button>
              </div>
            </div>
          )}
          <div className="d-flex">
                <div><h6 className="text-dark fw-bold font mx-2">E-Mail&nbsp;&nbsp;&nbsp; &nbsp; :</h6></div>
            <div>
                {emailEditMode ? (
                <>
                  <input
                    type="text"
                    className=""
                    value={newEmail}
                    onChange={handleEmailChange}
                    placeholder="Enter new E-Mail"
                  /> &nbsp;
                  <button
                    className="btn btn-success font fw-bold btn-sm"
                    onClick={handleVerifyEmail}
                  >
                    V e r i f y
                  </button>
                  <p className="text-success fw-bold font">{otpMailSendMsg}</p>
                  {emailError && (
                    <div className="text-danger">{emailError}</div>
                  )}
                </>
              ) : (
                <div className="d-flex align-items-center">
                  <h6 className="text-primary mb-0 font mx-3">{values.email}</h6>
                  <button
                    className="btn btn-link p-0 ms-2"
                    onClick={handleEmailEditClick}
                  >
                    <FontAwesomeIcon icon={faEdit}className="text-success" />
                  </button>
                </div>
              )}
              </div>
              </div>
            {emailOtpMode && (
            <div className="row mb-3">
              <div className="col-2">
                <h6 className="text-dark fw-bold font mx-4">OTP</h6>
              </div>
              <div className="col-8 mx-4 mt-2">
                <input
                  type="email"
                  value={emailOtp}
                  onChange={(e) => setEmailOtp(e.target.value)}
                  maxLength={6}
                  placeholder="Enter OTP"
                />
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={handleEmailOtpSubmit}
                >
                  S u b m i t
                </button>
              </div>
            </div>
          )}
         <h6 className="text-dark fw-bold ms-2 font">Marital_Status :&nbsp;&nbsp;&nbsp;<span className="text-primary fw-bold font">{values.maritual}</span></h6>
                        
     
                    </div>
                       <div class="top">
                         <div class="camera">
                           <div class="int"></div>
                         </div>
                         <div class="speaker"></div>
                       </div>
                     </div>
    </div>
{/* ---------------------------------- */}
    <div className="cord" style={{marginLeft:"26%",marginTop:"5%"}}> 
       <h5 className="fw-bold fs-5 font">Welcome : &nbsp;<span className="text-primary font">{values.firstname}</span></h5>
       <h5 className=" me-1 fw-bold font">Phone No : <span className="text-primary font">{values.contactNo}</span></h5>
    </div>
{/* -----------------------------------*/}
<div className="overflow-y-scroll col-9 row" style={{float:'right',marginTop:"1%"}}>
  {Array.isArray(policyvalues) &&
    policyvalues.map((policy, index) => (
      <div key={index} className="card shadow mt-3">
        <div className="card-header pcdetails d-flex justify-content-between flex-wrap">
          <h5 className="text-end mt-2 mt-md-0">
            <span className="fw-bold font text-primary fs-5">Policy Details :-</span>
          </h5>
        </div>
        <div className="card-body">
          <div className="row pcdetails">
            <div className="col-md-6" style={{ borderRight: 'solid 2px #dcdcdc' }}>
              <p className="card-text fw-bold fs-5 font">Payment Id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="text-secondary fs-6">&#8377;{policy.userId}</span></p>
              <p className="card-text fw-bold fs-5 font">Duration  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="text-secondary fs-6">{policy.duration}</span></p>
                <p className="card-text fw-bold fs-5 font">Insurance Cover  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="text-secondary fs-6">{policy.insurence_cover}</span></p>
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <p className="card-text fw-bold fs-5 font">Interest&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="text-secondary fs-6">{policy.intrest}</span></p>
              <p className="card-text fw-bold fs-5 font">Plan Type &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="text-secondary fs-6">{policy.planType}</span></p>
              <p className="card-text fw-bold fs-5 font">Relation Type&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="text-secondary fs-6">{policy.relationType}</span></p>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <button
                      className="btn btn-success fw-bold" 
                      onClick={() => handleDownloadInvoice(policy.userId)}
                    >
                    Invoice &nbsp;<i class="fa-solid fa-download fa-fade"></i>
                    </button>
          </div>
        </div>
      </div>
    ))}
    
    <div className="text-center mt-5 mb-4 me-3">
          <button className="btn btn-outline-primary font fw-bold" onClick={handleNavigate}>
            Take New Policy
          </button>
        </div>
     </div>
</div>


      <div className="offcanvas offcanvas-start" 
      style={{width:"30%"}}
      tabIndex="-10" 
      id="offcanvas" 
      aria-labelledby="offcanvasExampleLabel">
        <div className="container text-center">
        </div>
        <div className="offcanvas-header d-flex justify-content-center p-2 mb-3 text-danger">
      <h4 className="offcanvas-title text-light fw-bold text-light mb-1">My Profile &nbsp;<i class="fa-regular fa-id-card text-dark"></i></h4>
        
        </div>

        <div className="container">
          <div className="row mb-3">
            <div className="col-4">
              <h6 className="text-dark fw-bold">Name :</h6>
            </div>
            <div className="col-8">
              <h6 className="text-primary">{values.firstname}</h6>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-4">
              <h6 className="text-dark fw-bold">Date of Birth :</h6>
            </div>
            <div className="col-8">
              <h6 className="text-primary">{values.dateofbirth}</h6>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-4">
              <h6 className="text-dark fw-bold">Gender :</h6>
            </div>
            <div className="col-8">
              <h6 className="text-primary">{values.gender}</h6>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-4">
              <h6 className="text-dark fw-bold">Phone Number :</h6>
            </div>
            <div className="col-8">
              {phoneEditMode ? (
                <>
                  <input
                    type="text"
                    value={newPhoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Enter new phone number"
                  /> &nbsp;
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleVerifyPhone}
                  >
                    Verify
                  </button>
                  {newPhoneNumberError && (
                    <div className="text-danger">{newPhoneNumberError}</div>
                  )}
                </>
              ) : (
                <div className="d-flex align-items-center">
                  <h6 className="text-primary mb-0">{values.contactNo}</h6>
                  <button
                    className="btn btn-link p-0 ms-2"
                    onClick={handlePhoneEditClick}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </div>
              )}
            </div>
          </div>
          {otpMode && (
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="text-dark fw-bold">OTP</h6>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  placeholder="Enter OTP"
                />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleOtpSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          <div className="row mb-3">
            <div className="col-4">
              <h6 className="text-dark fw-bold">E-Mail :</h6>
            </div>
            <div className="col-8">
              {emailEditMode ? (
                <>
                  <input
                    type="text"
                    className=""
                    value={newEmail}
                    onChange={handleEmailChange}
                    placeholder="Enter new E-Mail"
                  />&nbsp;
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleVerifyEmail}
                  >
                    Verify
                  </button>
                  {emailError && (
                    <div className="text-danger">{emailError}</div>
                  )}
                </>
              ) : (
                <div className="d-flex align-items-center">
                  <h6 className="text-primary mb-0">{values.email}</h6>
                  <button
                    className="btn btn-link p-0 ms-2"
                    onClick={handleEmailEditClick}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </div>
              )}
            </div>
          </div>
          {emailOtpMode && (
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="text-dark fw-bold">OTP</h6>
              </div>
              <div className="col-8">
                <input
                  type="email"
                  value={emailOtp}
                  onChange={(e) => setEmailOtp(e.target.value)}
                  maxLength={6}
                  placeholder="Enter OTP"
                />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleEmailOtpSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="row mb-3">
          <div className="col-4">
            <h6 className="text-dark fw-bold ms-2">Marital_Status :</h6>
          </div>
          <div className="col-8">
            <h6 className="text-primary">{values.maritual}</h6>
          </div>
        </div>
        {/* <div className="offcanvas-footer">
          {editMode ? (
            <button className="btn btn-primary" onClick={handleSave}>
              <FontAwesomeIcon icon={faCheck} /> Save
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} /> Edit Profile
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default Profile;