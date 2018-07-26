import React, { Component } from 'react';
import ItemList from '../../components/View/ItemList';
import SearchBox from '../../components/View/searchBox'; 
import Cart from '../../components/View/Cart';
import Navbar from '../../components/View/Navbar' ;
import Aux from '../../components/HoC/Auxiliary';
import {products} from '../../components/View/products';
import Contact from '../../components/View/Contact';
import QA from '../../components/View/QA';

class Home extends Component {
  state = {
    productsBeer: products,
    productList: '',
    showHome: true,
    showProducts: false,
    showInfo: false,
    showQA: false
  }

  searchEngine= (event) =>{
    const asd = event.target.value;
    this.setState({productList: asd});
  }

  /* toggle buttons */

  toggleHome = () =>{
    const homeOn=true;
    const productOn=false;
    const infoOn=false;
    const showqaOn=false;
    this.setState({showHome: homeOn});
    this.setState({showProducts: productOn});
    this.setState({showInfo: infoOn});
    this.setState({showQA: showqaOn});
  }

  toggleProducts = () =>{
    const homeOn=false;
    const productOn=true;
    const infoOn=false;
    const showqaOn=false;
    this.setState({showHome: homeOn});
    this.setState({showProducts: productOn});
    this.setState({showInfo: infoOn});
    this.setState({showQA: showqaOn});
  }

  toggleInfo = () =>{
    const homeOn=false;
    const productOn=false;
    const infoOn=true;
    const showqaOn=false;
    this.setState({showHome: homeOn});
    this.setState({showProducts: productOn});
    this.setState({showInfo: infoOn});
    this.setState({showQA: showqaOn});
  }

  toggleShow = () =>{
    const homeOn=false;
    const productOn=false;
    const infoOn=false;
    const showqaOn=true;
    this.setState({showHome: homeOn});
    this.setState({showProducts: productOn});
    this.setState({showInfo: infoOn});
    this.setState({showQA: showqaOn});
  }
    render() {
      /*  Render Logic  */
      let home=null;
      let beer=null;
      let info=null;
      let qa=null;
      const filteredBeer = this.state.productsBeer.filter(productsBeers =>{
        return productsBeers.name.toLowerCase().includes(this.state.productList.toLowerCase());
      })
      console.log(filteredBeer)
      
      if(this.state.showHome){
        home=(
          <div>
            <article>
              <h1>Welcome to ower brewery!</h1> 
              <img src="http://dicksbeer.com/wp-content/uploads/2014/09/brewerytour22.png" alt="beer"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur assumenda sapiente consectetur eligendi eaque culpa eum, odit tempore, atque optio! Blanditiis dolor, delectus quam, eligendi vel atque. Voluptatum, officia, asperiores.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ullam obcaecati impedit deleniti cupiditate possimus blanditiis totam, iste non maxime dicta, magnam ea, asperiores id voluptas unde corporis. Repellat, ducimus!</p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>            
            </article>            
          </div>
        )
      }
      if(this.state.showProducts){
        beer=(
          <Aux>
          <h1>Products</h1>
            <SearchBox searchInput={this.searchEngine}/>
            <ItemList products={filteredBeer}/>
            <div className='dib br3 pa3 ma2'>
              <Cart/>    
            </div>
            
          </Aux>         
        )
      }
      if(this.state.showInfo){
        info=(
          <Contact/>
        )
      }
      if(this.state.showQA){
        qa=(
          <QA/>
          )
      }
      /*------------*/
        return (
        	<div>
            <Navbar              
              home={this.toggleHome} 
              beer={this.toggleProducts}
              info={this.toggleInfo}
              qa={this.toggleShow}
            /> 
            {home}                  
            {beer}
            {info}
            {qa}
            <hr/>
            <footer>
              <div>
                <h4>Acount</h4>
                <p>Log In</p>
              </div>
              <div>
                <h4>About Us</h4>
                <p>About Beer</p>
                <p>FAQs</p>
                <p>Contact Us</p>
                <p>Devolopers</p>
              </div>
            </footer>
          </div>
        );
    }
}

export default Home;