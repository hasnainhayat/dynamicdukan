import React from 'react';
import '../../components/css/page.css'
import OrdersTable from '../../components/OrderTable/OrdersTable';
function Orders() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Orders</h3>
            <section className="button-group">
            <a href="#" className="addNewButton">+ Add New</a>
            </section>
        </div>
        <div className="contentContainer">
        <OrdersTable />
        </div>
        </div>
    )
}

export default Orders
