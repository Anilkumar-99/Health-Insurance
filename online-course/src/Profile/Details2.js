import React from 'react'
import pic from'./pic.png'
import TCS from'./TCS.png'
import hcl from'./hcl.png'
import tm from'./tm.png'
import wipro from'./wipro.png'

const Details2 = () => {
  return (
    <div className='card body1'>
    <div className='d-flex'>
    <div className="BOX1">
    <div className="circle">
    <img src={pic}className='pic' alt=''/>
    </div>
    <h4 className='name'>Anderson</h4>
    <h6 className='ui'>Front-End  &nbsp;<i class="fa-brands fa-html5 fa-lg" style={{color: `#ff6600`}}></i>&nbsp;<i class="fa-brands fa-css3-alt fa-lg" style={{color: `#006eff`}}></i>&nbsp;</h6>
    <p className='paragraph'>I'm looking for a site that will simplify the planning of my business trips.</p>
    <div className="BOX2">
    <div className='details'><p>Age :</p>
    <p>Qualification :</p>
    <p>IT Experience (yrs)</p>
    <p>Training Experience (yrs)</p>
    <p>Rating&nbsp;&nbsp;<i className="fa-solid fa-star text-danger">&nbsp;</i><i className="fa-solid fa-star text-danger">&nbsp;</i><i className="fa-solid fa-star text-danger">&nbsp;</i><i className="fa-solid fa-star text-danger">&nbsp;</i><i className="fa-solid fa-star text-danger"></i></p>
    <p>Courses (Teaches)</p></div>
    </div>
    </div>
           <div className="BOX7">
            <p className='c7p'><h6>B I O :&nbsp;<i class="fa-solid fa-circle-info text-info"></i></h6>&nbsp;D. Chaitanya is a seasoned professional with a robust educational background, holding an M.Tech degree from IIT Roorkee. With over 20 years of experience in the IT industry, Chaitanya has amassed Notably, he trained 60+ batches so far successfully and possess over a decade of experience in training</p>
                           <div class="BOX3">
            <button type="button" className="btn btn-danger pr">Provide Rating&nbsp;<i className="fa-solid fa-face-smile"></i></button>
                <div className="rating star">
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text"></label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text"></label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text"></label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text"></label>
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text"></label>
                 </div>
                       <p className='f'>For more Info :&nbsp;<i class="fa-solid fa-circle-info text-info"></i></p>
                 </div>
          <button type="button" className="btn btn-light youtube" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Trainer Demo&nbsp;<i className="fa-brands fa-youtube" style={{color: '#ff0000'}}></i>
          </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
         <h5 className="modal-title" id="staticBackdropLabel"><div className="shadow-lg p-3 mb-5 bg-body rounded"> Trainer Demo video</div></h5>
         </div>
         <div className="modal-body mx-4">
      <iframe width="400" height="250" src="https://www.youtube.com/embed/t2_Q2BRzeEE?si=ViRhD_vcYciQJI3b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close&nbsp;<i className="fa-solid fa-xmark"></i></button>
        <button type="button" className="btn btn-primary">Download&nbsp;<i className="fa-regular fa-circle-down"></i></button>
      </div>
    </div>
  </div>
</div>
                      <div className="BOX4">
                      <div className='c4'><p className='tr'>All Educational Certificates :&nbsp;<i className="fa-solid fa-certificate text-primary"></i></p>
                           <p>Graduation&nbsp;&nbsp;<i className="fa-solid fa-graduation-cap text-danger"></i></p>
                           <p>Post Graduation&nbsp;&nbsp;<i className="fa-solid fa-graduation-cap text-danger"></i></p></div>
                      </div>
                      </div>
    <div>
                       <div className="BOX5 ">

                       <div className='cir-container'>
                           <div id="cir1"><img className='tcs' src={ TCS }alt=''/></div>
                           <div className="line"></div>
                          <div id="cir2"><img className='hcl' src={ hcl }alt=''/></div>
                         
                       </div>
                       <div >
                             <p id='experience-years1'>2016 To 2020</p>
                             <p id='experience-years2'>2021 To 2024</p>
                       </div>
                                         <div >
                                      <img  className='tm' src={ tm } alt='z'/>
                                      <div className="line1"></div>
                                      <img  className='wip' src={ wipro } alt='a'/>
                          <div >
                             <p id='experience-years3'>2005 To 2006</p>
                             <p id='experience-years4'>2006 To 2010</p>
                         </div>
                                         </div>


                        <div className='d-flex'>
                          <div>
                           <div className="BOX6">
                           <div className='c6'><p className='tr'>Training Experince :</p>
                            <p>1245 students&nbsp;<i className="fa-solid fa-users text-primary"></i></p>
                            <p>64 batches&nbsp;<i className="fa-solid fa-user-group text-info"></i></p>
                            <p>10901 weekly tests&nbsp;<i class="fa-solid fa-newspaper text-primary"></i> </p></div>
                           </div>
                          </div>
                        </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Details2



