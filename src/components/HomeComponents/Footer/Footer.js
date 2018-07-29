import React from 'react';
import './footer.css';

const Footer = () => {
  return(
    <footer className = "container card" id = "mainFooter">
      <div className = "row card-body" id="cardbody">
        <div className = "col-4" id = "col1">                      
          <ul>
            <i className = "fa fa-phone"> +54-9-381-123456789</i>
          </ul>
          <ul>
            <i className = "fa fa-send-o"> soylacerda@asd.com</i>
          </ul>
          <ul>
           <i className = "fa fa-street-view"> 123 Fake St.</i>
          </ul>
          <ul>
            <i className = "fa fa-globe"> Tucuman, Argentina</i>
          </ul>            
        </div>
        <div className = "col-4" id = "col2">
          <p>Gonzalo Alvarez Campos - 2018</p>
        </div>
        <div className = "col-4 embed-responsive">
          <iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.185235483144!2d-65.30174659201516!3d-26.79979949060006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242c6a4ac3bfb%3A0xc2799b88f1c353c4!2sALTERCITY+BUSINESS+PARK!5e0!3m2!1ses!2sar!4v1532803390271"
           title = "map"
           width = "200" 
           height = "250"  
           allowFullScreen
           className = "embed-responsive-item"></iframe>          
        </div>        
      </div>
    </footer> 
  );
}

export default Footer;