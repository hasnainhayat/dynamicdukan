import React from 'react';
import customers from '../../../logic/customers';
import '../../components/css/page.css'
import '../../components/css/form.css'

import UploadImage from '../../components/UploadImage/UploadImage';

function UpdateCustomer() {
    const customer=customers[0];
    return (
        <div className="updateCustomer page">
        <div className="pageHeader">
            <h3>Edit Customer</h3>
        </div>
        <div className="contentContainer">
            <form className="dashboard-form">
            <div className="form-left">
                <div className="form-group">
                    <label>Customer Name</label>
                    <input type="text" placeholder="Enter Customer Name" className="formInput" value={customer.name}/>
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input type="text" placeholder="Enter Email" className="formInput" value={customer.email}/>
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" placeholder="Enter Contact Number" className="formInput" value={customer.contact} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" placeholder="Enter Address" className="formInput" value={customer.address}/>
                </div>
               
               
                <div className="form-group btn-group">
                <button className="cancelFormBtn" type="reset">Cancel</button>
                    <button type="submit" className="submitBtn">Update Customer</button>
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

export default UpdateCustomer
