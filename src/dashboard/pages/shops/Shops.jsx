import React from 'react';
import '../../components/css/page.css'
import ShopTable from '../../components/ShopTable/ShopTable';
function Shops() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Shops</h3>
            <section className="button-group">
            <a href="#" className="addNewButton">+ Add New</a>
            </section>
        </div>
        <div className="contentContainer">
        <ShopTable />
        </div>
        </div>
    )
}

export default Shops
