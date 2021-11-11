import React from 'react';
import '../../components/css/page.css'
import ProductsTable from '../../components/ProductsTable/ProductsTable';
import CustomerTable from '../../components/CustomerTable/CustomerTable';
import { NavLink } from 'react-router-dom';
function Customers() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Customers</h3>
            <section className="button-group">
            <NavLink to="/dynamicdukan/addcustomer" className="addNewButton">+ Add New</NavLink>
            </section>
        </div>
        <div className="contentContainer">
        <CustomerTable />
        </div>
        </div>
    )
}

export default Customers
