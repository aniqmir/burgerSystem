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
<<<<<<< HEAD:client/src/BComponents/Routes/Routes.jsx
import AdminDrawer from '../../cms/admin/Drawer';
=======
import ClientSignIn from '../ClientSign/ClientSigIn'
>>>>>>> 4ef9ed5145ada190de33ecb9283d1505ad63400a:client/src/endusers/Routes/Routes.jsx


const customHistory = createBrowserHistory();

const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar history={customHistory} />
            <Route exact path='/' component={LandingPage}/>
            <Route path='/home' component={MainPage} history={customHistory} />
            <Route path='/cart'  component={Cart}/>
            <Route path='/checkout'  component={CheckOut}/>
<<<<<<< HEAD:client/src/BComponents/Routes/Routes.jsx
            <Route path='/cms'  component={AdminDrawer}/>
           
=======
            <Route path='/signin' component={ClientSignIn}/>
>>>>>>> 4ef9ed5145ada190de33ecb9283d1505ad63400a:client/src/endusers/Routes/Routes.jsx
        </div>
    </Router>
    )
    
    export default CustomRoutes;