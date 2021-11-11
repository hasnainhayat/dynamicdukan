import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './customer/components/auth/AuthForms/Login'
import Footer from './customer/components/footer/Footer'
import Header from './customer/components/header/Header'
import Cart from './customer/pages/cart/Cart'
import Home from './customer/pages/home/Home'
import RegisterCategory from './customer/pages/RegisterCategory/RegisterCategory'
import Shop from './customer/pages/shop/Shop'
import DashBoard from './dashboard/Dashboard';
import RegisterUser from './customer/components/auth/AuthForms/Register/RegisterUser';
import RegisterRider from './customer/components/auth/AuthForms/Register/RegisterRider';
import RegisterVendor from './customer/components/auth/AuthForms/Register/RegisterVendor';
import {useSelector} from 'react-redux';
import Contact from './customer/pages/contact/Contact'
function App() {
  const userRole=useSelector((state)=>state.login.role);
  return (
    <div className="App">
    {userRole==="admin" || userRole==="vendor"?  <DashBoard /> :  <div>
    <Header />
    <Switch>
    
      <Route exact path='/dynamicdukan' component={Home} />
      <Route path='/dynamicdukan/login' component={Login} />
      <Route path='/dynamicdukan/register' component={RegisterCategory} />
      <Route path='/dynamicdukan/shop' component={Shop} />
      <Route path='/dynamicdukan/cart' component={Cart} />
      <Route path='/dynamicdukan/registeruser' component={RegisterUser} />
      <Route path='/dynamicdukan/registerrider' component={RegisterRider} />
      <Route path='/dynamicdukan/registervendor' component={RegisterVendor} />
      <Route path='/dynamicdukan/contact' component={Contact} />
      
      
      {/* <Route component={Error} /> */}
    </Switch>
     <Footer />
     </div>}
  

    </div>
  )
}

export default App

