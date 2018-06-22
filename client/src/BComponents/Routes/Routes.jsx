import React from 'react';
import {
    //BrowserRouter as 
    Router,
    Route
    //Link
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Navbar from '../Navbar/Navbar';
import MainPage from '../MainPage/MainPage';
import LandingPage from '../LandingPage/LandingPage'
import Cart from '../Cart/Cart';
import CheckOut from '../Cart/CheckOut';
import AdminDrawer from '../../cms/admin/Drawer';


const customHistory = createBrowserHistory();

const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar history={customHistory} />
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/cart' component={Cart}/>
            <Route path='/home' component={MainPage}/>
            <Route path='/checkout'  component={CheckOut}/>
            <Route path='/cms'  component={AdminDrawer}/>
           
        </div>
    </Router>
    )
    
    export default CustomRoutes;