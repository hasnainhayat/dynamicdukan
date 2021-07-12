import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import categories from "../../../logic/categories";
import {useSelector} from 'react-redux';
function Header() {
  const [mobileMenu, setMobileMenu] = useState("");
  const [accountMenu, setAccountMenu] = useState("");
  const [searchBar, setSearchBar] = useState("");
  const cart=useSelector((state)=>state.shop.cart);
  
var cartCount=0;
var cartTotal=0;
cart.forEach((cartItem)=>{
cartCount+=cartItem.qty;
cartTotal+=cartItem.totalPrice;
})

  return (
    <div className="header">
      <section className="header-top">
        <h2 className="header-logo"><NavLink to="/" className="logo-link">Dynamic Dukan </NavLink> </h2>
        <section className={searchBar + " header-searchbar"}>
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
          <i
            class="fas fa-times close-search"
            onClick={() => {
              setSearchBar("");
            }}
          ></i>
        </section>

        <section className="header-top-right">
          <button className="get-location-btn">
            <i class="fas fa-map-marker-alt"></i> Select Your Location
          </button>
          <button className="get-app-btn">
            <i class="fas fa-mobile-alt"></i> Get App
          </button>
          <section
            className="account-menu-container"
            onMouseLeave={() => {
              setAccountMenu("");
            }}
          >
            <button
              className="header-account-btn"
              onMouseEnter={() => {
                setAccountMenu("showAccountMenu");
              }}
            >
              <i class="fas fa-user"></i>
            </button>
            <section className={accountMenu + " account-menu"}>
              <NavLink className="header-menu-item" to="/login">
                Login
              </NavLink>
              <NavLink className="header-menu-item" to="/register">
                Register
              </NavLink>
            </section>
          </section>
          <section className="header-cart-section">
            <NavLink to="/cart" className="header-cart">
              <i class="fas fa-shopping-cart"></i>
            </NavLink>
            <span className="cart-count-label">{cartCount}</span>
            <span className="cart-total">RS. {cartTotal}</span>
          </section>
        </section>
        <section className="header-menu-icons">
          <i
            class="fas fa-search"
            onClick={() => {
              setSearchBar("show-searchBar");
            }}
          ></i>
          <i class="fas fa-map-marker-alt"></i>
          <section
            className="account-menu-container"
            onMouseLeave={() => {
              setAccountMenu("");
            }}
          >
            <i
              class="fas fa-user"
              onMouseEnter={() => {
                setAccountMenu("showAccountMenu");
              }}
            ></i>
            <section className={accountMenu + " account-menu"}>
              <NavLink className="header-menu-item" to="/login">
                Login
              </NavLink>
              <NavLink className="header-menu-item" to="/register">
                Register
              </NavLink>
            </section>
          </section>
          <section className="header-cart-section">
            <NavLink to="/cart" className="header-cart">
              <i class="fas fa-shopping-cart"></i>
            </NavLink>
            <span className="cart-count-label">{cartCount}</span>
          </section>

          <i
            class="fas fa-bars show-menu"
            onClick={() => {
              setMobileMenu("show");
            }}
          ></i>
        </section>
      </section>
      <section className={mobileMenu + " header-bottom"}>
        <section className="flash-sale-header">
          <NavLink className="flash-sale-header-link" to="/shop">
             Shop Now
          </NavLink>
          <i
            class="fas fa-times close-menu"
            onClick={() => {
              setMobileMenu("");
            }}
          ></i>
        </section>
        <nav className="header-menu header-mobile-menu">
          <NavLink className="header-menu-item" to="/shop">
            Meat
          </NavLink>
          <NavLink className="header-menu-item" to="/shop">
            Vegetables
          </NavLink>
          <NavLink className="header-menu-item" to="/shop">
            Fruits
          </NavLink>
          <NavLink className="header-menu-item" to="/shop">
            Dairy
          </NavLink>
          <NavLink className="header-menu-item" to="/shop">
            Medical
          </NavLink>
          <NavLink className="header-menu-item" to="/shop">
            grocery
          </NavLink>
          <NavLink className="header-menu-item" to="/shop">
            On Sale
          </NavLink>
        </nav>
        <section className="header-bottom-right">
          <NavLink to="/about" className="header-bottom-right-menu-item">
            About Us
          </NavLink>
          <NavLink to="/contact" className="header-bottom-right-menu-item">
            Contact Us
          </NavLink>
          <NavLink to="/policy" className="header-bottom-right-menu-item">
            Privacy Policy
          </NavLink>
        </section>
      </section>
    </div>
  );
}

export default Header;
