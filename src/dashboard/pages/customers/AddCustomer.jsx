import React from 'react';

import '../../components/css/page.css'
import '../../components/css/form.css'

import UploadImage from '../../components/UploadImage/UploadImage';

function AddCustomer() {

    return (
        <div className="updateCustomer page">
        <div className="pageHeader">
            <h3>Add Customer</h3>
        </div>
        <div className="contentContainer">
            <form className="dashboard-form">
            <div className="form-left">
                <div className="form-group">
                    <label>Customer Name</label>
                    <input type="text" placeholder="Enter Customer Name" className="formInput" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" placeholder="Enter Email" className="formInput" />
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" placeholder="Enter Contact Number" className="formInput"/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" placeholder="Enter Address" className="formInput" />
                </div>
               
               
                <div className="form-group btn-group">
                <button className="cancelFormBtn" type="reset">Cancel</button>
                    <button type="submit" className="submitBtn">Create Customer</button>
                </div>
                </div>
                <div className="form-right">
                <UploadImage />
                 </div>
            </form>
        </div>
        </div>
    )
}

export default AddCustomer
