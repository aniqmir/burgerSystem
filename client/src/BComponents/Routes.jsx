import React from 'react';
import {
    //BrowserRouter as 
    Router,
    Route
    //Link
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Navbar from './Navbar';
import MainPage from './MainPage';
import Features from './Features';
import LandingPage from './LandingPage'
import Cart from './Cart';
import CheckOut from './CheckOut';


const customHistory = createBrowserHistory();

const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar history={customHistory} />
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/cart' component={Cart}/>
            <Route path='/home' component={MainPage}/>
            <Route path='/f' component={Features}/>
            <Route path='/checkout'  component={CheckOut}/>
        </div>
    </Router>
    )
    
    export default CustomRoutes;