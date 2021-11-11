import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/css/page.css'
import ProductsTable from '../../components/ProductsTable/ProductsTable';
function Products() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Products</h3>
            <section className="button-group">
            <NavLink to="/dynamicdukan/addproduct" className="addNewButton">+ Add New</NavLink>
            </section>
        </div>
        <div className="contentContainer">
        <ProductsTable />
        </div>
        </div>
    )
}

export default Products
