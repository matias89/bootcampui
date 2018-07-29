import React from 'react';
import Summary from '../../components/HomeComponents/Texts/Summary';
import Carousel from '../../components/HomeComponents/Carousel/Carousel';
import OurProduct from '../../components/HomeComponents/Texts/OurProduct';
import './grid.css';

const Grid = () => {
  return(
    <div>
      <div className = "row">
        <div className = "col" id = "c1">
          <OurProduct />
        </div>
        <div className = "col" id = "c2">
          <Summary />
        </div>      
      </div>      
      <div className = "row" id = "c3">
        <Carousel />
      </div>
    </div>
  );
}

export default Grid;