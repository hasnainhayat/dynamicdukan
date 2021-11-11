import React from 'react';
import '../../components/css/page.css'
import CategoryTable from '../../components/CategoryTable/CategoryTable';
import { NavLink } from 'react-router-dom';
function Categories() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Categories</h3>
            <section className="button-group">
            <NavLink to="/dynamicdukan/addcategory" className="addNewButton">+ Add New</NavLink>
            </section>
        </div>
        <div className="contentContainer">
        <CategoryTable />
        </div>
        </div>
    )
}

export default Categories
