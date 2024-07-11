import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Books = () => {

    const [frag,setfrag] = useState([]);
    const [skin,setskin] = useState([]);

    async function Fetchdata(){
        const [data1,data2] = await Promise.all([
           fetch('https://dummyjson.com/products/category/fragrances').then((res)=> res.json()),
            fetch('https://dummyjson.com/products/category/skincare').then((res)=> res.json()),
        ])
        setfrag(data1.products);
        setskin(data2.products);
    }

    useEffect(()=>{
        Fetchdata();
    },[])

  return (
    <div className='d-flex flex-wrap'>
    {
    frag.map(view=>
        <div className="col-3">
          <Link to={`/product-details/${view.id}`}>
        <div className="card mt-2" style={{height:500}}>
        <img src={view.thumbnail} className="card-img-top" style={{height:200}}/>
        <div className="card-body">
        <h3 className="card-title">{view.title}</h3><button className='btn bg-danger-subtle'><i class="fa-regular fa-heart"></i></button>
        <p className="card-text">{view.description}</p>
        <p className='fw-bold'>price :<span className='text-success'>${view.price}</span></p>
        <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
        <Link to='/one'><button type="button" class="btn btn-outline-warning ms-4">Buy&nbsp;</button></Link>
        </div>
        </div>
        </Link>
        </div>
        )
      }
 {
    skin.map(view=>
        <div className="col-3">
          <Link to={`/product-details/${view.id}`}>
        <div className="card mt-2" style={{height:500}}>
        <img src={view.thumbnail} className="card-img-top" style={{height:200}}/>
        <div className="card-body">
        <h3 className="card-title">{view.title}</h3><button className='btn bg-danger-subtle'><i class="fa-regular fa-heart"></i></button>
        <p className="card-text">{view.description}</p>
        <p className='fw-bold'>price :<span className='text-success'>${view.price}</span></p>
        <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
        <Link to='/one'><button type="button" class="btn btn-outline-warning ms-4">Buy&nbsp;</button></Link>
        </div>
        </div>
        </Link>
        </div>
     )
   }
  </div>)
}

export default Books