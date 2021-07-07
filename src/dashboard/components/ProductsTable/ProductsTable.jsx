import React from 'react';
import "../css/table.css";
import "./ProductsTable.css"
import products from '../../../logic/products'
import { NavLink } from 'react-router-dom';

function ProductsTable() {
    return (
        <div className="tableContainer productTableContainer">
        <table className="table productTable">
            <thead>
            <tr>
                <th>Product Image</th>
                <th>Product name</th>
                <th>measuring Unit</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
                </tr>
            </thead>
            {products.map((product)=>{
               return <tr>
            <td><img src={product.image} /></td>
            <td>{product.title}</td>
            <td>{product.unit}</td>
            <td>fruit</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td><NavLink to="/updateproduct"><i class="far fa-edit editIcon" title="Edit Product"></i></NavLink> <i class="fas fa-trash-alt deleteIcon" title="Delete Product"></i></td>
            </tr>
            })}
           
        </table>
            
        </div>
    )
}

export default ProductsTable
