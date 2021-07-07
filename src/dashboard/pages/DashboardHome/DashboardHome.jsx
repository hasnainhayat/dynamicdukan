import React from 'react'
import './DashboardHome.css'
import DashboardCard from '../../components/dashboardcard/DashboardCard'
import ProductsTable from '../../components/ProductsTable/ProductsTable'
function DashboardHome() {
    return (
        <div className="dashboardHome">
            <section className="cards">
                <DashboardCard className="card1" value="35" title="sales" percent={25} time="Since last week"/>
                <DashboardCard className="card2" value="52" title="Customers" percent={50} time="Since last week"/>
                <DashboardCard className="card3" value="5507" title="Revenue" percent={5} time="Since last month"/>
            </section>
            <section className="tableCard">
            <h2>Trending Products</h2>
                <ProductsTable />
             
            </section>
        </div>
    )
}

export default DashboardHome
