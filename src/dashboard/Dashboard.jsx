import React from 'react'
import './Dashboard.css'
import SideBar from './components/sidebar/SideBar'
import DashboardHome from './pages/DashboardHome/DashboardHome'
import AddProduct from './pages/products/AddProduct/AddProduct'
import Products from './pages/products/Products'
import UpdateProduct from './pages/products/UpdateProduct'
import Categories from './pages/categories/Categories'
import AddCategory from './pages/categories/AddCategory'
import UpdateCategory from './pages/categories/UpdateCategory'
import Shops from './pages/shops/Shops'
import AddShop from './pages/shops/AddShop'
import UpdateShop from './pages/shops/UpdateShop'
import Orders from './pages/orders/Orders'
import Customers from './pages/customers/Customers'
import AddCustomer from './pages/customers/AddCustomer'
import UpdateCustomer from './pages/customers/UpdateCustomer'
import Riders from './pages/riders/Riders'
import AddRider from './pages/riders/AddRider'
import UpdateRider from './pages/riders/UpdateRider'
import { Route } from 'react-router'
import { connect } from "react-redux";
import {

    login,
  } from '../redux/login/loginActions';
const Dashboard=({login})=> {
    return (
        <div className="dashboard">
            <aside>
                <SideBar />
            </aside>
            <header className="dashboard-header">
            <section className="sidebar_logo">
          <h1>DynamicDukan</h1>
        
        </section>
        <section className="logoutbtn">
        <span onClick={()=>{
            login(0);
        }}> Logout</span>
          </section>
            </header>
            <section className="content">
            <switch>
           <Route exact path="/dynamicdukan" component={DashboardHome}/>
           <Route path="/dynamicdukan/orders" component={Orders}/>
           <Route path="/dynamicdukan/shops" component={Shops}/>
           <Route path="/dynamicdukan/addshop" component={AddShop}/>
           <Route path="/dynamicdukan/updateshop" component={UpdateShop}/>
           <Route path="/dynamicdukan/customers" component={Customers}/>
           <Route path="/dynamicdukan/addcustomer" component={AddCustomer}/>
           <Route path="/dynamicdukan/updatecustomer" component={UpdateCustomer}/>
           <Route path="/dynamicdukan/riders" component={Riders}/>
           <Route path="/dynamicdukan/addrider" component={AddRider}/>
           <Route path="/dynamicdukan/updaterider" component={UpdateRider}/>
           <Route path="/dynamicdukan/categories" component={Categories}/>
           <Route path="/dynamicdukan/updatecategory" component={UpdateCategory}/>
           <Route path="/dynamicdukan/addcategory" component={AddCategory}/>
           <Route path="/dynamicdukan/products" component={Products}/>
           <Route path="/dynamicdukan/updateproduct" component={UpdateProduct}/>
           <Route path="/dynamicdukan/addproduct" component={AddProduct}>
           </Route>
           
           
           
           
           
           </switch>
            </section>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: (role) => dispatch(login(role)),
    };
  };
export default  connect(null, mapDispatchToProps) (Dashboard)
