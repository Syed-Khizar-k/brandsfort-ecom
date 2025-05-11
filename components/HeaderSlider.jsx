import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title:
        "3 Pcs Nisha Designer Unstiched Lawn Suit - Perfect for Elegant Style!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: "/nisha1.jpeg",
      src: "/product/67a1f52e3f34a77b6dde914a",
    },
    {
      id: 2,
      title: "3 Pcs Nisha Designer Unstiched Lawn Suit - Perfect for Elegant Style!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: "/nisha2.jpeg",
      src: "/product/67a1f5ef3f34a77b6dde9150",
    },
    {
      id: 3,
      title: "3 Pcs Nisha Designer Unstiched Lawn Suit - Perfect for Elegant Style!!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: "/nisha1.jpeg",
      src: "/product/67a1f7c93f34a77b6dde915a",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}>
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full">
            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base text-orange-600 pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <Link
                  href={slide.src}
                  className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium">
                  {slide.buttonText1}
                </Link>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center ">
              <Image
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                height={200}
                width={230}
                className=" rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
