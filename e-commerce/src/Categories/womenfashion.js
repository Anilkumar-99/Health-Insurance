import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Womenfashion = () => {
 
  const [dress,setdress] = useState([]);
  const [shoes,setshoes] = useState([]);
  const [watches,setwatches] = useState([]);
  const [jewellary,setjewellary] = useState([]);

  async function Fetchdata(){
      const [data1,data2,data3,data4] = await Promise.all([
         fetch('https://dummyjson.com/products/category/womens-dresses').then((res)=> res.json()),
          fetch('https://dummyjson.com/products/category/womens-shoes').then((res)=> res.json()),
          fetch('https://dummyjson.com/products/category/womens-watches').then((res)=> res.json()),
          fetch('https://dummyjson.com/products/category/womens-jewellery').then((res)=> res.json()),
      ])
      setdress(data1.products);
      setshoes(data2.products);
      setwatches(data3.products);
      setjewellary(data4.products);
  }

      useEffect(()=>{
          Fetchdata();
      },[])
      
 return (
  <div className='d-flex flex-wrap'>
    {
    dress.map(view=>
        <div className="col-3">
          <Link to={`/product-details/${view.id}`}>
        <div className="card mt-2" style={{height:500}}>
        <img src={view.thumbnail} className="card-img-top" style={{height:200}}/>
        <div className="card-body">
        <h3 className="card-title">{view.title}</h3><button className='btn bg-danger-subtle'><i class="fa-regular fa-heart"></i></button>
        <p className="card-text">{view.description}</p>
        <p className='fw-bold'>price :<span className='text-success'>${view.price}</span></p>
        <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>Add to cart&nbsp;</button>
        <Link to='/one'><button type="button" class="btn btn-outline-warning ms-4">Buy</button></Link>
        </div>
        </div>
        </Link>
        </div>
        )
      }
 {
  shoes.map(view=>
     <div className="col-3">
      <Link to={`/product-details/${view.id}`}>
     <div className="card mt-2" style={{height:500}}>
     <img src={view.thumbnail} className="card-img-top" style={{height:200}}/>
     <div className="card-body">
     <h3 className="card-title">{view.title}</h3><button className='btn bg-danger-subtle'><i class="fa-regular fa-heart"></i></button>
     <p className="card-text">{view.description}</p>
     <p className='fw-bold'>price :<span className='text-success'>${view.price}</span></p>
     <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>Add to cart&nbsp;</button>
        <Link to='/one'><button type="button" class="btn btn-outline-warning ms-4">Buy</button></Link>
     </div>
     </div>
     </Link>
     </div>
     )
   }
 {
  watches.map(view=>
      <div className="col-3">
        <Link to={`/product-details/${view.id}`}>
      <div className="card mt-2" style={{height:500}}>
      <img src={view.thumbnail} className="card-img-top" style={{height:200}}/>
      <div className="card-body">
      <h3 className="card-title">{view.title}</h3><button className='btn bg-danger-subtle'><i class="fa-regular fa-heart"></i></button>
      <p className="card-text">{view.description}</p>
      <p className='fw-bold'>price :<span className='text-success'>${view.price}</span></p>
      <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>Add to cart&nbsp;</button>
        <Link to='/one'><button type="button" class="btn btn-outline-warning ms-4">Buy</button></Link>
      </div>
      </div>
      </Link>
      </div>
      )
   }
{
 jewellary.map(view=>
  <div className="col-3">
    <Link to={`/product-details/${view.id}`}>
  <div className="card mt-2" style={{height:500}}>
  <img src={view.thumbnail} className="card-img-top" style={{height:200}}/>
  <div className="card-body">
  <h3 className="card-title">{view.title}</h3><button className='btn bg-danger-subtle'><i class="fa-regular fa-heart"></i></button>
  <p className="card-text">{view.description}</p>
  <p className='fw-bold'>price :<span className='text-success'>${view.price}</span></p>
  <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>Add to cart&nbsp;</button>
        <Link to='/one'><button type="button" class="btn btn-outline-warning ms-4">Buy</button></Link>
  </div>
  </div>
  </Link>
  </div>
  )
}


  </div>)

}

export default Womenfashion;