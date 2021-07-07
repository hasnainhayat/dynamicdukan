import React from 'react';
import '../../components/css/page.css'
import CategoryTable from '../../components/CategoryTable/CategoryTable';
function Categories() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Categories</h3>
            <section className="button-group">
            <a href="#" className="addNewButton">+ Add New</a>
            </section>
        </div>
        <div className="contentContainer">
        <CategoryTable />
        </div>
        </div>
    )
}

export default Categories
