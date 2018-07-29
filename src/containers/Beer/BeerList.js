import React, { Component } from 'react';
import { connect } from 'react-redux';
import Beer from '../../components/Items/Beer';
import './beerlist.css';

//Actions
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';

class BeerList extends Component {

  addProduct(name, price) {
    this.props.addProduct(name, price);
  }

  render(){
    const { products } = this.props;
    const renderProducts = products.list ? products.list.map((prod, index) => {
      return (        
        <Beer 
          className = "col-2" 
          key = { index } 
          name = { prod.name } 
          price = { prod.price } 
          description = { prod.description } 
          img = {prod.img}
          click = { () => {this.addProduct(prod.name, prod.price);}}          
        />        
      );
    }) : null

    return(
      <div>       
        <div className = "row" id = "list">
          { renderProducts }  
        </div>        
      </div>
    )    
  }
}

export default connect (
    state => {
        return {
            products: state.productsReducer, // Saco los productos del reducer            
        }
    },{
        addProduct: shopActions.addProduct, // Uso una acción para agregar al carrito
        getProducts: productsActions.getProducts
    }
)(BeerList);