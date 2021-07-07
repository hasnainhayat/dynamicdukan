import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import categories from "../../../logic/categories";
function Header() {
    return (
        <div className="header">
            <section className="header-top">
                <h2 className="header-logo"> Dynamic Dukan </h2>
                <section className="header-searchbar">
                    <form className="header-search">
                        <section className="header-form-group">
                            <select className="header-search-category header-form-item">
                                <option value="" disabled selected>
                                    Select Category
                                </option>
                                {categories.map((category) => {
                                    return (
                                        <option value={category.title} key={category.id}>
                                            {category.title}
                                        </option>
                                    );
                                })}
                            </select>
                            <input
                                type="search"
                                placeholder="search something here..."
                                className="header-form-item header-search-input"
                            />
                            <button className="header-form-item header-search-btn">
                                <i class="fas fa-search"></i>
                            </button>
                        </section>
                    </form>
                </section>
                <section className="header-top-right">
                    <button className="get-location-btn"><i class="fas fa-map-marker-alt"></i> Select Your Location</button>
                    <button className="get-app-btn"><i class="fas fa-mobile-alt"></i> Get App</button>
                    <button className="header-account-btn"><i class="fas fa-user"></i></button>
                    <section className="header-cart-section">
                    <NavLink to="" className="header-cart"><i class="fas fa-shopping-cart"></i></NavLink>
                    <span className="cart-count-label">12</span>
                    <span className="cart-total">Rs. 12345</span>
                   
                    </section>
                </section>
            </section>
            <section className="header-bottom">
            <section className="flash-sale-header">
                <NavLink className="flash-sale-header-link" to=""><i class="fas fa-bolt"></i> Flash Sale</NavLink>
            </section>
            <nav className="header-menu">
                <NavLink className="header-menu-item" to="">
                    Meat
                </NavLink>
                <NavLink className="header-menu-item" to="">
                    Vegetables
                </NavLink>
                <NavLink className="header-menu-item" to="">
                    Fruits
                </NavLink>
                <NavLink className="header-menu-item" to="">
                    Dairy
                </NavLink>
                <NavLink className="header-menu-item" to="">
                    Medical
                </NavLink>
                <NavLink className="header-menu-item" to="">
                    grocery
                </NavLink>
                <NavLink className="header-menu-item" to="">
                    On Sale
                </NavLink>
            </nav>
            <section className="header-bottom-right">
              <NavLink to="" className="header-bottom-right-menu-item">About Us</NavLink>
              <NavLink to="" className="header-bottom-right-menu-item">Contact Us</NavLink>
              <NavLink to="" className="header-bottom-right-menu-item">Privacy Policy</NavLink>
            </section>
            </section>
        </div>
    );
}

export default Header;
