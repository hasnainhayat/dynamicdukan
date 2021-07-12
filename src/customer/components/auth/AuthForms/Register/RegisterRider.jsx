import React, { useState } from 'react';
import './form.css';
function RegisterRider() {
    const [image, setImage] = useState("");
    const [cnic, setCnic] = useState("");
    const [copy, setCopy] = useState("");
    const [licence, setLicence] = useState("");
    const [removeImg, setRemoveImg] = useState("remove-img-hidden")
    const [removeCnic, setRemoveCnic] = useState("remove-img-hidden")
    const [removeCopy, setRemoveCopy] = useState("remove-img-hidden")
    const [removeLicence, setRemoveLicence] = useState("remove-img-hidden")
    return (
        
        <div className="auth-form-div">
        <h1>Rider Registration</h1>
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
                <label>CNIC</label>
                <input type="text" className="auth-form-input" placeholder="Enter Your CNIC"/>
            </div>
            <div className="auth-form-group">
                <label>Bike No.</label>
                <input type="text" className="auth-form-input" placeholder="Enter Your Bike Registration number"/>
            </div>
            <div className="auth-form-group">
                <label>City</label>
                <input type="text" className="auth-form-input" placeholder="Enter Your City"/>
            </div>
            <div className="auth-form-group">
                <label>Street Address</label>
                <input type="text" className="auth-form-input" placeholder="Enter Full Address"/>
            </div>
            <div className="auth-img">
            <p>Upload Image <span className={removeImg + " remove-img-btn"} onClick={()=>{
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
            <p>Upload Bike Copy Image <span className={removeCopy + " remove-img-btn"} onClick={()=>{
      setRemoveCopy("remove-img-hidden");
      setCopy("");
      
    }}><i class="fas fa-trash-alt"></i></span></p>
    <div className="clear"></div>
            <label for="uploadCopy" className="upload-img-label"><i class="fas fa-upload"></i></label>
            <input type="file" name="uploadCopy" id="uploadCopy" onChange={()=>{
            var file=document.getElementById('uploadCopy').files[0];
            if(file){
              const reader=new FileReader();
              reader.onload=()=>{
                const img=reader.result;
                setCopy(<img src={img} alt="sadad"/>);
                setRemoveCopy("remove-img-show")
                
              }
              reader.readAsDataURL(file)
            }
            
            

      }
      }/> 
      {copy}
            </div>
            <div className="auth-img licence-img">
            <p>Upload Your licence image <span className={removeLicence + " remove-img-btn"} onClick={()=>{
      setRemoveLicence("remove-img-hidden");
      setLicence("");
      
    }}><i class="fas fa-trash-alt"></i></span></p>
    <div className="clear"></div>
            <label for="uploadLicence" className="upload-img-label"><i class="fas fa-upload"></i></label>
            <input type="file" name="uploadLicence" id="uploadLicence" onChange={()=>{
            var file=document.getElementById('uploadLicence').files[0];
            if(file){
              const reader=new FileReader();
              reader.onload=()=>{
                const img=reader.result;
                setLicence(<img src={img} alt="sadad"/>);
                setRemoveLicence("remove-img-show");
                
              }
              reader.readAsDataURL(file)
            }
            
            

      }
      }/> 
      {licence}
            </div>
            
            <div className="auth-img cnic-img">
            <p>Upload Your CNIC image <span className={removeCnic + " remove-img-btn"} onClick={()=>{
      setRemoveCnic("remove-img-hidden");
      setCnic("");
      
    }}><i class="fas fa-trash-alt"></i></span></p>
    <div className="clear"></div>
            <label for="uploadCnic" className="upload-img-label"><i class="fas fa-upload"></i></label>
            <input type="file" name="uploadCnic" id="uploadCnic" onChange={()=>{
            var file=document.getElementById('uploadCnic').files[0];
            if(file){
              const reader=new FileReader();
              reader.onload=()=>{
                const img=reader.result;
                setCnic(<img src={img} alt="sadad"/>);
                setRemoveCnic("remove-img-show");
                
              }
              reader.readAsDataURL(file)
            }
            
            

      }
      }/> 
      {cnic}
            </div>
            <div className="auth-form-group">
                <button type="submit">Register</button>
            </div>
            </form>
            </div>
 
        </div>
    )
}

export default RegisterRider; 
