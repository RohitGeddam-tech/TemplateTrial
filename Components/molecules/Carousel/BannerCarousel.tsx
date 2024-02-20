import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderNextArrow from "./SliderNextArrow";
import SliderPrevArrow from "./SliderPrevArrow";
import { carouselProps } from ".";
// import { Slider } from "react-slick";

export default function BannerCarousel({
  children,
  arrow,
  dots,
  slidesToShow,
}: carouselProps) {
  const settings = {
    dots: dots,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: arrow,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
  };
  return (
    <div className="bannerSlider">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
