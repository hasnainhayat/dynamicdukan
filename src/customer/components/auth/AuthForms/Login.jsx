import React from 'react'
import './Register/form.css';

import { connect } from "react-redux";
import {

    login,
  } from '../../../../redux/login/loginActions';
const Login=({ login })=>{
   
    return (
        <div className="auth-form-div">
        <h1>LOGIN</h1>
               <div className="auth-form-container">
            <form className="auth-form" onSubmit="">
            <div className="auth-form-group">
                <label>Email</label>
                <input type="text" className="auth-form-input" id="loginEmail" placeholder="Enter Email"/>
            </div>
            <div className="auth-form-group">
                <label>Password</label>
                <input type="text" className="auth-form-input" placeholder="Enter Password"/>
            </div>
            <div className="auth-form-group">
                <button type="reset" onClick={() => {
                    var user=document.getElementById("loginEmail").value;
                    if(user==="admin@gmail.com"){
                        login("admin");
                    }
                    }} >Login</button>
            </div>
            </form>
            </div>
 
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      login: (role) => dispatch(login(role)),
    };
  };
export default connect(null, mapDispatchToProps) (Login) 
