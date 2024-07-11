import React, { useState } from 'react';



const NavbarCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, ""]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="carts">
     {/* <span>Cart ({cartItems.length})</span>  */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => handleRemoveFromCart(index)} className="btn btn-secondary">Remove&nbsp;<i class="fa-solid fa-trash"></i></button> 
             </li>
        ))}
      </ul>
      <button onClick={handleAddToCart}type="button" class="btn btn-warning" id='cart'>Cart&nbsp;<i class="fa-solid fa-cart-shopping"></i></button>
      
    </div>
  );
};

export default NavbarCart;