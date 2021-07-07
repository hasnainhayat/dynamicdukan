import React from 'react';

import '../../components/css/page.css'
import '../../components/css/form.css'
import categories from '../../../logic/categories';
import UploadImage from '../../components/UploadImage/UploadImage';
function UpdateCategory() {
    const category=categories[0];
    return (
        <div className="addCategory page">
        <div className="pageHeader">
            <h3>Update Category</h3>
        </div>
        <div className="contentContainer">
            <form className="dashboard-form">
            <div className="form-left">
                <div className="form-group">
                    <label>Category Name</label>
                    <input type="text" placeholder="Enter Category Name" className="formInput" value={category.title}/>
                </div>
             
                <div className="form-group btn-group">
                <button className="cancelFormBtn" type="reset">Cancel</button>
                    <button type="submit" className="submitBtn">Update Category</button>
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

export default UpdateCategory
