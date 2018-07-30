import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import productsActions from '../../actions/productsActions';
import Carousel from '../../components/Carousel';
import CarouselItem from '../../components/Carousel/CarouselItem';
import './Home.css'

class Home extends Component {

    componentDidMount() {
        this.props.getProducts();
        window.scrollTo(0, 0);
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
        const renderCarousel = products.list ? products.list.map((products, index) => {
                if(products.category === 'cerveza'){
                    return <CarouselItem product={products} index={index} />
                }else{
                    return null;
                }    		
    	}) : null;

        const renderProducts = products.list ? products.list.map((products, index) => {
    		return highlights(products, index);
    	}) : null;

        return (
        	<div className='container'>
	            <h1>Probá nuestras cervezas!</h1>
                <hr/>
                <div>
                    <Carousel items={renderCarousel} />
                </div>
                <h1>Productos Destacados</h1>
                <hr/>
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
            products: state.productsReducer,
        }
    },{
        getProducts: productsActions.getProducts
    }
)(Home);