// @Styles
import './Layout.css';
// @Vendors
import React from 'react';
import { withRouter } from 'react-router-dom';
// @Components
import Header from '../../components/Header/Header';

class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header
                    routes={[{
                            title: 'Inicio',
                            path: '/'
                        },{
                            title: 'Productos',
                            path: '/products'
                        }]
                    }
                />
                <div className="main container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default (withRouter(Layout));