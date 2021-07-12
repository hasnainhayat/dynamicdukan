import React from 'react'
import AuthCategory from '../../components/auth/AuthCategory/AuthCategory'
import './RegisterCategory.css'
function RegisterCategory() {
    return (
        <div className="register-catgory">
        <section className="container">
        <h1>Register As</h1>
        <section className="register-category-grid">
            <AuthCategory icon={<i class="fas fa-user-tie"></i>} role="Customer"/>
            <AuthCategory icon={<i class="fas fa-store"></i>} role="Vendor"/>
            <AuthCategory icon={<i class="fas fa-motorcycle"></i>} role="Rider"/>
            </section>
            </section>
        </div>
    )
}

export default RegisterCategory
