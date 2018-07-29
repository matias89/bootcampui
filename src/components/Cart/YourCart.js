import React from 'react';
import './yourcart.css';

const YourCart = (props) => {
  return(
    <div id = "yourcart">
      <h2>Your Cart:</h2>
      {props.orders}
      <hr/>
    </div>
  );
}

export default YourCart;