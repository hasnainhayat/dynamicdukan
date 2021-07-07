import React from 'react'
import './UploadImage.css'
import {useState} from 'react';
function UploadImage() {
  const imagePlaceholder=<div>
   
  <section className="uploadImageIcon"><i class="fas fa-cloud-upload-alt"></i></section>
  <section className="uploadImageTitle">Drag & Drop to Upload File</section>
  <span>OR</span>
  <label className="uploadImageButton" for="uploadImage">Browse File</label>
  <input type="file" className="uploadImage" name="uploadImage"  id="uploadImage" hidden onChange={()=>{
            var file=document.getElementById('uploadImage').files[0];
            if(file){
              const reader=new FileReader();
              reader.onload=()=>{
                const img=reader.result;
                setImage(<img src={img} alt="sadad"/>);
                setRemoveImg("show")
              }
              reader.readAsDataURL(file)
            }
            
            

      }
      }/> 
      
  </div>
  const [removeImg, setRemoveImg] = useState("hidden")
    const [image, setImage] = useState(imagePlaceholder);
      
    

    return (
        <div className="image-drag-area">
         <div className={removeImg + " removeBtn"}>
    <span onClick={()=>{
      setRemoveImg("hidden");
      setImage(imagePlaceholder);
    }}>X</span>
    </div>
      {image}
        </div>
    
    )
}

export default UploadImage
