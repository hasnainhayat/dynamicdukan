import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/css/page.css'
import ShopTable from '../../components/ShopTable/ShopTable';
function PendingShops() {
    return (
        <div className="addProduct page">3
             <div className="pageHeader">
            <h3>Shops</h3>
            <section className="button-group">
           
            </section>
        </div>
        <div className="contentContainer">
        <ShopTable />
        </div>
        </div>
    )
}

export default PendingShops
