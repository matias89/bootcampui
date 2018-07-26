import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/CartItem';
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';
import './Cart.css';

class Cart extends Component {

	componentDidMount(){
		window.scrollTo(0, 0);
	}

    removeProduct(item) {
        this.props.removeProduct(item);
    }

    removeAllProducts() { 
        this.props.removeAllProducts();
    }
    
    
    render() {
        
        const { shop } = this.props;

        let total = 0;

		const prices = shop.orders.length ? shop.orders.map((products) => {
    		return (
    			total = total + products.price				
    		);
		}) : <p></p>;

		const showTotal = shop.orders.length ? `$ ${total}` : <p>No hay productos en el carrito</p>;
		const removeAll = shop.orders.length ? <button className='btn btn-danger' onClick={() => {this.removeAllProducts();}}>
		BORRAR TODO</button> : <p></p>;
		
		const orders = shop.orders.length ? shop.orders.map((products, index) => {
    		return (
				<CartItem product={products} button={<button className='btn btn-danger' onClick={() => {this.removeProduct(index);}}>
				BORRAR</button>} />				
			);
		}) : <tr><th>No hay productos en el carrito</th></tr>;
        
        return (
        	<div className="container">                
	            <h1>Carrito</h1>
                <div>
                <div className='tablesCart'>
					<table class="table">
						<thead class="thead-dark">
							<tr>
								<th scope="col">Item</th>
								<th scope="col">Precio</th>
								<th scope="col">Borrar</th>
							</tr>
						</thead>
						<tbody>
						{orders}
						</tbody>
					</table>
					<table class="table">
						<thead class="thead-dark">
							<tr>
								<th scope="col">Total</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">{showTotal}</th>
								<th>{removeAll}</th>
							</tr>						
						</tbody>
					</table>					
				</div>
                </div>                
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            products: state.productsReducer, 
            shop: state.shopReducer
        }
    },{
		addProduct: shopActions.addProduct,
		removeProduct: shopActions.removeProduct,
		removeAllProducts: shopActions.removeAllProducts, 
        getProducts: productsActions.getProducts
    }
)(Cart);