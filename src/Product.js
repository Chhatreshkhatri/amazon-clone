import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
// function Product is destructured here ↓
function Product({id,title, image, price, rating}) {
  const [{basket},dispatch]=useStateValue();
  const addToBasket=()=>{
    //dispatch actions of click
    dispatch({      
      type:'ADD_TO_BASKET',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <strong>{price}</strong>
                <small>$</small>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i)=> ( <p>⭐</p> ))}               
            </div>
        </div>
        <img src={image} alt=""/>
        <button onClick={addToBasket}>add to basket</button>
    </div>
  );
}

export default Product