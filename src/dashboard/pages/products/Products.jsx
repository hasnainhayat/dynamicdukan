import React from 'react';
import '../../components/css/page.css'
import ProductsTable from '../../components/ProductsTable/ProductsTable';
function Products() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Products</h3>
            <section className="button-group">
            <a href="#" className="addNewButton">+ Add New</a>
            </section>
        </div>
        <div className="contentContainer">
        <ProductsTable />
        </div>
        </div>
    )
}

export default Products
