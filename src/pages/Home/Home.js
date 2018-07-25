import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import productsActions from '../../actions/productsActions';
import './Home.css'

class Home extends Component {

    componentDidMount() {
		this.props.getProducts();
    }
    
    render() {
        const { products } = this.props;

        const highlights = (products, index) =>{
            if(products.highlights){
                return (
                <ProductItem 
                index={index} 
                product={products} 
                button={<NavLink to='/products' className='btn btn-primary'>Ver mas</NavLink>}/>
            )}
        }

        const renderProducts = products.list ? products.list.map((products, index) => {
    		return highlights(products, index);
    	}) : null;

        return (
        	<div>
	            <h1>Pantalla principal</h1>
	            <p>Esta es la pantalla de bienvenida, hacer cualquier cosa que se les ocurra acá.</p>
                <div className='highlights'>
                    {renderProducts}
                </div>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            products: state.productsReducer, // Saco los productos del reducer
        }
    },{
        getProducts: productsActions.getProducts
    }
)(Home);