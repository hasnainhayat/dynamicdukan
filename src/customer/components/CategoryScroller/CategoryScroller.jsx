import React, { Component } from "react";
import Slider from "react-slick";
import CategoryCard from "../categoryCard/CategoryCard";
import  "./CategoryScroller.css";
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

export default function CategoryScroller() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 6,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 1125,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  infinite: true,
                  dots: false
                }
              },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
  return (
    <div className="CategoryScroller"> 
     <h2 className="home-heading"><i class="fas fa-fire-alt"></i> Popular Categories. </h2>

     <Slider {...settings}>
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
         <CategoryCard />
          </Slider>
    </div>
  );
}
