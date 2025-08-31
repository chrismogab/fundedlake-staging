import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImg from "../assets/forex-expo-imgs/forex-expo-img1.png"

function BecomePartnerSlider() {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 1000,
    autoplay: true,    
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full md:max-w-2xl mx-auto">
      <Slider {...settings}>
        <div><img className="w-[100%]" src={heroImg} alt="" /></div>
        <div><img className="w-[100%]" src={heroImg} alt="" /></div>
        <div><img className="w-[100%]" src={heroImg} alt="" /></div>
        <div><img className="w-[100%]" src={heroImg} alt="" /></div>
        <div><img className="w-[100%]" src={heroImg} alt="" /></div>
        <div><img className="w-[100%]" src={heroImg} alt="" /></div>
      </Slider>
    </div>
  );
}

export default BecomePartnerSlider;
