import React from 'react'
import './Register/form.css';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {

    login,
  } from '../../../../redux/login/loginActions';
const Login=({ login })=>{
   login("");
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
            <NavLink to="/dynamicdukan" id="redirect" hidden>home</NavLink>
            
                <button type="reset" onClick={() => {
                    var user=document.getElementById("loginEmail").value;
                    if(user==="admin@gmail.com"){
                        login("admin");
                        document.getElementById("redirect").click();                    }
                    else if(user==="customer@gmail.com"){
                            login("customer");
                            document.getElementById("redirect").click(); 
                    }
                    else if(user==="vendor@gmail.com"){
                            login("vendor");
                            document.getElementById("redirect").click(); 
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
