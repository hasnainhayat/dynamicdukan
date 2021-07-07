import React from 'react';

import '../../components/css/page.css'
import '../../components/css/form.css'

import UploadImage from '../../components/UploadImage/UploadImage';
import riders from '../../../logic/riders';

function UpdateRider() {
   const rider=riders[2];
    return (
        <div className="updateCustomer page">
        <div className="pageHeader">
            <h3>Edit Rider</h3>
        </div>
        <div className="contentContainer">
            <form className="dashboard-form">
            <div className="form-left">
                <div className="form-group">
                    <label>Rider Name</label>
                    <input type="text" placeholder="Enter Rider Name" className="formInput" value={rider.name}/>
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input type="text" placeholder="Enter Email" className="formInput" value={rider.email}/>
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" placeholder="Enter Contact Number" className="formInput" value={rider.contact} />
                </div>
                <div className="form-group">
                    <label>CNIC</label>
                    <input type="text" placeholder="Enter CNIC Number" className="formInput" value={rider.CNIC}/>
                </div>
                <div className="form-group">
                    <label>Bike Number</label>
                    <input type="text" placeholder="Enter Bike Number" className="formInput" value={rider.BikeNumber}/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" placeholder="Enter Address" className="formInput" value={rider.address}/>
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

export default UpdateRider
