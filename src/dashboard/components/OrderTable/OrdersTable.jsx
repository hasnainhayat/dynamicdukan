import React from 'react';
import "../css/table.css";
import "./OrdersTable.css"
import orders from '../../../logic/orders'
function OrdersTable() {
  
    return (
        <div className="tableContainer orderTableContainer">
        <table className="table orderTable">
            <thead>
            <tr>
                <th>Order Items</th>
                <th>Customer Name</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
                </tr>
            </thead>
            {orders.map((order)=>{
                var total=0;
               return <tr>
            <td>{
                order.orderItems.map((item=>{
                return item.title + ", "
            }))}</td>
            <td>{order.customerName}</td>
            <td>{order.orderItems.forEach((item=>{
                total+=item.price;
            }))}
            {total}
            
            </td>
            <td>{order.status}</td>
            <td> <i class="fas fa-trash-alt deleteIcon" title="Delete order"></i></td>
            </tr>
            })}
           
        </table>
            
        </div>
    )
}

export default OrdersTable
