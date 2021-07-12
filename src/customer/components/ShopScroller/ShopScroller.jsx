import React, { Component } from "react";
import Slider from "react-slick";
import CategoryCard from "../categoryCard/CategoryCard";
import ShopCard from "../shopCard/ShopCard";
import  "./ShopScroller.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#0abe5a" ,padding:"1rem",borderRadius:"50%"}}
        onClick={onClick}
      >
      Hello
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#0abe5a",padding:"1rem",zIndex:"10", borderRadius:"50%"}}
        onClick={onClick}
      />
    );
  }

export default function ShopScroller() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
       
          {
            breakpoint: 1180,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 910,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]}
  return (
    <div className="ShopScroller"> 
     <h2 className="home-heading"><i class="fas fa-store"></i> Shop near you. </h2>

     <Slider {...settings}>
         <ShopCard />
         <ShopCard />
         <ShopCard />
         <ShopCard />
         <ShopCard />
         <ShopCard />
         <ShopCard />
         <ShopCard />
         <ShopCard />

          </Slider>
    </div>
  );
}
