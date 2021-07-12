import React, { useState } from 'react';
import './form.css';
function RegisterVendor() {
    const [image, setImage] = useState("");
    const [shopImage, setShopImg] = useState("");
    const [removeImg, setRemoveImg] = useState("remove-img-hidden")
    const [removeShopImg, setRemoveShopImg] = useState("remove-img-hidden")
    return (
        
        <div className="auth-form-div">
        <h1>Vendor Registration</h1>
               <div className="auth-form-container">
            <form className="auth-form">
            <div className="auth-form-group">
                <label>Full Name</label>
                <input type="text" className="auth-form-input" placeholder="Enter Your Full Name"/>
            </div>
            <div className="auth-form-group">
                <label>Mobile No.</label>
                <input type="tel" className="auth-form-input" placeholder="Enter Your Mobile Number"/>
            </div>
            <div className="auth-form-group">
                <label>Email</label>
                <input type="text" className="auth-form-input" placeholder="Enter Your Email"/>
            </div>
            <div className="auth-form-group">
                <label>Password</label>
                <input type="password" className="auth-form-input" placeholder="Enter Password"/>
            </div>
            <div className="auth-form-group">
                <label>Shop Name</label>
                <input type="text" className="auth-form-input" placeholder="Enter Your Shop Name"/>
            </div>
            <div className="auth-form-group">
                <label>City</label>
                <input type="text" className="auth-form-input" placeholder="Enter Your City"/>
            </div>
            <div className="auth-form-group">
                <label>Shop Address</label>
                <input type="text" className="auth-form-input" placeholder="Enter Full Address"/>
            </div>
            <div className="auth-img">
            <p>Upload your Photo <span className={removeImg + " remove-img-btn"} onClick={()=>{
      setRemoveImg("remove-img-hidden");
      setImage("");
      
    }}><i class="fas fa-trash-alt"></i></span></p>
    <div className="clear"></div>
            <label for="uploadImg" className="upload-img-label"><i class="fas fa-upload"></i></label>
            <input type="file" name="uploadImg" id="uploadImg" onChange={()=>{
            var file=document.getElementById('uploadImg').files[0];
            if(file){
              const reader=new FileReader();
              reader.onload=()=>{
                const img=reader.result;
                setImage(<img src={img} alt="sadad"/>);
                setRemoveImg("remove-img-show")
                
              }
              reader.readAsDataURL(file)
            }
            
            

      }
      }/> 
      {image}
            </div>
            <div className="auth-img Bike-copy">
            <p>Upload Shop Image <span className={removeShopImg + " remove-img-btn"} onClick={()=>{
      setRemoveShopImg("remove-img-hidden");
      setShopImg("");
      
    }}><i class="fas fa-trash-alt"></i></span></p>
    <div className="clear"></div>
            <label for="uploadShopImg" className="upload-img-label"><i class="fas fa-upload"></i></label>
            <input type="file" name="uploadShopImg" id="uploadShopImg" onChange={()=>{
            var file=document.getElementById('uploadShopImg').files[0];
            if(file){
              const reader=new FileReader();
              reader.onload=()=>{
                const shopImg=reader.result;
                setShopImg(<img src={shopImg} alt="sadad"/>);
                setRemoveShopImg("remove-img-show")
                
              }
              reader.readAsDataURL(file)
            }
            
            

      }
      }/> 
      {shopImage}
            </div>
 
            <div className="auth-form-group">
                <button type="submit">Register</button>
            </div>
            </form>
            </div>
 
        </div>
    )
}

export default RegisterVendor; 
