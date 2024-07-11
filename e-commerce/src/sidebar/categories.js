import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories= () => {
  return (
<div className='d-flex m-1'>
        <div className='m-3'>
        <button class="btn btn-info border border-dark" id='a'>Categories&nbsp;<i class="fa-solid fa-list"></i></button>
        <ul class="nav flex-column">
  <li class="nav-item">
          <Link to='books'><button className='btn btn-secondary w-100 my-1 border border-warning' id='b'> Books</button></Link>
   </li>
  <li class="nav-item">
          <Link to='electronics'><button className='btn btn-secondary w-100 my-1 border border-warning'id='c'>Electronics</button></Link>
  </li>
  <li class="nav-item">
          <button className='btn btn-secondary w-100 my-1 border border-warning'id='d'>Babytoys</button>
  </li>
  <li class="nav-item">
       <Link to='mobiles'><button className='btn btn-secondary w-100 my-1 border border-warning'id='e'>Mobiles</button></Link>
  </li >
  <li class="nav-item" >
      <Link to ='menfashion'><button className='btn btn-secondary w-100 my-1 border border-darkborder border-warning'id='f'>Men's fashion</button></Link>
  </li>
  <li class="nav-item" >
      <Link to='womenfashion'><button className='btn btn-secondary w-100 my-1 border border-warning 'id='g'>Women's fashion</button></Link>
  </li>
  <li class="nav-item" >
          <Link to='groceries'><button className='btn btn-secondary w-100 my-1 border border-warning'id='h'>Groceries</button></Link>
  </li>
</ul></div>
    </div>
  );
};

export default Categories;