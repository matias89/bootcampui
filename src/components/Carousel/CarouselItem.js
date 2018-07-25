import React from 'react';
import './Carousel.css';

const CarouselItem = (props) => {
    if(props.index === 0){
        return <div class="carousel-item active itemss">
            <img class="d-block w-100" src={`/assets/${props.product.image}`}  alt="" />
            <div class="carousel-caption d-none d-md-block">
                <h5>{props.product.name}</h5>
                <p>{props.product.description}</p>
            </div>
        </div>
    }else {
       return <div class="carousel-item itemss ">
            <img class="d-block w-100" src={`/assets/${props.product.image}`}  alt="" />
            <div class="carousel-caption d-none d-md-block">
                <h5>{props.product.name}</h5>
                <p>{props.product.description}</p>
            </div>
        </div>
    }
}

export default CarouselItem;