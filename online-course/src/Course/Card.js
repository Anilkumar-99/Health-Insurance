import React,{ useState }from 'react'
import './card.css';
import python from'./python .png'
import fullstack from './fullstack.png';
import frontend from './frontend.png'
import { Link } from 'react-router-dom';
import lady from './lady.png'

const Card = () => {
  return (
    <div className='total'>
      <div className="card mb-3" style={{maxWidth: '1000px'}}>
  <div className="row g-0">
    <div className="col-md-4">
    <img src={python} className='img1'alt=''/>
    </div>
    <div className="col-md-8">
      <div className="card-body one">
        <h3 className='h1'>( Complete Python )</h3>
        <p className="card-text"><i className="fa-solid fa-calendar-days text-primary"></i>&nbsp;Duration: 1.5 months</p>
        <p className="card-text"><i className="fa-solid fa-calendar-days text-primary"></i>&nbsp;Class Schedule: Mon - Saturday</p>
        <p className="card-text"><i className="fa-solid fa-clock text-danger"></i>&nbsp;Class Time: 7:30 am to 9 am IST</p>
        <p>Cost: Rs. 18000/-&nbsp;<i className="fa-solid fa-indian-rupee-sign text-success"></i></p>
        <p>Course Content:&nbsp;<i className="fa-solid fa-file-pdf text-danger"></i></p>
        <p className="card-text"><h5>Description :</h5></p>
        <p className="card-text">Student's Rating&nbsp;<i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-regular fa-star text-warning"></i></p>
        <p className="card-text">Number of Ratings : (404)&nbsp;<i className="fa-solid fa-user text-primary"></i></p>

        <Link to='/details'><p className="card-text my-1"><div className="tooltipCsss">
                  Trainer Details
                    <span className="tooltiptextCsss">
                    <img src={lady }className="img" alt="Image"/>
                    <p>Jill Anderson<br/>
                    Age : 50 yrs<br/>
                    Experience : 22 yrs<br/>
                    Rating:&nbsp;<i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></p>
                    </span>
                  </div></p></Link>

        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Demo Video <i className="fa-brands fa-youtube" style={{color: '#ff0000'}}></i>
        </button>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel"><div className="shadow-lg p-3 mb-5 bg-body rounded">Demo video</div></h5>
      </div>
      <div className="modal-body mx-4">
      <iframe width="400" height="250" src="https://www.youtube.com/embed/t2_Q2BRzeEE?si=ViRhD_vcYciQJI3b" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close&nbsp;<i className="fa-solid fa-xmark"></i></button>
        <button type="button" className="btn btn-primary">Download&nbsp;<i className="fa-regular fa-circle-down"></i></button>
      </div>
    </div>
  </div>
</div><p></p>
        <a href='Schedule'className='sch'>Schedule</a><p></p>
        <p className="card-text">Next batch: 23rd May 2024, Batch-65&nbsp;</p>
        <p>If you enjoyed this service, please provide your rating:</p>
        <a href="your_rating_form_url_here" className='p'>Provide Rating</a><p></p>
       <button type="button" className="btn btn-outline-primary r">Register&nbsp;<i className="fa-solid fa-registered"></i></button>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3" style={{maxWidth: '1000px'}}>
  <div className="row g-0">
    <div className="col-md-4">
    <img src={fullstack} className='img2'alt=''/>
    </div>
    <div className="col-md-8">
      <div className="card-body one">
        <h3 className='h2'>( Python Fullstack )</h3>
        <p className="card-text"><i className="fa-solid fa-calendar-days text-primary"></i>&nbsp;Duration: 1.5 months</p>
        <p className="card-text"><i className="fa-solid fa-calendar-days text-primary"></i>&nbsp;Class Schedule: Mon - Saturday</p>
        <p className="card-text"><i className="fa-solid fa-clock text-danger"></i>&nbsp;Class Time: 7:30 am to 9 am IST</p>
        <p>Cost: Rs. 18000/-&nbsp;<i className="fa-solid fa-indian-rupee-sign text-success"></i></p>
        <p>Course Content:&nbsp;<i className="fa-solid fa-file-pdf text-danger"></i></p>
        <p className="card-text"><h5>Description :</h5></p>
        <p className="card-text">Student's Rating&nbsp;<i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></p>
        <p className="card-text">Number of Ratings : (404)&nbsp;<i className="fa-solid fa-user text-primary"></i></p>

        <Link to='/details1'><p className="card-text my-1"><div className="tooltipCsss">
                  Trainer Details
                    <span className="tooltiptextCsss">
                    <img src={lady }className="img" alt="Image"/>
                    <p>Jill Anderson<br/>
                    Age : 50 yrs<br/>
                    Experience : 22 yrs<br/>
                    Rating:&nbsp;<i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></p>
                    </span>
                  </div></p></Link> 

<button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#fullstack">
  Demo Video<i class="fa-brands fa-youtube" style={{color: '#ff0000'}}></i>
</button>
<div className="modal fade" id="fullstack" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel"><div className="shadow-lg p-3 mb-5 bg-body rounded">Demo video</div></h5>
      </div>
      <div className="modal-body mx-4">
      <iframe width="400" height="250" src="https://www.youtube.com/embed/tw0UCEePROY?si=p3p8dwIhovBrmjaw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close&nbsp;<i className="fa-solid fa-xmark"></i></button>
        <button type="button" className="btn btn-primary">Download&nbsp;<i className="fa-regular fa-circle-down"></i></button>
      </div>
    </div>
  </div>
</div><p></p>
        <a href='Schedule'className='sch'>Schedule</a><p></p>
        <p className="card-text">Next batch: 23rd May 2024, Batch-65&nbsp;</p>
        <p>If you enjoyed this service, please provide your rating:</p>
       <a href="your_rating_form_url_here" className='p'>Provide Rating</a><p></p>
       <button type="button" className="btn btn-outline-primary r">Register&nbsp;<i className="fa-solid fa-registered"></i></button>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3" style={{maxWidth: '1000px'}}>
  <div className="row g-0">
    <div className="col-md-4">
    <img src={frontend} className='img3'alt=''/>
    </div>
    <div className="col-md-8">
      <div className="card-body one">
      <h3 className='h3'>( Frontend )</h3>
        <p className="card-text"><i className="fa-solid fa-calendar-days text-primary"></i>&nbsp;Duration: 1.5 months</p>
        <p className="card-text"><i className="fa-solid fa-calendar-days text-primary"></i>&nbsp;Class Schedule: Mon - Saturday</p>
        <p className="card-text"><i className="fa-solid fa-clock text-danger"></i>&nbsp;Class Time: 7:30 am to 9 am IST</p>
        <p>Cost: Rs. 18000/-&nbsp;<i className="fa-solid fa-indian-rupee-sign text-success"></i></p>
        <p>Course Content:&nbsp;<i className="fa-solid fa-file-pdf text-danger"></i></p>
        <p className="card-text"><h5>Description :</h5></p>
        <p className="card-text">Student's Rating&nbsp;<i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></p>
        <p className="card-text">Number of Ratings : (404)&nbsp;<i className="fa-solid fa-user text-primary"></i></p>

      <Link to='/details2'><p className="card-text my-1"><div className="tooltipCsss">
                  Trainer Details
                    <span className="tooltiptextCsss">
                    <img src={lady }className="img" alt="Image"/>
                    <p>Jill Anderson<br/>
                    Age : 50 yrs<br/>
                    Experience : 22 yrs<br/>
                    Rating:&nbsp;<i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></p>
                    </span>
                  </div></p></Link>

<button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#frontend">
  Demo Video <i className="fa-brands fa-youtube" style={{color: '#ff0000'}}></i>
</button>
<div className="modal fade" id="frontend" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel"><div className="shadow-lg p-3 mb-5 bg-body rounded">Demo video</div></h5>
      </div>
      <div className="modal-body mx-4">
      <iframe width="400" height="250" src="https://www.youtube.com/embed/gjdBWv0zGb8?si=0PU4RpUO9YHVMX_Z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close&nbsp;<i className="fa-solid fa-xmark"></i></button>
        <button type="button" className="btn btn-primary">Download&nbsp;<i className="fa-regular fa-circle-down"></i></button>
      </div>
    </div>
  </div>
</div><p></p>
        <a href='Schedule' className='sch'>Schedule</a><p></p>
        <p className="card-text">Next batch: 23rd May 2024, Batch-65&nbsp;</p>
        <p>If you enjoyed this service, please provide your rating:</p>
       <a href="your_rating_form_url_here" className='p'>Provide Rating</a><p></p>
       <button type="button" className="btn btn-outline-primary r">Register&nbsp;<i className="fa-solid fa-registered"></i></button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Card;