import React from 'react';
import './Carousel.css';

const CarouselItem = (props) => {
    if(props.index === 0){
        return <div className="carousel-item active itemss">
            <img className="d-block w-100" src={`/assets/${props.product.image}`}  alt="" />
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.product.name}</h5>
                <p>{props.product.description}</p>
            </div>
        </div>
    }else {
       return <div className="carousel-item itemss ">
            <img className="d-block w-100" src={`/assets/${props.product.image}`}  alt="" />
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.product.name}</h5>
                <p>{props.product.description}</p>
            </div>
        </div>
    }
}

export default CarouselItem;