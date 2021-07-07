import React from 'react';
import "../css/table.css";
import "./CategoryTable.css"
import categories from '../../../logic/categories';
import { NavLink } from 'react-router-dom';
function CategoryTable() {
    return (
        <div className="tableContainer categoryTableContainer">
        <table className="table categoryTable">
            <thead>
            <tr>
                <th>Category Image</th>
                <th>Category name</th>
                <th>Actions</th>
                </tr>
            </thead>
            {categories.map((category)=>{
               return <tr>
            <td><img src={category.image} /></td>
            <td>{category.title}</td>
            <td><NavLink to="/updatecategory"><i class="far fa-edit editIcon" title="Edit Category"></i></NavLink> <i class="fas fa-trash-alt deleteIcon" title="Delete Category"></i></td>
            </tr>
            })}
           
        </table>
            
        </div>
    )
}

export default CategoryTable
