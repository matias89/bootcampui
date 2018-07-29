import React from 'react';
import './Beer.css';

const Beer = (props) =>{
  return(
    <div className = "card" id="card">
      <img src = {props.img} 
        alt = "beer" 
        id="beerImg" 
      />
      <div className = "list-group list-group-flush">
        <h4 className = "card-header" id = "name">{props.name} </h4>
        <h5 className = "list-group-item" id = "price">Price: {props.price} </h5>
        <hr/>
        <p id = "description">{props.description} </p>
        <button className = "btn btn-primary" onClick = {props.click}>Add Item</button>
      </div>
    </div>
  );
}

export default Beer;