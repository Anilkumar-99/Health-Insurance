import React,{ useState } from 'react'
import './landing.css'
import girl from'./girl.png'
import p from './p.png'
import p2 from './p2.png'
import p3 from './p3.png'
import python from'./python .png'
import fullstack from'./fullstack.png'
import frontend from './frontend .png'
import ss1 from './ss1.png'
import ss2 from './ss2.png'
import ss3 from './ss3.png'
import { Link, } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactError, setContactError] = useState('');
  const [selectedName, setSelectedName] = useState('');
// const navigate = useNavigate();

  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateContact = (contact) => /^\d{10}$/.test(contact); 
  // const validateContact = (contact) => {
  //   if (contact == null && contact == undefined) {
  //     return false;
  //     contactError = true;
  //   }
  //   return /^\d{10}$/.test(contact);

  // };

const handleSubmit = async (e) => {
    let isValid = true;
    try {
      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, contact, selectedName}),
      });
      // console.log(response.data);
      if (!validateName(name)) {
        setNameError('Please enter a valid name');
        isValid = false;
      } else {
        setNameError('');
      }
  
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address');
        isValid = false;
      } else {
        setEmailError('');
      }
  
      if (!validateContact(contact)) {
        setContactError('Please enter a valid 10-digit contact number');
        isValid = false;
      } else {
        setContactError('');
      }
    }
    
    catch (error) {
      console.error('Registration failed:', error.message);
    }
    if (isValid) {
      console.log("Form submitted successfully:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Contact:", contact);
      alert(name + " You have registered successfully")
    }
    e.preventDefault();
  };

return (
<div>
{/* -----------  */}
      <div className="cardone">
        <header className="header">
            <div className="logo">
                <h1>Python  <span>Training</span></h1>
            </div>
                  <div className="nav-links">
                      <ul>
                          <li><a href=".">Home</a></li>
                          <li><a href=".">About</a></li>
                          <li><a href=".">Services</a></li>
                          <Link to='./home' className='rc'><li><a href=".">Courses</a></li></Link>
                          <Link to='/reach'className='rc'><li><a href=".">Contact</a></li></Link>
                          <Link to='/road'className='rc'><li><a href=".">RoadMap</a></li></Link>
                            
                         
        <button type="button" className='reg'  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Register&nbsp;<i className="fa-solid fa-right-to-bracket text-light"></i>
</button>


<div>
  <form onSubmit={handleSubmit}>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content color">
          <div className="modal-header">
          <h5 className="modal-title text-dark" id="staticBackdropLabel">Welcome To Register Page &nbsp;<i className="fa-solid fa-right-to-bracket text-success"></i></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

          <div className=" w-100  p-1">
          <h2 className="text-primary text-center">Register Form</h2>

          <div className="mt-3">
            <label className='font'>Name :-</label>
            <input type='name' className='form-control' value={name} name='name' maxLength={30} onChange={(e) => setName(e.target.value)} required />
            {nameError && <p className="text-danger">{nameError}</p>}
          </div>

          <div className="mt-3">
            <label className='font'>Email :-</label>
            <input type='email' className='form-control' value={email} name='email' required onChange={(e) => setEmail(e.target.value)} />
            {emailError && <p className="text-danger">{emailError}</p>}
          </div>

          <div className="mt-3">
            <label className='font'>Contact :-</label>
            <input type='num' className='form-control' value={contact} name='contact' onChange={(e) => setContact(e.target.value)} required/>
            {contactError && <p className="text-danger">{contactError}</p>}
          </div> 

          <div className="mt-2">
          <label className="font">Select a Course:</label>
                  <select className="form-control" value={selectedName} name='selectedName' required onChange={(e) => setSelectedName(e.target.value)}>
                            <option value="">Select...</option>
                            <option >Complete  Python</option>
                            <option >Python Fullstack</option>
                            <option >Frontend</option>
                  </select>
          </div>

          <div className="mt-3">
            <button className="btn btn-danger mt-2 regbutton">Register</button>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>




                      </ul>
            </div>
        </header>                             
      </div>
{/* ------------- */}

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner slid">
    <div className="carousel-item active">
      <img src={ p }className="d-block p" alt='p'/>
    </div>
    <div className="carousel-item">
      <img src={ p2 }className="d-block p2"  alt='p2'/>
    </div>
    <div className="carousel-item">
      <img src={ p3 }className="d-block p3" alt='p3'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
     </div>
{/* ---------------- */}
         <div className="cir">
              <img src={girl} className='girl'alt=''/>
              </div>
              <div>
              <h1 className='am'>About <span></span>Me</h1>
               <h6 className='para'>Beyond the confines of the classroom, I'm an active participant in the global<br></br><p></p> Python community, sharing insights and exchanging ideas with fellow Beyond the confines of <br></br><p></p>the classroom, I'm an active participant in the globalBeyond the confines of the classroom, <br></br><p></p>I'm an active participant in the global  enthusiasts, Beyond technical expertise.</h6>
               <a href='.' className='more'>More info ...</a>
         </div>
{/* ------------------ */}
              <div>
                  <h1 className='co'>Courses Offering</h1><p></p>
                  <p className='para'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do <br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>
{/* ------------------ */}
            <div className='d-flex'>  

                      <div className="car1">
                        <img  src={python } className='a' alt='phy'/>
                        <h2  className='head'>Complete Python</h2>
                        <div className='detail'>
                        <h4 className='text-secondary'>Chaitanya Reddy</h4>
                         <h4 className='text-dark'>IIT Roorke Alumni</h4>
                         <p>4.7  &nbsp;<i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-regular fa-star text-warning"></i>&nbsp; ( 1674 )</p>
                         </div>
                         <Link to='/Card1'><button type="button" className="btn btn-light" id='mi'>More Info&nbsp; <i className="fa-solid fa-circle-info text-info"></i></button></Link>
                      </div>

                      <div className="car2">
                        <img  src={fullstack } className='b' alt='full'/>
                        <h2  className='head'>Python Fullstack</h2>
                        <div className='detail'>
                        <h4 className='text-secondary'>Chaitanya Reddy</h4>
                         <h4 className='text-dark'>IIT Roorke Alumni</h4>
                         <p>4.7   &nbsp;<i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-regular fa-star text-warning"></i>&nbsp;  ( 1987 )</p>
                         </div>
                         <Link to='/Card2'><button type="button" className="btn btn-light" id='mi'>More Info&nbsp; <i className="fa-solid fa-circle-info text-info"></i></button></Link>
                      </div>

                      <div className="car3">
                         <img  src={frontend } className='c' alt='fro'/>
                         <h2 className='head'>Frontend</h2>
                         <div className='detail'>
                         <h4 className='text-secondary'>Chaitanya Reddy</h4>
                         <h4 className='text-dark'>IIT Roorke Alumni</h4>
                         <p>4.7&nbsp;  <i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-regular fa-star text-warning"></i>&nbsp; ( 2202 )</p>
                         </div>
                         <Link to='/Card3'><button type="button" className="btn btn-light" id='mi'>More Info&nbsp; <i className="fa-solid fa-circle-info text-info"></i></button></Link>
                      </div>
            </div>    
{/* --------------------------- */}
                 <div>
                        <h1 className='co1'>Course   Speculations</h1><p></p>
                        <p className='para2'>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do <br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                </div>
{/* ------------------------------ */}
                   <div className='d-flex'>

                         <div className="sc1">
                         <i className="fa-solid fa-video fa-2xl icons" style={{color: `#ff0000`}}></i>
                         <h3 className='sh'>Screen Recording</h3>
                         <p className='sp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do ut labore et dolore magna aliqua.</p>
                         </div>
                         
                         <div className="sc2">
                         <i className="fa-solid fa-file-pdf fa-2xl icons" style={{color: `#ff0000`}}></i>
                         <h3 className='sh'>Course Material</h3>
                         <p className='sp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do ut labore et dolore magna aliqua.</p>
                         </div>

                         <div className="sc3">
                         <i className="fa-solid fa-gauge-high fa-2xl icons" style={{color: `#ff0000`}}></i>
                         <h3 className='sh'>Assignments</h3>
                         <p className='sp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do ut labore et dolore magna aliqua.</p>
                         </div>

                         <div className="sc4">
                         <i className="fa-solid fa-clipboard fa-flip-vertical fa-2xl icons" style={{color: `#ff0000`}}></i>
                         <h3 className='sh'>Accissable Trainer</h3>
                         <p className='sp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do ut labore et dolore magna aliqua.</p>
                         </div>

                   </div>
{/* ------------------------------- */}
                  <div className='d-flex'>

                    <div className="sc5">
                    <i className="fa-solid fa-circle-question fa-2xl icons1" style={{color: `#ff0000`}}></i>
                    <h3 className='sh1'>Question Hour</h3>
                    <p className='sp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="sc6">
                    <i className="fa-solid fa-network-wired fa-2xl icons1" style={{color: `#ff0000`}}></i>
                    <h3 className='sh1'>Tests & Interviews</h3>
                     <p className='sp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="sc7">
                    <i className="fa-solid fa-hourglass-half fa-2xl icons1" style={{color: `#ff0000`}}></i>
                    <h3 className='sh1'>Highlight IMP</h3>
                    <p className='sp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="sc8">
                    <i className="fa-solid fa-magnifying-glass fa-flip-horizontal fa-2xl icons1"style={{color:`#ff0000`}}></i>
                    <h3 className='sh3'>100% Job Assistance</h3>
                    <p className='sp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do ut labore et dolore magna aliqua.</p>
                    </div>

                  </div>
{/* ---------------------------- */}
                     <div>
                        <h1 className='co2'>Students  Stories</h1><p></p>
                        <p className='para3'>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do <br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                     </div>
{/* ------------------------ */}
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators slid2">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ ss1 }className="d-block ss1" alt='ss1'/>
    </div>
    <div className="carousel-item">
      <img src={ ss2 }className="d-block ss2" alt='ss2'/>
    </div>
    <div className="carousel-item">
      <img src={ ss3 }className="d-block ss3" alt='ss3'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>     
{/* ---------------------- */}
            <div className="ca1">
                <footer className='footer'>
                   <div className='logo1'>
                      <h1>Python  <span>Training</span></h1>
                   </div>
                </footer>
            </div>

            <div className="nav-links1">
                      <ul>
                          <li><a href="..">Home</a></li>
                          <li><a href="..">About</a></li>
                          <li><a href="..">Services</a></li>
                          <li><a href="..">Testimonials</a></li>
                          <li><a href="..">Contact</a></li>
                      </ul>
            </div>
{/* --------------------- */}            
                 <div>

                        <i className="fa-brands fa-square-instagram fa-2xl insta" style={{color: `#ff0066`}}></i>
                        <i className="fa-brands fa-square-facebook fa-2xl fb" style={{color: `#007bff`}}></i>
                        <i className="fa-brands fa-twitter fa-2xl twi" style={{color: `#00e1ff`}}></i>
                        <i className="fa-brands fa-linkedin fa-2xl lin" style={{color: `#0925ae`}}></i>

                 </div>      
</div>
  )}
  ;

export default LandingPage;