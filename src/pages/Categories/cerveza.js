import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import CategoryNav from '../../components/CategoryNav';
import { NavLink } from 'react-router-dom';
import './Products.css';

// @Actions
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';

class Cervezas extends Component {

	componentDidMount() {
		this.props.getProducts();
	}

	addProduct(name, description, price) {
		this.props.addProduct(name, description, price);
	}

    render() {
		const { products, shop } = this.props;

		const renderProducts = products.list ? products.list.map((products, index) => {
    		if(products.category === 'cerveza'){
                return (<ProductItem 
				index={index} 
				product={products} 
				button={<button className='btn btn-primary' onClick={() => {this.addProduct(products.name, products.description, products.price);}}>
				Agregar al carrito</button>}/>)};
		}) : null;
		
		const orders = shop.orders.length;

		const areOrders = (orders) => {
			if(orders > 0){
				return <span class="badge badge-pill badge-danger">{orders}</span>;
			}
		}
		
        return (
        	<div>
				<NavLink to='/cart' className='float'>
                	<i class="fa fa-shopping-cart my-float">
						{areOrders(orders)}
					</i>
                </NavLink>
				<div className='products'>
					<div className='col-12 col-sm-12 col-md-3'>
						<div class="card text-white bg-dark mb-3 categoryBox">
							<div class="card-header">Categorias</div>
							<div class="card-body">
								<CategoryNav />	
							</div>
						</div>						
					</div>
					<div className='col-12 col-sm-12 col-md-10'>
						<h1>Productos</h1>
						<div className='groupOfCards'>
							{renderProducts}
						</div>
					</div>
				</div>	            				
            </div>
		);
    }
}

/*
connect conecta la aplicación al store. Permite agregar datos y funciones a 
las props.
*/

export default connect(
    state => {
        return {
            products: state.productsReducer, // Saco los productos del reducer
            shop: state.shopReducer
        }
    },{
		addProduct: shopActions.addProduct,
        getProducts: productsActions.getProducts
    }
)(Cervezas);