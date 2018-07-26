// @Vendors
import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

// @Store
import store from './store';
// @Routes
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Cart from './pages/Cart';
import Cervezas from './pages/Categories/cerveza';
import Fernet from './pages/Categories/fernet';
import Whisky from './pages/Categories/whisky';
import Gaseosas from './pages/Categories/gaseosas';

class App extends Component {


    render() {
        return(
            <Provider store={store}>
                <Router>
                    <Layout>
                        <Route path="/" exact component={ Home } />
                        <Route path="/products" component={ Products } />
                        <Route path="/cart" component={ Cart } />
                        <Route path="/cervezas" component={ Cervezas } />
                        <Route path="/fernet" component={ Fernet } />
                        <Route path="/whisky" component={ Whisky } />
                        <Route path="/gaseosas" component={ Gaseosas } />
                    </Layout>
                </Router>
            </Provider>
        );
    }

}

export default App;