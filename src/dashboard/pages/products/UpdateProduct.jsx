import React from 'react';
import products from '../../../logic/products';
import '../../components/css/page.css'
import '../../components/css/form.css'
import categories from '../../../logic/categories'
import UploadImage from '../../components/UploadImage/UploadImage';

function UpdateProduct() {
    const product=products[0];
    return (
        <div className="addProduct page">
        <div className="pageHeader">
            <h3>Edit Product</h3>
        </div>
        <div className="contentContainer">
            <form className="dashboard-form">
            <div className="form-left">
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" placeholder="Enter Product Name" className="formInput" value={product.title}/>
                </div>
                <div className="form-group">
                    <label>Measuring unit</label>
                    <input type="text" placeholder="Enter Measuring Unit" className="formInput" value={product.unit}/>
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select placeholder="select Category">
                    <option disabled value="" selected>Select Category</option>
                    {categories.map((category)=>{
                        return <option value={category.title}>{category.title}</option>
                    })}
                    </select>
                </div>
                <div className="form-group">
                    <label>Stock</label>
                    <input type="number" placeholder="Enter Stock" className="formInput" value={product.stock}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" placeholder="Enter Price" className="formInput" value={product.price}/>
                </div>
                <div className="form-group btn-group">
                <button className="cancelFormBtn" type="reset">Cancel</button>
                    <button type="submit" className="submitBtn">Update Product</button>
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

export default UpdateProduct
