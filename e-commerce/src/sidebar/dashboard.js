import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                console.log('Fetched products:', data);
                setProducts(data.products);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div >
            <h5> </h5>
            <div className="product-list row">
                {products.map(product =>(
                    <div key={product.id}  className='col-3'>
                      
  <div class="card mb-3" style={{height:470}}>
  <img src={product.thumbnail} class="card-img-top" alt="..."/><img/>
  <div class="card-body">
    <h5 class="card-title"> { product.title}</h5><button className='btn bg-danger-subtle'><i class="fa-regular fa-heart"></i></button>
    <p class="card-text"><small class="text-body-secondary"> {product.description}</small></p>
    <p className='fw-bold'>price :<span className='text-success'>${product.price}</span></p>
    <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
        <Link to='/one'><button type="button" class="btn btn-outline-warning ms-4">Buy</button></Link>
    
  </div>
</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;