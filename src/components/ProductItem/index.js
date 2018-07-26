import React from 'react';
import './ProductItem.css'

export default function ProductItem(props) { //<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
    return <div key={props.index} className="card cards">
            <img className="card-img-top imageStyle"
                src={`/assets/${props.product.image}`}
                alt=""
                />        
            <div className="card-body">
                <h4 className="card-title">{props.product.name}</h4>
                <p className="card-text">{props.product.description}</p>
            </div>
            <div className="card-footer">
                <p className="card-text text-muted">Precio $ {props.product.price}</p>
                { props.button }
            </div>
        </div>
      
}