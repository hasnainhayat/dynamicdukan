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
import {useSelector} from 'react-redux';
function App() {
  const userRole=useSelector((state)=>state.login.role);
  return (
    <div className="App">
    {userRole==="admin" ?  <DashBoard /> :  <div>
    <Header />
    <Switch>
    
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={RegisterCategory} />
      <Route path='/shop' component={Shop} />
      <Route path='/cart' component={Cart} />
      
      {/* <Route component={Error} /> */}
    </Switch>
     <Footer />
     </div>}
  

    </div>
  )
}

export default App

