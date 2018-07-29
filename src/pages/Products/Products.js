import React, { Component } from 'react';
import BeerList from '../../containers/Beer/BeerList';
import CheckOut from '../../containers/CartCheckOut/CheckOut';
import Scroll from '../../components/Items/Scroll';

class Products extends Component {
  render() {
    return (
      <div>	 
        <CheckOut />  
        <Scroll>
          <BeerList />  
        </Scroll>         
      </div>
    );
  }
}

export default Products;