import React from 'react';
import './cart.css';

const Cart = (props) => {
  return (
    <div className = "container">
      <ul className = "row" id = "wrapperCart">
        <p className = "card-header col-5">{props.name}</p> 
        <p className = "card-header col-5" 
          id = "cartPrice">Price: {props.price} 
        </p> 
        <button 
          className = "btn btn-warning col-2" 
          id = "buttonRemove" 
          onClick = {props.click}>Remove
          </button>
      </ul>      
    </div>   
  );
}

export default Cart;