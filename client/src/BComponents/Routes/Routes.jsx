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
import ClientSignIn from '../ClientSign/ClientSignIn'
import ClientSignUp from '../ClientSign/ClientSignUp'


const customHistory = createBrowserHistory();

const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar history={customHistory} />
            <Route exact path='/' component={LandingPage}/>
            <Route path='/home' component={MainPage} history={customHistory} />
            <Route path='/cart'  component={Cart}/>
            <Route path='/checkout'  component={CheckOut}/>
            <Route path='/signin' component={ClientSignIn}/>
            <Route path='/signup' component={ClientSignUp}/>
        </div>
    </Router>
    )
    
    export default CustomRoutes;