import React from 'react'
import queries from './queries.png'
import partnership from './partnership.png'
import registration from './registration.png'
import './reach.css'
const ReachUs = () => {
  return (
<div>

     <div className="container">
        <div className='img05'>
            <img src={ queries } style={{height:`270px`,width:`350px` }}/>
            <img src={ partnership } className='par' style={{height:`270px`,width:`350px`}}/>
            <img src={ registration } className='re' style={{height:`270px`,width:`350px`}}/>
        </div>


                <div className='d-flex'>
                       <div className="c2"><i class="fa-solid fa-phone fa-bea fa-2xl text-success call"></i><h5 className='p1'>Call us on (9 am to 9 pm IST)<p className='num'>+91 9701 37 97 97</p></h5></div>
                       <div className="cthree"><i class="fa-regular fa-envelope fa-bea fa-2xl mail" style={{color: `#cc2424`}}></i><h5 className='p2'>E- Mail us to<p className='email'>python.trainer.helper@gmail.com</p></h5></div>
                       <div className="cfour"><i class="fa-brands fa-square-whatsapp fa-bea-fade fa-2xl wh" style={{color: `#00ff11`}}></i><h5 className='p3'>Chat us on whatsapp:<p className='what'>+91 9701 37 97 97 [ 24/7 ]</p></h5></div>
                </div>
                <div className='d-flex'>
                       <div className="c5"><i class="fa-brands fa-youtube fa-bea-fade fa-2xl yo" style={{color: `#ff0000`}}></i><h5 className='p4'>Follow us on Youtube Channel:<p className='you'>@python.trainer.helper (for more details...)</p></h5></div>
                       <div className="csix"><i class="fa-brands fa-square-instagram fa-bea-fade fa-2xl ins" style={{color: `#ff006f`}}></i><h5 className='p5'>Follow us on Instagram:<p className='inst'>python.trainer.helper</p></h5></div>
                </div>
     </div>
    
</div>
  )
}
export default ReachUs;








// import React from 'react';
// import queries from './queries.png';
// import partnership from './partnership.png';
// import registration from './registration.png';
// import './reach.css';

// const ReachUs = () => {
//   return (
//     <div className="reach-container">
//       <div className="image-container">
//         <img src={queries} alt="queries" />
//         <img src={partnership} alt="partnership" />
//         <img src={registration} alt="registration" />
//       </div>

//       <div className="contact-info">
//         <div className="contact-item">
//           <i className="fa-solid fa-phone fa-bea fa-2xl text-success call"></i>
//           <h5>Call us on (9 am to 9 pm IST)</h5>
//           <p className="contact-details">+91 9701 37 97 97</p>
//         </div>

//          <div className="contact-item">
//            <i className="fa-regular fa-envelope fa-bea fa-2xl mail" style={{ color: `#cc2424` }}></i>
//            <h5>E-Mail us to</h5>
//            <p className="contact-details">python.trainer.helper@gmail.com</p>
//          </div>

//          <div className="contact-item">
//            <i className="fa-brands fa-square-whatsapp fa-bea-fade fa-2xl wh" style={{ color: `#00ff11` }}></i>
//            <h5>Chat us on WhatsApp:</h5>
//            <p className="contact-details">+91 9701 37 97 97 [ 24/7 ]</p>
//          </div>

//          <div className="contact-item">
//            <i className="fa-brands fa-youtube fa-bea-fade fa-2xl yo" style={{ color: `#ff0000` }}></i>
//            <h5>Follow us on Youtube Channel:</h5>
//            <p className="contact-details">@python.trainer.helper (for more details...)</p>
//          </div>

//          <div className="contact-item">
//            <i className="fa-brands fa-square-instagram fa-bea-fade fa-2xl ins" style={{ color: `#ff006f` }}></i>
//            <h5>Follow us on Instagram:</h5>
//            <p className="contact-details">python.trainer.helper</p>
//          </div>
//        </div>
//      </div>
//   );
// };

// export default ReachUs;
