import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menfashion = () => {
  const [mensshirts, setMensshirts] = useState([]);
  const [mensshoes, setMensshoes] = useState([]);
  const [menswatches, setMenswatches] = useState([]);

  async function fetchData() {
    const [data1, data2, data3] = await Promise.all([
      fetch('https://dummyjson.com/products/category/mens-shirts').then((res) => res.json()),
      fetch('https://dummyjson.com/products/category/mens-shoes').then((res) => res.json()),
      fetch('https://dummyjson.com/products/category/mens-watches').then((res) => res.json()),
    ]);
    setMensshirts(data1.products);
    setMensshoes(data2.products);
    setMenswatches(data3.products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='d-flex flex-wrap'>
      {/* Display mens shirts */}
      {mensshirts.map((view) => (
        <div key={view.ID} className='col-3'>
          <Link to={`/product-details/${view.id}`}>
            <div className='card mt-2' style={{ height: 500 }}>
              <img src={view.thumbnail} className='card-img-top' style={{ height: 200 }} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>{view.title}</h3>
                <button className='btn bg-danger-subtle'>
                  <i className='fa-regular fa-heart'></i>
                </button>
                <p className='card-text'>{view.description}</p>
                <p className='fw-bold'>
                  price :<span className='text-success'>${view.price}</span>
                </p>
                <button type='button' className='btn btn-outline-primary'>
                  <i className='fa-solid fa-cart-shopping'></i>Add to cart</button>
                <Link to='/payment'>
                  <button type='button' className='btn btn-outline-warning'>Buy Now</button>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
      {/* Display mens shoes */}
      {mensshoes.map((view) => (
        <div key={view.ID} className='col-3'>
          <Link to={`/product-details/${view.id}`}>
            <div className='card mt-2' style={{ height: 500 }}>
              <img src={view.thumbnail} className='card-img-top' style={{ height: 200 }} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>{view.title}</h3>
                <button className='btn bg-danger-subtle'>
                  <i className='fa-regular fa-heart'></i>
                </button>
                <p className='card-text'>{view.description}</p>
                <p className='fw-bold'>
                  price :<span className='text-success'>${view.price}</span>
                </p>
                <button type='button' className='btn btn-outline-primary'>
                  <i className='fa-solid fa-cart-shopping'></i>Add to cart</button>
                <Link to='/payment'>
                  <button type='button' className='btn btn-outline-warning'>Buy Now</button>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
      {/* Display mens watches */}
      {menswatches.map((view) => (
        <div key={view.ID} className='col-3'>
          <Link to={`/product-details/${view.id}`}>
            <div className='card mt-2' style={{ height: 500 }}>
              <img src={view.thumbnail} className='card-img-top' style={{ height: 200 }} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>{view.title}</h3>
                <button className='btn bg-danger-subtle'>
                  <i className='fa-regular fa-heart'></i>
                </button>
                <p className='card-text'>{view.description}</p>
                <p className='fw-bold'>
                  price :<span className='text-success'>${view.price}</span>
                </p>
                <button type='button' className='btn btn-outline-primary'>
                  <i className='fa-solid fa-cart-shopping'></i>Add to cart</button>
                <Link to='/payment'>
                  <button type='button' className='btn btn-outline-warning'> Buy Now&nbsp;</button>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menfashion;