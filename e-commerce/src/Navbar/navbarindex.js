import Navbarlogin from './navbarlogin';
import Navbarlogo from './navbarlogo';
import Navbarsearch from './navbarsearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebarindex from '../sidebar/Sidebarindex';
import Navbarwishlist from './navbarwishlist';
import Navbartracker from './navbartracker';
import NavbarCart from './navbarcart';
import Dashboard from '../sidebar/dashboard';
import Womenfashion from '../Categories/womenfashion';
import Mobiles from '../Categories/mobiles';
import Books from '../Categories/books';
import Menfashion from '../Categories/menfashion';
import Electronics from '../Categories/electronics';
import One from '../Payment/Payment';
import Groceries from '../Categories/groceries';
import Details from '../Categories/Details';

const Navbar = () => {
  return (
    <div >
    <nav className="navbar">
      <Navbarlogo />
      <Navbarsearch />
       <Navbarlogin/> 
       <Navbarwishlist/>
       <Navbartracker/>
       <NavbarCart />
    </nav>
    <BrowserRouter>
    <div className='row'>
      <div className='col-2'>
        <Sidebarindex/>
      </div>
      <div className='col-10'>

    <Routes>
        <Route path='logo' element={<Navbarlogo/>}/>
        <Route path='search' element={<Navbarsearch/>}/>
        <Route path='login' element={<Navbarlogin/>}/>
        <Route path='cart' element={<NavbarCart/>}/>
        <Route path='wishlist' element={<Navbarwishlist/>}/>
        <Route path='tracker' element={<Navbartracker/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='womenfashion' element={<Womenfashion/>}/>
        <Route path='/mobiles' element={<Mobiles/>}/>
        <Route path='books' element={<Books/>}/>
        <Route path='menfashion' element={<Menfashion/>}/>
        <Route path='electronics' element={<Electronics/>}/>
        <Route path='groceries' element={<Groceries/>}/>
        <Route path='/one' element={<One/>}/>
        <Route path='/product-details/:ID'element={<Details/>}/>
        
    </Routes>

      </div>
    </div>
   </BrowserRouter>

    </div>
  );
};

export default Navbar;