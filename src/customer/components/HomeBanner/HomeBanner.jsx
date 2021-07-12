import React from 'react'
import './HomeBanner.css'
import {NavLink} from "react-router-dom";
function HomeBanner() {
    return (
        <div className="home-banner">
            <div className="home-banner-left">
                <h2 className="home-banner-left-heading">
                    Need <span>Grocery</span> Hustle free?
                </h2>
                <p>We Deliver at your doorsteps.</p>
                <NavLink to="" className="home-banner-left-btn">Order Now</NavLink>
            </div>
            <div className="home-banner-right">
            <h2 className="home-banner-right-heading">
                    Now Upto
                    <section>
                        50%
                    </section>
                    OFF
                </h2>
              
                <NavLink to="" className="home-banner-right-btn">Download App</NavLink>
            </div>
        </div>
    )
}

export default HomeBanner
