import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImg0 from "../assets/forex-expo-imgs/forex-expo-img1.png"
//import heroImg1 from "../assets/forex-expo-imgs/forex-expo-img2.png";
//import heroImg2 from "../assets/forex-expo-imgs/forex-expo-img3.png";
//import heroImg3 from "../assets/forex-expo-imgs/forex-expo-img4.png";

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
        <div className="rounded-[24px] overflow-hidden"><img className="w-[100%] rounded-[24px]" src={heroImg0} alt="" /></div>
        {/*<div className="rounded-[24px] overflow-hidden"><img className="w-[100%] rounded-[24px]" src={heroImg1} alt="" /></div>
        <div className="rounded-[24px] overflow-hidden"><img className="w-[100%] rounded-[24px]" src={heroImg2} alt="" /></div>
        <div className="rounded-[24px] overflow-hidden"><img className="w-[100%] rounded-[24px]" src={heroImg3} alt="" /></div>*/}
  
      </Slider>
    </div>
  );
}

export default BecomePartnerSlider;
