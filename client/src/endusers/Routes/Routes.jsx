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
import AdminDrawer from '../../cms/admin/Drawer';
import Additem from '../../cms/admin/AddItem';
import Appbar from '../../cms/appbar/appbar';
import Search from '../Search/Search';
import Employee from '../../cms/employee/Drawer';

const customHistory = createBrowserHistory();

const CustomRoutes = () => (
    <Router history={customHistory} >
        <div>
            <Navbar history={customHistory} />
            <Route exact path='/' component={LandingPage}/>
            <Route path='/home' component={MainPage} history={customHistory} />
            <Route path='/cart'  component={Cart}/>
            <Route path='/checkout'  component={CheckOut}/>
            <Route path='/admin'  component={AdminDrawer}/>
            <Route path='/additem'  component={Additem}/>
            <Route path='/cms'  component={Appbar} />
            <Route path='/emp'  component={Employee} />
            <Route path='/signin' component={ClientSignIn} name={'Sign In'}/>
            <Route path='/signup' component={ClientSignUp}/>
            <Route path='/search' component={Search}/>
        </div>
    </Router>
    )
    
    export default CustomRoutes;