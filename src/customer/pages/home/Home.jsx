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

function Home() {
    return (
        <div className="home-page">
             <Header />
      <HomeBanner />
      <CategoryScroller />
      <ShopScroller />
      <h2 className="home-heading"><i class="fas fa-fire-alt"></i> Trending Near You. </h2>
      <section className="home-trending-products">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </section>
    <Footer />
        </div>
    )
}

export default Home
