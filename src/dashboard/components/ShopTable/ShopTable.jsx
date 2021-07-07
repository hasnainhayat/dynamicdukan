import React from 'react';
import "../css/table.css";
import "./ShopTable.css"
import shops from '../../../logic/shops';
import { NavLink } from 'react-router-dom';
function ShopTable() {
    return (
        <div className="tableContainer shopTableContainer">
        <table className="table shopTable">
            <thead>
            <tr>
                <th>Shop Image</th>
                <th>Shop name</th>
                <th>Actions</th>
                </tr>
            </thead>
            {shops.map((shop)=>{
               return <tr>
            <td><img src={shop.image} /></td>
            <td>{shop.title}</td>
            <td><NavLink to="/updateshop"><i class="far fa-edit editIcon" title="Edit shop"></i></NavLink> <i class="fas fa-trash-alt deleteIcon" title="Delete shop"></i></td>
            </tr>
            })}
           
        </table>
            
        </div>
    )
}

export default ShopTable
