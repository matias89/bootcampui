import React from 'react';
import './Carousel.css';

const Carousel = (props) => {
    return <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2000">
    <div className="carousel-inner carouselProperties">
      {props.items}      
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
}


export default Carousel;