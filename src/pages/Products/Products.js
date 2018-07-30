import React, { Component } from 'react';
import { connect } from 'react-redux';
// @Actions
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';

class Products extends Component {

	componentDidMount() {
		this.props.getProducts();
	}

	addProduct(name, price, img) {
		this.props.addProduct(name, price, img);
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
				<div key={index} className="card border-success mb-3">
					<img className='card-img-top' src={prod.img} stlye={{ width: '200px', height: '150px' }} />
					<div className='card-body text center'>
						<h3 className='card-title'>{prod.name}  ${prod.price}</h3>
						<p>{prod.description} <br /><h6>Stats: {prod.stat}</h6> <br />
						</p>
						<div className="card-footer bg-transparent border-success">
							<button className="btn btn-info" onClick={() => {
								this.addProduct(prod.name, prod.price, prod.img);
							}}>Agregar al carrito</button>
						</div>
					</div>
				</div>
			);
		}) : null;

		const orders = shop.orders.length ? shop.orders.map((product, index) => {
			return (
				<div key={index}><img height={50} title={product.name} src={product.img} /> ${product.price}<button classNameName="btn btn-warning" onClick={() => { this.removeProduct(index) }}>quitar</button></div>
			);
		}) : <p>No hay productos en el carrito</p>;
		return (
			<div>
				<div className='card-deck'>
					{renderProducts}
				</div>
				<h1>Carrito</h1>
				{orders}
				<button className="btn btn-danger" onClick={() => { this.removeAllProduct(); }}> Quitar Todo </button>
				<button className="btn btn-success" onClick={() => alert('En este momento no estamos recibiendo pedidos')}>Pagar ${shop.total}</button>
				<div>
					<button className="btn btn-danger" onClick={() => alert('Estoy usando otra version para hacer que ande el carousel, hasta solucionarlo esto es lo que tengo :(')}>Por que se ve tan feo????</button>
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
	}, {
		addProduct: shopActions.addProduct,
		getProducts: productsActions.getProducts,
		removeAllProduct: shopActions.removeAllProduct,
		removeProduct: shopActions.removeProduct
	}
)(Products);