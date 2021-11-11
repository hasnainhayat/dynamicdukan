import React from 'react'

function Contact() {
    return (
        <div className="auth-form-div">
        <h1>Contact us</h1>
               <div className="auth-form-container">
            <form className="auth-form" onSubmit="">
            <div className="auth-form-group">
                <label>Name</label>
                <input type="text" className="auth-form-input" id="loginEmail" placeholder="Enter your name"/>
            </div>
            <div className="auth-form-group">
                <label>Email</label>
                <input type="text" className="auth-form-input" id="loginEmail" placeholder="Enter your email"/>
            </div>
            <div className="auth-form-group">
                <label>Message</label>
                
                <textarea type="text" className="auth-form-input" id="loginEmail" placeholder="Enter your message"></textarea>
            </div>
            <div className="auth-form-group">
            
            
                <button type="reset">Send</button>
            </div>
            </form>
            </div>
            
        </div>
    )
}

export default Contact
