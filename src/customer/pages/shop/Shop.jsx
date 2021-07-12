import React from 'react'
import { NavLink } from 'react-router-dom'
import categories from '../../../logic/categories';
import products from '../../../logic/products';
import ProductCard from '../../components/productCard/ProductCard';
import './Shop.css'
import {useSelector} from 'react-redux';
function Shop() {
    const products=useSelector((state)=>state.shop.products);
    return (
        <div className="shop-page">
            <div className="shop-page-banner">
            <h2>Shop</h2>
            <div className="shop-banner-overlay"></div>
            </div>
            
            <div className="shop-main-container">
                <section className="shop-page-sidebar">
                    <section className="shop-sidebar-categories">
                    <h2>Categories</h2>
                       {categories.map((category)=>{
                       return <NavLink to="" className="shop-sidebar-link"><img src={category.image}/> <span>{category.title}</span></NavLink>
                       })}
                        
                    </section>
                </section>
                <section className="shop-page-products">
                {products.map(product=>{
    return   <ProductCard product={product}/>})}
                    </section>
            </div>
        </div>
    )
}

export default Shop
