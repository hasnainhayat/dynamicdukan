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
function Dashboard() {
    return (
        <div className="dashboard">
            <aside>
                <SideBar />
            </aside>
            <header>
            <section className="sidebar_logo">
          <h1>DynamicDukan</h1>
        </section>
            </header>
            <section className="content">
            <switch>
           <Route path="/dashboard" component={DashboardHome}/>
           <Route path="/orders" component={Orders}/>
           <Route path="/shops" component={Shops}/>
           <Route path="/addshop" component={AddShop}/>
           <Route path="/updateshop" component={UpdateShop}/>
           <Route path="/customers" component={Customers}/>
           <Route path="/addcustomer" component={AddCustomer}/>
           <Route path="/updatecustomer" component={UpdateCustomer}/>
           <Route path="/riders" component={Riders}/>
           <Route path="/addrider" component={AddRider}/>
           <Route path="/updaterider" component={UpdateRider}/>
           <Route path="/categories" component={Categories}/>
           <Route path="/updatecategory" component={UpdateCategory}/>
           <Route path="/addcategory" component={AddCategory}/>
           <Route path="/products" component={Products}/>
           <Route path="/updateproduct" component={UpdateProduct}/>
           <Route path="/addproduct" component={AddProduct}>
           </Route>
           
           
           
           
           
           </switch>
            </section>
        </div>
    )
}

export default Dashboard
