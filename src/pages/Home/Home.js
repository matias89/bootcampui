import React, { Component } from 'react';
import Grid from '../../containers/Grid/Grid';
import Title from '../../components/HomeComponents/Texts/Title';

class Home extends Component {
  render(){
    return(
      <div>
        <Title />
        <Grid />  
      </div>        	
    );
  }
}

export default Home;