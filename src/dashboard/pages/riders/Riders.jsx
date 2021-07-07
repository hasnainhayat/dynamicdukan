import React from 'react';
import '../../components/css/page.css'

import RidersTable from '../../components/RidersTable/RidersTable';
function Riders() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Riders</h3>
            <section className="button-group">
            <a href="#" className="addNewButton">+ Add New</a>
            </section>
        </div>
        <div className="contentContainer">
        <RidersTable />
        </div>
        </div>
    )
}

export default Riders
