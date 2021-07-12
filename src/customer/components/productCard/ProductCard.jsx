import React from 'react'
import productimage from '../../../graphics/product/1.png'

import './ProductCard.css'
import { connect } from "react-redux";
import {

  addToCart,
} from '../../../redux/shopping/soppingActions';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt="product name" />
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
            {product.title}
            </section>
            <section className="productCardFooter">
            <section className="productPrice">RS. {product.price}</section>
            <section className="addToCart" onClick={() => {addToCart(product.id
        );}}><i class="fas fa-shopping-basket"></i></section>
            </section>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };
export default connect(null, mapDispatchToProps) (ProductCard);
