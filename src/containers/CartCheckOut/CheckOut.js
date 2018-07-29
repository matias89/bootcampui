import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import Total from '../../components/Cart/CartTotal';
import YourCart from '../../components/Cart/YourCart';
import './checkout.css';

//Actions
import shopActions from '../../actions/shopActions';

class CheckOut extends Component {

  deleteProduct(index){
    this.props.deleteProduct(index);
  }

  render(){
    const { shop } = this.props;
    const orders = shop.orders.length ? shop.orders.map((product, index) => {
          return (
            <div key = { index }>
              <Cart              
                name = { product.name }
                price = { product.price }
                click = {() => {this.deleteProduct(index);}}
              />              
            </div>           
          );
        }) : <p id = "empty">Empty</p>;    
    return(
      <div>
        <YourCart orders = {orders}/>
        <Total 
          cart = {shop.total} 
          click = {this.props.clearShop} 
        />       
      </div>    
    );  
  }  
}

export default connect(
  state => {
    return {            
      shop: state.shopReducer
    }
  },{        
    clearShop: shopActions.clearShop,
    deleteProduct: shopActions.deleteProduct
  }
)(CheckOut);