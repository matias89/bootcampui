import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import CartItem from '../../components/CartItem';
import CategoryNav from '../../components/CategoryNav';
import './Products.css';

// @Actions
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';

class Fernet extends Component {

	componentDidMount() {
		// Este getProducts debería conectarse a un servicio y traer de ahi los productos
		// Para nuestro jemeplo, los productos están hardcodeados (puestos a mano) en el reducer
		// Si quieren agregar o modificar productos, lo hacen directamente desde el reducer
		this.props.getProducts();
		// Dejo este getProducts aquí como ejemplo de donde debería llamarse para traer la información desde un servicio
	}

	addProduct(name, description, price) {
		this.props.addProduct(name, description, price);
	}

	removeProduct(item){
		this.props.removeProduct(item);
	}

	removeAllProducts(){
		this.props.removeAllProducts();
	}

    render() {
		const { products, shop } = this.props;

		const renderProducts = products.list ? products.list.map((products, index) => {
    		if(products.category === 'fernet'){
                return (<ProductItem 
				index={index} 
				product={products} 
				button={<button className='btn btn-primary' onClick={() => {this.addProduct(products.name, products.description, products.price);}}>
				Agregar al carrito</button>}/>)};
		}) : null;
		
	   	// Lo siguiente son los productos agregados al carrito. Lo mismo que el caso anterior,
    	// Mover todo a componentes, identificar y crearlos
    	// Por ejemplo un componente llamado <Orders> que reciba por props los productos
		// Podrían crear una acción para quitar el producto del carrito
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
        	<div>
				<div className='products'>
					<div className='col-12 col-sm-2'>
						<div class="card text-white bg-dark mb-3">
							<div class="card-header">Categorias</div>
							<div class="card-body">								
                                <CategoryNav />								
							</div>
						</div>
						
					</div>
					<div className='col-12 col-sm-10'>
						<h1>Productos</h1>
						<div className='groupOfCards'>
							{renderProducts}
						</div>
					</div>
				</div>	            
	            <h1>Carrito</h1>
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
		removeProduct: shopActions.removeProduct,
		removeAllProducts: shopActions.removeAllProducts, 
        getProducts: productsActions.getProducts
    }
)(Fernet);