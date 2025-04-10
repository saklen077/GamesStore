import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import list from "../../list/list.json"
export default function Xbox() {
  const FilterData = list.filter((data) => data.Category === "xbox")
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto mb-20 md:px-10 px-4">
        <div className="mt-24 mb-15">
          <h1 className="text-2xl md:text-3xl  font-bold">Xbox Series X</h1>
        </div>
        <div>
          <Slider {...settings}>
            {FilterData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
            
          </Slider>
        </div>
        
      </div>
    </>
  );
}
