import React, { Component } from 'react';
import carousel from '../../components/carousel3/carousel'

class Home extends Component {
    render() {
        return (

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img src="https://cdn.shopify.com/s/files/1/1755/5355/products/mock-22-1771-FFFFFF-nh-s-18693126330484312501488825718-3_1800x.png?v=1488825742" alt="Los Angeles" />
                    </div>

                    <div className="item">
                        <img src="https://cdn.shopify.com/s/files/1/1755/5355/products/mock-22-1771-FFFFFF-nh-s-18693126330484312501488825718-3_1800x.png?v=1488825742" alt="Chicago" />
                    </div>

                    <div className="item">
                        <img src="https://cdn.shopify.com/s/files/1/1755/5355/products/mock-22-1771-FFFFFF-nh-s-18693126330484312501488825718-3_1800x.png?v=1488825742" alt="New York" />
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
export default Home;