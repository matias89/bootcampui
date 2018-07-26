import React from 'react';
import './Carousel.css';

const Carousel = (props) => {
    return <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="2000">
    <div class="carousel-inner carouselProperties">
      {props.items}      
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
}


export default Carousel;