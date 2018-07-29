import React from 'react';
import './carttotal.css';

const Total = (props) =>{
  const pop = () => {
    alert("Gracias Vuelva Prontos!")
  }
  
  return(
    <div className = "container">
      <div className = "row" id = "cartTotal">
        <div className = "col-3">
        <h3 >Total: </h3>
        </div>
        <div className = "col-3">
        <p id="total">${props.cart}</p>
        </div>     
        <div className = "col-3">
          <button
          className = "btn btn-danger"
          onClick = {props.click}
          id = "cartB1"
          >Clear</button>  
        </div>
        <div className = "col-3">
          <button
          className = "btn btn-success"
          onClick = {() =>{pop();}}
          id = "cartB2"
          >Check Out</button>  
        </div>      
      </div>
    </div>
    
  );
}

export default Total;