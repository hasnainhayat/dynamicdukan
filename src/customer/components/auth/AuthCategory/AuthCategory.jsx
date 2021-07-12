import React from 'react'
import { NavLink } from 'react-router-dom'
import './AuthCategory.css'
function AuthCategory(props) {
    return (
        <NavLink to="" className="auth-category-link">
        <div className="auth-category">
            {props.icon}
            <h2>{props.role}</h2>
        </div>
        </NavLink>
    )
}

export default AuthCategory
