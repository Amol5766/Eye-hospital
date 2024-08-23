import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Treatments = () => {
  const data = [
    {
      img: "/src/assets/img/problem1.jpg",
      name: "Problem 1",
      description: "Description of Eye Problem 1.",
    },
    {
      img: "/src/assets/img/problem2.jpg",
      name: "Problem 2",
      description: "Description of Eye Problem 2.",
    },
    {
      img: "/src/assets/img/problem3.jpg",
      name: "Problem 3",
      description: "Description of Eye Problem 3.",
    },
    {
      img: "/src/assets/img/problem4.jpg",
      name: "Problem 4",
      description: "Description of Eye Problem 4.",
    },
    {
      img: "/src/assets/img/problem5.jpg",
      name: "Problem 5",
      description: "Description of Eye Problem 5.",
    },
    {
      img: "/src/assets/img/problem6.jpg",
      name: "Problem 6",
      description: "Description of Eye Problem 6.",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
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
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="mb-4 text-gray-500">
        <p className="text-sm">
          <a href="/">Home</a> &gt; <span className="text-gray-700">Treatments</span>
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Expert Solutions For All Eye Problems
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Discover expert solutions for common eye problems and enhance your eye health.
          </p>
        </div>
      </div>
      <div className="relative mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt={e.name}
                  className="h-56 rounded-t-xl w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                <p className="pt-2">{e.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
          onClick={() => slider.current.slickPrev()}
        >
          <FaArrowLeft size={25} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
          onClick={() => slider.current.slickNext()}
        >
          <FaArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Treatments;
