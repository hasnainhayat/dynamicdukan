import React from 'react'
import productimage from '../../../graphics/product/1.png'
import './ProductCard.css'

function ProductCard() {
    return (
        <div className="product-card">
            <img src={productimage} alt="product name" />
            <section className="productCardHeader">
            <section className="shopName">
            <i class="fas fa-store"></i>  Ali Kiryana
            </section>
            <section className="rating">
            <i class="fas fa-star"></i>
             <i class="fas fa-star"></i> 
             <i class="fas fa-star"></i>
             <i class="fas fa-star-half-alt"></i>
             <i class="far fa-star"></i> 
             <span>(37)</span>
            </section>
            </section>
           
            <section className="productName">
            ABCD PEODUCT
            </section>
            <section className="productCardFooter">
            <section className="productPrice">RS. 1231</section>
            <section className="addToCart"><i class="fas fa-shopping-basket"></i></section>
            </section>
        </div>
    )
}

export default ProductCard
