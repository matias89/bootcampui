import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './CheckOut.css';

class CheckOut extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        
    }
    
    render() {
        return (
        	<div className='container jumboClas'>
                <div class="jumbotron jumbotron-fluid text-center">
                    <div class="container">
                        <h1 class="display-1 text-success"><span className='fa fa-check-circle'></span></h1>
                        <p class="lead">Gracias por la compra, el envió se realizara a la brevedad!</p>
                        <NavLink to='/' className='btn btn-primary'>Volver</NavLink>
                    </div>
                </div> 
            </div>
            
        );
    }
}

export default CheckOut;