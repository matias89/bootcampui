import React from 'react';

const Carousel = () => {
  return(
    <div id="carouselControls" className="carousel slide" data-ride="carousel" data-interval="2500">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://cdn-images-1.medium.com/max/2000/1*bXQKyErW2ZqXszI7-Kz1XA.jpeg" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://www.nottinghamcraftbeer.co.uk/media/1064/abbaye.jpg" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://www.nuffoodsspectrum.asia/uploads/articles/1-611.jpg" alt="Third slide"/>
        </div>
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
  );
}

export default Carousel;