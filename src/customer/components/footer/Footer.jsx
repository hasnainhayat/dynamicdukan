import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
    return (
      <div className="footer">
        <div className="exlusive-features">
          <section className="features">
            <i class="fas fa-shipping-timed"></i>
            <h3> Delivery In 30 mins</h3>
          </section>
          <section className="features">
            <i class="fas fa-badge-percent"></i>
            <h3> Daily offers</h3>
          </section>
          <section className="features">
            <i class="fas fa-sack-dollar"></i>
            <h3> Cash On Delivery</h3>
          </section>
          <section className="features">
            <i class="fas fa-user-headset"></i>
            <h3> 24/7 Support</h3>
          </section>
        </div>
        <section className="footer-middle">
          <section className="footer-about">
            <h3 className="footer-headings">Dynamic Dukan</h3>
            <p>Dynamic Dukan is online grocery app that
             help you order items from shops near you 
            and deliver it on your Doorsteps</p>
            <section className="footer-contact-details"><i class="far fa-phone-alt"></i> +92 300 0000000</section>
            <section className="footer-contact-details"><i class="far fa-envelope"></i> info@dynamicdukan.com</section>
            <section className="footer-contact-details"></section>
          </section>
          <section className="footer-useful-links">
            <h3 className="footer-headings">Useful Links</h3>
            <ul className="footer-menu">
                <li>
                <NavLink to="/dynamicdukan/shop" className="footer-menu-link">Shop Now</NavLink>
                </li>
                <li>
                <NavLink to="/dynamicdukan/contact" className="footer-menu-link">contact Us</NavLink>
                </li>
                {/* <li>
                <NavLink to="/dynamicdukan/helpcenter" className="footer-menu-link">Help Center</NavLink>
                </li>
                <li>
                <NavLink to="/dynamicdukan/privacypolicy" className="footer-menu-link">Privacy Policy</NavLink>
                </li> */}
            </ul>
          </section>
          <section className="footer-help-menu">
            <h3 className="footer-headings">Help Center</h3>
            <ul className="footer-menu">
            <li>
                <NavLink to="/dynamicdukan/contact" className="footer-menu-link">contact Us</NavLink>
                </li>
               
            </ul>
          </section>
          <section className="footer-business-menu">
            <h3 className="footer-headings">Business With Us</h3>
            <ul className="footer-menu">
                <li>
                <NavLink to="/dynamicdukan/registervendor" className="footer-menu-link">Sell With Us</NavLink>
                </li>
                <li>
                <NavLink to="/dynamicdukan/registerrider" className="footer-menu-link">Become Rider</NavLink>
                </li>
                {/* <li>
                <NavLink to="" className="footer-menu-link">Adevertise with us</NavLink>
                </li> */}
            </ul>
          </section>
        </section>
        <section className="footer-bottom">
            <h4>2021 <i class="fal fa-copyright"></i> dynamicdukan.com</h4>
        </section>
      </div>
    );
}
