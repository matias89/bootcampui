import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer(){
    return (
        <section id="footer">
		    <div classNameName="container">
			    <div className="row flexi">
				    <div className="col-xs-12 col-sm-3 col-md-3">
                        <h5>Menu</h5>
                        <ul className="list-unstyled quick-links">
                        <li><NavLink to='/'><i className="fa fa-angle-double-right"></i>Inicio</NavLink></li>
                            <li><NavLink to='/products'><i className="fa fa-angle-double-right"></i>Productos</NavLink></li>
                            <li><NavLink to='/cart'><i className="fa fa-angle-double-right"></i>Carrito</NavLink></li>
                        </ul>
				    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <h5>Map</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2751883862875!2d-65.30522378466739!3d-26.79936498317654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242c6ce5f3a83%3A0x5f8466a4a804d503!2sGlobant+Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1532547909857" width="400" height="300" frameborder="0"  allowfullscreen></iframe>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><a href="#footer"><i className="fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#footer"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#footer"><i className="fa fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#footer"><i className="fa fa-google-plus"></i></a></li>
                            <li className="list-inline-item"><a href="#footer"><i className="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <hr/>
                </div>	
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p><u> <a href="/">Bootcamp UI 2018</a></u> is a Registered TradeMark</p>
                        <p className="h6">All right Reversed.</p>
                    </div>
                    <hr/>
                </div>	
		</div>
	</section>
    );

}