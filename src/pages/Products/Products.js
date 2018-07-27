import React, { Component } from 'react';
import { connect } from 'react-redux';

// @Actions
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';

class Products extends Component {

	componentDidMount() {
		// Este getProducts debería conectarse a un servicio y traer de ahi los productos
		// Para nuestro jemeplo, los productos están hardcodeados (puestos a mano) en el reducer
		// Si quieren agregar o modificar productos, lo hacen directamente desde el reducer
		this.props.getProducts();
		// Dejo este getProducts aquí como ejemplo de donde debería llamarse para traer la información desde un servicio
	}

	addProduct(name, price) {
		this.props.addProduct(name, price);
	}

	removeAllProduct() {
		this.props.removeAllProduct();
	}

	removeProduct(item) {
		this.props.removeProduct(item);
	}


	render() {
		const { products, shop } = this.props;

		const renderProducts = products.list ? products.list.map((prod, index) => {
			return (
				<div key={index}>{prod.name} | {prod.description} | {prod.stat} | {prod.price} | <button onClick={() => {
					this.addProduct(prod.name, prod.price);
				}}>Agregar al carrito</button></div>
			);
		}) : null;

		const orders = shop.orders.length ? shop.orders.map((product, index) => {
			return (
				<div key={index}>{product.name} = ${product.price}<button onClick={() => { this.removeProduct(index) }}>quitar</button></div>
			);
		}) : <p>No hay productos en el carrito</p>;
		return (
			<div>
				<h1>Productos</h1>
				{renderProducts}
				<h1>Carrito</h1>
				{orders}
				<button onClick={() => { this.removeAllProduct(); }}> Quitar Todo </button>
			</div>
		);

	}



}


export default connect(
	state => {
		return {
			products: state.productsReducer, // Saco los productos del reducer
			shop: state.shopReducer
		}
	}, {
		addProduct: shopActions.addProduct, // Uso una acción para agregar al carrito
		getProducts: productsActions.getProducts,
		removeAllProduct: shopActions.removeAllProduct,
		removeProduct: shopActions.removeProduct
	}
)(Products);