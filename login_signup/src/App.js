import React from "react";
import {  Route, Routes } from "react-router-dom";
import Form from './Components/Form'
import Login from './Components/Login'
import './Components/Form.css'

const App=()=>{
  return(
   
  
       <Routes>
      
        
        <Route path='/' element={<Form/>}/>
        <Route path='/Login' element={<Login/>}/>


       </Routes>
  
    
  );
}
export default App;