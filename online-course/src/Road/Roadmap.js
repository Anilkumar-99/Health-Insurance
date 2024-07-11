import React,{ useState,useEffect } from 'react';
import './road.css';
import ROAD4 from './ROAD4.png';
import lady from './lady.png';
import { Link } from 'react-router-dom';

const Roadmap = () => {
    const [courseIndex, setCourseIndex] = useState(0);
    const courses = ['Complete  Python  Course  Calendar',
                     'Python  Fullstack  Course  Calendar',
                       'Frontend  Course  Calendar',
                          'All  Courses  Calendar'];
  
    useEffect(() => {
  
      const interval = setInterval(() => {
        setCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
      }, 2000);
  
      return () => clearInterval(interval); 
    }, [courses.length]);
    const [popups, setPopups] = useState({
      red: false,
      blue: false,
      green: false,
      yellow: false,
    });
  
    const togglePopup = (color) => {
      setPopups({ ...popups, [color]: !popups[color] });
    };
  return (
    <div> 
      <h1 className='he'>{courses[courseIndex]}</h1>
          <img src={ROAD4} className='road' alt='' /> 
          {popups.red && (
        <div className='popup' style={{ top: '315px', left: '635px' }}>
           <img src={ lady}alt='' className='lady1'/>
            <div>
          <div>Name: Jill Anderson</div>
          <div>Age: 40</div>
          <div>Experience : 12 years</div>
          <div> 4.2&nbsp;<i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-regular fa-star text-warning"></i></div>
          <button type="button" class="btn btn-primary">Register</button> 
          <Link to='/details'><div><a href='#'>Trainer details </a></div></Link>
          <Link to='/home'><div><a href='#'>More details</a></div></Link>
          </div>
        </div>
      )}
      {popups.blue && (
        <div className='popup' style={{ top: '80px', left: '540px' }}>
             <img src={ lady}alt='' className='lady1'/>
             <div>
          <div>Name: Jill Anderson</div>
          <div>Age: 30</div>
          <div>Experience : 12 years</div>
          <div> 4.2&nbsp;<i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-regular fa-star text-warning"></i></div>
          <button type="button" class="btn btn-primary">Register</button> 
          <div><a href='#'>More Details</a></div>
          </div>
        </div>
      )}
      {popups.green && (
        <div className='popup' style={{ top: '10px', left: '880px' }}>
        <img src={ lady}alt='' className='lady1'/>
        <div>
          <div>Name: Jill Anderson</div>
          <div>Age: 48</div>
          <div>Experience : 12 years</div>
          <div> 4.2&nbsp;<i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-regular fa-star text-warning"></i></div>
          <button type="button" class="btn btn-primary">Register</button> 
          <div><a href='#'>More Details</a></div>
          </div>
        </div>
      )}
      {popups.yellow && (
        <div className='popup' style={{ top: '140px', left: '500px' }}>
        <img src={ lady}alt='' className='lady1'/>
              <div>
          <div>Name: Jill Anderson</div>
          <div>Age: 48</div>
          <div>Experience : 12 years</div>
          <div> 4.2&nbsp;<i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-regular fa-star text-warning"></i></div>
          <button type="button" class="btn btn-primary">Register</button> 
          <div><a href='#'>More Details</a></div>
          </div>
        </div>
      )}
      <div className='locationIcons'>
        <div className='locationIcon' onMouseEnter={() => togglePopup('red')}>
        <i className="fa-solid fa-location-dot fa-beat-fad fa-2xl loc1" style={{ color: 'red' }}><img src={lady} className='lady' alt='' /></i>
        </div>
        <div className='locationIcon' onMouseEnter={() => togglePopup('blue')}>
        <i className="fa-solid fa-location-dot fa-beat-fad fa-2xl loc2" style={{ color: 'blue' }}><img src={lady} className='lady' alt='' /></i>
        </div>
        <div className='locationIcon' onMouseEnter={() => togglePopup('green')}>
        <i className="fa-solid fa-location-dot fa-beat-fad fa-2xl loc3" style={{ color: 'green' }}><img src={lady} className='lady' alt='' /></i>
        </div>
        <div className='locationIcon' onMouseEnter={() => togglePopup('yellow')}>
        <i className="fa-solid fa-location-dot fa-beat-fad fa-2xl loc4" style={{ color: 'yellow' }}><img src={lady} className='lady' alt='' /></i>
        </div>
      </div>
      </div>
  )
}

export default Roadmap