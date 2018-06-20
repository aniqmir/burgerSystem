import React from 'react';
import {
    //BrowserRouter as 
    Router,
    Route
    //Link
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

<<<<<<< HEAD:client/src/BComponents/Routes/Routes.jsx
import Navbar from '../Navbar/Navbar';
import MainPage from '../MainPage/MainPage';
import LandingPage from '../LandingPage/LandingPage'
import Cart from '../Cart/Cart';
=======
import Navbar from './Navbar';
import MainPage from './MainPage';
import Features from './Features';
import LandingPage from './LandingPage'
import Cart from './Cart';
import CheckOut from './CheckOut';
import Cms from '../cms/admin/login';
>>>>>>> 225e493499d777c3fb53304a15312ff657d05456:client/src/BComponents/Routes.jsx

const customHistory = createBrowserHistory();

const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar history={customHistory} />
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/cart' component={Cart}/>
            <Route path='/home' component={MainPage}/>
<<<<<<< HEAD:client/src/BComponents/Routes/Routes.jsx
=======
            <Route path='/f' component={Features}/>
            <Route path='/checkout'  component={CheckOut}/>
            <Route path='/cms'  component={Cms}/>
>>>>>>> 225e493499d777c3fb53304a15312ff657d05456:client/src/BComponents/Routes.jsx
        </div>
    </Router>
    )
    
    export default CustomRoutes;