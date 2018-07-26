import React from 'react';
import Item from './Item';
import './item.css';

const ItemList = ({products}) =>{
  const productList =  products.map((user,i)=>{
    return(      
      <Item id='item'
      key = {Math.floor(Math.random()*99999)}      
      name={products[i].name}
      price={products[i].price}
      description={products[i].description}       
      />        
    );
  })
  return(
    <div>
      {productList}
    </div>
  );
}

export default ItemList;