import React from 'react'
import shopImage from '../../../graphics/shop.jpg'
import './ShopCard.css'
function ShopCard() {
    return (
        <div className="shop-card">
            <img src={shopImage}/>
            <section className="rating">
            <h4>OPEN</h4>
            <i class="fas fa-star"></i>
             <i class="fas fa-star"></i> 
             <i class="fas fa-star"></i>
             <i class="fas fa-star-half-alt"></i>
             <i class="far fa-star"></i> 
             <span>(37)</span>
            </section>
            <h2>Ali Kiryana</h2>
            
        </div>
    )
}

export default ShopCard
