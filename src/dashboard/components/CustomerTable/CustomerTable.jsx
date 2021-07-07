import React from 'react';
import "../css/table.css";
import "./CustomerTable.css"
import customers from '../../../logic/customers';
import { NavLink } from 'react-router-dom';
function CustomerTable() {
    return (
        <div className="tableContainer customerTableContainer">
        <table className="table customerTable">
            <thead>
            <tr>
                <th>Customer Image</th>
                <th>Customer name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Actions</th>
                </tr>
            </thead>
            {customers.map((customer)=>{
               return <tr>
            <td><img src={customer.image} /></td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.contact}</td>
            <td>{customer.address}</td>
            <td><NavLink to="/updatecustomer"><i class="far fa-edit editIcon" title="Edit customer"></i></NavLink> <i class="fas fa-trash-alt deleteIcon" title="Delete customer"></i></td>
            </tr>
            })}
           
        </table>
            
        </div>
    )
}

export default CustomerTable
