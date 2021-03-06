import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/css/page.css'

import RidersTable from '../../components/RidersTable/RidersTable';
function Riders() {
    return (
        <div className="addProduct page">
             <div className="pageHeader">
            <h3>Riders</h3>
            <section className="button-group">
            <NavLink to="/dynamicdukan/addrider" className="addNewButton">+ Add New</NavLink>
            </section>
        </div>
        <div className="contentContainer">
        <RidersTable />
        </div>
        </div>
    )
}

export default Riders
