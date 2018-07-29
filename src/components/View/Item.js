import React from 'react';

const Item = ({name,price,description}) =>{
  return(
    <div className='tc bg-light-grey dib br3 pa3 ma2 grow bw2 shadow-5 fl'>      
      <img src="https://www.myamericanmarket.com/587/budweiser-beer-bottle.jpg" alt="Product" id='imgBeer'/>
      <div>
        <h4>Product Name: {name}</h4>
        <h5>Price: {price}</h5>
        <div>
          <p>Description: {description}</p>
        </div>
        <button>Add Item</button>
      </div>
    </div>
    )
}

export default Item;