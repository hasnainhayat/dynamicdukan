import React from 'react';
import './Home.css';
import Header from '../../components/header/Header'

import HomeBanner from '../../components/HomeBanner/HomeBanner';
import ProductCard from '../../components/productCard/ProductCard';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import CategoryScroller from '../../components/CategoryScroller/CategoryScroller';
import ShopCard from '../../components/shopCard/ShopCard';
import ShopScroller from '../../components/ShopScroller/ShopScroller';
import Footer from '../../components/footer/Footer';
import {useSelector} from 'react-redux';

function Home() {
    const products=useSelector((state)=>state.shop.products);
    console.log(products)
    return (
        <div className="home-page">
            
      <HomeBanner />
      <CategoryScroller />
      <ShopScroller />
      <h2 className="home-heading"><i class="fas fa-fire-alt"></i> Trending Near You. </h2>
      <section className="home-trending-products">
      {products.map(product=>{
    return   <ProductCard product={product}/>})}
      </section>
 
        </div>
    )
}

export default Home
