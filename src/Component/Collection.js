// Cart.js

import React, { useEffect, useState } from 'react';

const Collection = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const[offerProducts, setOfferProducts] = useState([])

  const handleIncrement = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: (product.quantity || 0) + 1 }
          : product
      )
    );
  };

  const handleDecrement = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  useEffect(() => {
    const storedCartProducts = localStorage.getItem('cartProducts');
    if (storedCartProducts) {
      const parsedProducts = JSON.parse(storedCartProducts);
      setCartProducts(parsedProducts);
      console.log('Cart Products:', parsedProducts);
    }
  }, []);
  useEffect(() => {
    const storedOfferProducts = localStorage.getItem('offerProducts');
    if (storedOfferProducts) {
      const parsedOfferProducts = JSON.parse(storedOfferProducts);
      setOfferProducts(parsedOfferProducts);
      console.log('Offer Products:', parsedOfferProducts);
    }
  }, []);
  return (
    <div>
      <h2>Cart Products</h2>
      <ul>
        {cartProducts.map((product) => (
          <div className='box' key={product.id}>
            <div className='img_box'>
              <img src={product.img} alt='trend' />
              <h3>{product.Name}</h3>
              <p>{product.price}</p>
              <div className='qunatity-controls'>
                <button onClick={() => handleDecrement(product.id)}>-</button>
                <input type="text" value={product.quantity || 1} readOnly />
                <button onClick={() => handleIncrement(product.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <div>
      <h2>offer Products</h2>
      <ul>
        {offerProducts.map((offer) => (
          <div className='box' key={offer.id}>
            <div className='img_box'>
              <img src={offer.img} alt='trend' />
              <h3>{offer.Name}</h3>
              <p>{offer.price}</p>
              <div className='qunatity-controls'>
                <button onClick={() => handleDecrement(offer.id)}>-</button>
                <input type="text" value={offer.quantity || 1} readOnly />
                <button onClick={() => handleIncrement(offer.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Collection;
