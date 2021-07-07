import React from 'react'
import './SideBar.css'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
function SideBar() {
  const [subMenuClass1, setSubMenuClass1] = useState("");
  const [subMenuClass2, setSubMenuClass2] = useState("");
  const [subMenuClass3, setSubMenuClass3] = useState("");
  const [subMenuClass4, setSubMenuClass4] = useState("");
  const [subMenuClass5, setSubMenuClass5] = useState("");
  function showSubMenu(menu){
    if (menu === "shops") {
      if (subMenuClass1 !== "show") {
        setSubMenuClass1("show");
      } else {
        setSubMenuClass1("");
      }
    }
    else if(menu === "customers") {
      if (subMenuClass2 !== "show") {
        setSubMenuClass2("show");
      } else {
        setSubMenuClass2("");
      }
    }
    else if(menu === "products") {
      if (subMenuClass3 !== "show") {
        setSubMenuClass3("show");
      } else {
        setSubMenuClass3("");
      }
    }
    else if(menu === "categories") {
      if (subMenuClass4 !== "show") {
        setSubMenuClass4("show");
      } else {
        setSubMenuClass4("");
      }
    }
    else if(menu === "riders") {
      if (subMenuClass5 !== "show") {
        setSubMenuClass5("show");
      } else {
        setSubMenuClass5("");
      }
    }
  }
    return (
      <div className="sideBar">
       
        <section className="dashboard_menu">
          <p className="menu_sub_title">Dashboard Menu</p>
          <NavLink to="/dashboard" className="dashboard_menu_link">
            <i class="fas fa-tachometer-alt"></i> Dashboard
            
          </NavLink>
          <ul>
            <li>
              <a href="#" className="dashboard_menu_link" onClick={()=>{
                showSubMenu("shops");
              }}>
                <i class="fas fa-store"></i> Shops
                <i class="fas fa-chevron-right"></i>
              </a>
              <ul className={subMenuClass1+" dashboard_sub_menu"}>
                <li>
                  <NavLink to="/shops" className="dashboard_menu_link">
                    View Shops
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addshop" className="dashboard_menu_link">
                    Add Shop
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="dashboard_menu_link" onClick={()=>{
                showSubMenu("customers");
              }}>
                <i class="far fa-user"></i> Customers
                <i class="fas fa-chevron-right"></i>
              </a>
              <ul className={subMenuClass2+" dashboard_sub_menu"}>
                <li>
                  <NavLink to="/customers" className="dashboard_menu_link">
                    View Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="addcustomer" className="dashboard_menu_link">
                    Add Customer
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="dashboard_menu_link" onClick={()=>{
                showSubMenu("products");
              }}>
                <i class="fab fa-product-hunt"></i> Products
                <i class="fas fa-chevron-right"></i>
              </a>
              <ul className={subMenuClass3+" dashboard_sub_menu"}>
                <li>
                  <NavLink to="/products" className="dashboard_menu_link">
                    View Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addproduct" className="dashboard_menu_link">
                    Add Product
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="dashboard_menu_link" onClick={()=>{
                showSubMenu("categories");
              }}>
                <i class="fas fa-shapes"></i> Categories
                <i class="fas fa-chevron-right"></i>
              </a>
              <ul className={subMenuClass4+" dashboard_sub_menu"}>
                <li>
                  <NavLink to="/categories" className="dashboard_menu_link">
                    View Catgories
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addcategory" className="dashboard_menu_link">
                    Add Category
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="orders" className="dashboard_menu_link">
                <i class="fas fa-shopping-basket"></i> Orders
                
              </NavLink>
            </li>
            <li>
              <a href="#" className="dashboard_menu_link" onClick={()=>{
                showSubMenu("riders");
              }}>
                <i class="fas fa-biking"></i> Riders{" "}
                <i class="fas fa-chevron-right"></i>
              </a>
              <ul className={subMenuClass5+" dashboard_sub_menu"}>
                <li>
                  <NavLink to="/riders" className="dashboard_menu_link">
                    View Riders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="addrider" className="dashboard_menu_link">
                    Add Rider
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    );
}

export default SideBar
