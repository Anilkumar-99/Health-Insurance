import React from 'react';
import Card from './Course/Card';
import Details from './Profile/Details';
import Details1 from './Profile/Details1';
import Details2 from './Profile/Details2';
import './Profile/Details.css';
import './Profile/Details1.css';
import './Profile/Details2.css';
import './Course/card.css';
import {  Route, Routes} from 'react-router-dom';
import ReachUs from'./Reach/ReachUs';
import './Reach/reach.css'
import LandingPage from './landing/LandingPage'; 
import './landing/landing.css';
import Roadmap from './Road/Roadmap';
import Card1 from './Course1/Card1';
import Card2 from './Course1/Card2';
import Card3 from './Course1/Card3';
const App = () => {
return (
<div>

      <Routes>
                <Route path='/'element={<LandingPage/>}/>
                <Route path='/home' element={<Card/>}/>
                <Route path='/details'element={<Details/>}/>
                <Route path='/details1'element={<Details1/>}/>
                <Route path='/details2'element={<Details2/>}/>
                <Route path='/road'element={<Roadmap/>}/>
                <Route path='/reach'element={<ReachUs/>}/>
                <Route path='/card1'element={<Card1/>}/>
                <Route path='/card2'element={<Card2/>}/>
                <Route path='/card3'element={<Card3/>}/>

     </Routes>


 </div>
)
}
export default App;