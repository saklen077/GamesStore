import React from "react";
import Slider from "react-slick";

export default function Banner() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <div className=" slider-container  pb-10 overflow-x-hidden overflow-y-hidden pt-20 ">
        <Slider {...settings} className="object-fill ">
          
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/bannerimages/fe388493-cb35-4ea4-95f2-4d515927ce53.jpg"
            alt="image 1"
            className="  rounded-lg  object-fit: fill;  "
          />
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/bannerimages/c65e6620-661a-4f52-b37d-7b2ddb67e3d3.jpg"
            alt="image 2"
            className="  rounded-lg  object-fit: fill; "
          />
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/bannerimages/8322e28d-b9ce-40b9-acb2-787d12f30d7d.jpg"
            alt="image 3"
            className="  rounded-lg bg-gray-200 object-fit: fill;  "
          />
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/bannerimages/fac5dd4a-d2c3-4c03-aa18-2bd6471590f4.jpg"
            alt="image 1"
            className=" rounded-lg bg-gray-200 object-fit: fill; "
          />
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/bannerimages/32da84e3-4276-4444-9294-e5925d73109d.jpg"
            alt="image 2"
            className=" rounded-lg bg-gray-200 object-fit: fill; "
          />
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/bannerimages/36e0be64-e481-432e-a20c-0d823cc20272.jpg"
            alt="image 3"
            className="  rounded-lg bg-gray-200 object-fit: fill;  "
          />
        </Slider>
      </div>
      <div className="bg-white max-w-screen-2xl container mt-10 mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8 dark:text-white">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 ">
            <a className="group border rounded-2xl dark:border rounded-2xl">
              <img
                src="https://gameloot.in/wp-content/uploads/2015/11/39.jpg"
                className="aspect-square w-full rounded-lg bg-gray-200 object-fit: fill; group-hover:opacity-75 xl:aspect-[8/8]"
              />
            </a>
            <a className="group border rounded-xl dark:border rounded-2xl">
              <img
                src="https://gameloot.in/wp-content/uploads/2015/11/WhatsApp-Image-2023-09-18-at-12.40.19.jpeg"
                className="aspect-square w-full rounded-lg bg-gray-200 object-fit: fill; group-hover:opacity-75 xl:aspect-[8/8]"
              />
            </a>
            <a className="group border rounded-2xl dark:border rounded-2xl">
              <img
                src="https://gameloot.in/wp-content/uploads/2015/11/repair-service-for-consoles-and-controllers-2.jpeg"
                className="aspect-square w-full rounded-lg bg-gray-200 object-fit: fill; group-hover:opacity-75 xl:aspect-[8/8]"
              />
            </a>
            <a className="group border rounded-2xl dark:border rounded-2xl">
              <img
                src="https://gameloot.in/wp-content/uploads/2015/11/46.jpg"
                className="aspect-square w-full rounded-lg bg-gray-200 object-fit: fill; group-hover:opacity-75 xl:aspect-[8/8]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
