import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/css/page.css'
import ShopTable from '../../components/ShopTable/ShopTable';
function Shops() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Shops</h3>
            <section className="button-group">
            <NavLink to="/dynamicdukan/addshop" className="addNewButton">+ Add New</NavLink>
            </section>
        </div>
        <div className="contentContainer">
        <ShopTable />
        </div>
        </div>
    )
}

export default Shops
