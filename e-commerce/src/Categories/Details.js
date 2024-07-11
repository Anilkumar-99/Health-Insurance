import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Details = () => {
  const [Qty, setQty] = useState(1);
  const [item, setItem] = useState({});
  const { ID } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${ID}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [ID]);

  const addToCart = () => {
    const newItem = { ...item, quantity: Qty };
    // You can use localStorage or some state management library like Redux to store cart items
    // Here, I'm just navigating to the Cart component and passing the item as a URL parameter
     window.location.href = `/cart?item=${JSON.stringify(newItem)}`;
  };

  function plus() {
    setQty(Qty + 1);
  }

  function minus() {
    if (Qty > 1) {
      setQty(Qty - 1);
    }
  }

  // Calculate price based on quantity
  const calculatePrice = () => {
    const totalPrice = item.price * Qty;
    const discountPrice = (totalPrice * item.discountPercentage) / 100;
    return totalPrice - discountPrice;
  };

  return (
    <div className="row">
      <div className="col-5  ms-3 border rounded p-3 mt-2">
        {item.images && item.images.length > 0 ? (
          <Carousel
            interval={2000}
            pause="hover"
            wrap
            keyboard
            indicators={false}
            controls={true}
            prevIcon={
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{ backgroundColor: 'black' }}
              />
            }
            nextIcon={
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{ backgroundColor: 'black' }}
              />
            }
          >
            {item.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ objectFit: 'contain', maxHeight: '400px' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>No images available</p>
        )}
      </div>

      <div className="col-6 mt-4 p-3">
        <div className="card-body">
          <h3 className="card-title text-center">{item.title}</h3>
          <h6 className="card-text mt-3 text-center text-secondary">
            {item.description}
          </h6>
          <h5 className="mt-5">
            &nbsp;&nbsp;
            <span className="bg-info-subtle p-2 rounded text-dark fw-bold">
              {item.brand}
            </span>
          </h5>
          <p className="fw-bold">
            <sup className="text-dark fw-bold">$</sup>
            <span className="text-success fs-1">{calculatePrice()}</span>
            <span className="text-danger fw-bold ms-2">
              ({item.discountPercentage}% off)
            </span>
          </p>
          <p>Inclusive of all taxes</p>
          <div className="d-flex " style={{ gap: '20px' }}>
            <button className="rounded-circle p-3 fw-bold border-info">
              S
            </button>
            <button className="rounded-circle p-3 fw-bold border-info">
              M
            </button>
            <button className="rounded-circle p-3 fw-bold border-info">
              L
            </button>
            <button className="rounded-circle p-3 fw-bold border-info">
              XL
            </button>
            <button className="rounded-circle p-3 fw-bold border-info">
              XXL
            </button>
          </div>
          <h5 className="mt-4">
            Quantity&nbsp;&nbsp;&nbsp;
            <button onClick={minus} className="btn bg-secondary-subtle">
              <i className="fa-solid fa-minus"></i>
            </button>
            &nbsp;{Qty}&nbsp;
            <button onClick={plus} className="btn bg-secondary-subtle">
              <i className="fa-solid fa-plus"></i>
            </button>
          </h5>
          <p className="card-text mt-3 pb-2">
            <span className="p-2 rounded border fw-bold text-dark">
              {item.rating}
              <i className="fa-regular fa-star text-success fw-bold"></i>
            </span>
          </p>
          <button
            onClick={addToCart}
            className="btn btn-warning px-5 text-dark fw-bold"
          >
            Add to cart <i className="fa-solid fa-bag-shopping "></i>{' '}
          </button>
          
          <Link
            to="/payment"
            className="btn btn-primary px-5 text-white ms-3 fw-bold"
          >
            Buy Now <i className="fa-solid fa-sack-dollar"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;