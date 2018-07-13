import React from 'react';
import {
    Router,
    Route
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
import Pizza from '../MainPage/Pizza';
import Burger from '../MainPage/Burger';
import ColdDrinks from '../MainPage/Colddrinks';
import Deserts from '../MainPage/Deserts';
import DonnerKababs from '../MainPage/DonnerKababs';
import FishandChips from '../MainPage/FishandChips';
import HotBites from '../MainPage/HotBites';
import Panini from '../MainPage/Panini';
import PeriPeriChicken from '../MainPage/PeriPeriChicken';
import Sauces from '../MainPage/Sauces';
import SouthernFriedChicken from '../MainPage/SouthernFriedChicken';
import Vegetarian from '../MainPage/Vegetarian';
import Wraps from '../MainPage/Wraps';
import FreshNanKabab from '../MainPage/FreshNanKabab';

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
            <Route path='/pizza' component={Pizza}/>
            <Route path='/burger' component={Burger}/>
            <Route path='/freshnaankababs' component={FreshNanKabab}/>
            <Route path='//wraps' component={Wraps}/>
            <Route path='/panini' component={Panini}/>
            <Route path='/periperichicken' component={PeriPeriChicken}/>
            <Route path='/fishandchips' component={FishandChips}/>
            <Route path='/donnerkababs' component={DonnerKababs}/>
            <Route path='/hotbites' component={HotBites}/>
            <Route path='/vegetarian' component={Vegetarian}/>
            <Route path='/deserts' component={Deserts}/>
            <Route path='/sauces' component={Sauces}/>
            <Route path='/colddrinks' component={ColdDrinks}/>
            <Route path='/southernfriedchicken' component={SouthernFriedChicken}/>
        </div>
    </Router>
    )
    
    export default CustomRoutes;