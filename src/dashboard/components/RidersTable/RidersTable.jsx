import React from 'react';
import "../css/table.css";
import "./RidersTable.css"
import riders from '../../../logic/riders';
import { NavLink } from 'react-router-dom';
function RidersTable() {
    return (
        <div className="tableContainer ridersTableContainer">
        <table className="table ridersTable">
            <thead>
            <tr>
                <th>Rider Image</th>
                <th>Rider name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>CNIC</th>
                <th>Bike #</th>
                <th>Address</th>
                <th>Actions</th>
                </tr>
            </thead>
            {riders.map((rider)=>{
               return <tr>
            <td><img src={rider.image} /></td>
            <td>{rider.name}</td>
            <td>{rider.email}</td>
            <td>{rider.contact}</td>
            <td>{rider.CNIC}</td>
            <td>{rider.BikeNumber}</td>
            <td>{rider.address}</td>
            <td><NavLink to="/updaterider"><i class="far fa-edit editIcon" title="Edit rider"></i></NavLink> <i class="fas fa-trash-alt deleteIcon" title="Delete rider"></i></td>
            </tr>
            })}
           
        </table>
            
        </div>
    )
}

export default RidersTable
