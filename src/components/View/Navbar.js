import React from 'react';

const Navbar = (props) =>{
  return(
    <div>
      <nav>        
        <button onClick={props.home}>Home</button>
        <button onClick={props.beer}>Products</button>
        <button onClick={props.info}>Contact Info</button>
        <button onClick={props.qa}>Q&A</button>
      </nav>
    </div>
  );
}

export default Navbar;