"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import crsl1 from "@/assets/crsl1.jpg";
import crsl2 from "@/assets/crsl2.jpg";
import crsl3 from "@/assets/crsl3.jpg";
import crsl4 from "@/assets/crsl4.jpg";
import { LuBedDouble } from "react-icons/lu";
import { PiShowerLight } from "react-icons/pi";
import { TfiRulerAlt2 } from "react-icons/tfi";

// const bedIcon = <LuBedDouble />;
// const showerIcon = <PiShowerLight />;
// const rulet = <TfiRulerAlt2 />;
const featured = [
  {
    img: crsl1,
    title: "Luxury villa with pool",
    price: " $990,000.00",
    bedIcon: <LuBedDouble className="w-[18px] h-[18px]" />,
    beds: "4",
    showerIcon: <PiShowerLight className="w-[18px] h-[18px]" />,
    bathroom: "2",
    ruler: <TfiRulerAlt2 className="w-[18px] h-[18px]" />,
    meter: "3410",
  },
  {
    img: crsl2,
    title: "Luxury villa with pool",
    price: " $990,000.00",
    bedIcon: <LuBedDouble className="w-[18px] h-[18px]" />,
    beds: "4",
    showerIcon: <PiShowerLight className="w-[18px] h-[18px]" />,
    bathroom: "2",
    ruler: <TfiRulerAlt2 className="w-[18px] h-[18px]" />,
    meter: "3410",
  },
  {
    img: crsl3,
    title: "Luxury villa with pool",
    price: " $990,000.00",
    bedIcon: <LuBedDouble className="w-[18px] h-[18px]" />,
    beds: "4",
    showerIcon: <PiShowerLight className="w-[18px] h-[18px]" />,
    bathroom: "2",
    ruler: <TfiRulerAlt2 className="w-[18px] h-[18px]" />,
    meter: "3410",
  },
  {
    img: crsl4,
    title: "Luxury villa with pool",
    price: " $990,000.00",
    bedIcon: <LuBedDouble className="w-[18px] h-[18px]" />,
    beds: "4",
    showerIcon: <PiShowerLight className="w-[18px] h-[18px]" />,
    bathroom: "2",
    ruler: <TfiRulerAlt2 className="w-[18px] h-[18px]" />,
    meter: "3410",
  },
  {
    img: crsl1,
    title: "Luxury villa with pool",
    price: " $990,000.00",
    bedIcon: <LuBedDouble className="w-[18px] h-[18px]" />,
    beds: "4",
    showerIcon: <PiShowerLight className="w-[18px] h-[18px]" />,
    bathroom: "2",
    ruler: <TfiRulerAlt2 className="w-[18px] h-[18px]" />,
    meter: "3410",
  },
];

const subImages = [
  {
    img: crsl4,
  },
  {
    img: crsl2,
  },
  {
    img: crsl1,
  },
];

const FeaturedCarousel = () => {
  const breakpoints = {
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },

    767: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  };
  return (
    <>
      <section className="bg-bgGray propertyFeatured">
        <div className="mx-auto lg:container py-24 lg:px-0 px-7">
          <div className="mb-5">
            <h3 className=" text-4xl font-bold font-nokara">
              Featured Properties
            </h3>
            <p className="text-base font-thin leading-7 max-w-[490px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum at fermentum felis. Phasellus eget vehicula sem.
            </p>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={breakpoints}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="featureSwiper"
          >
            {featured.map((item, index) => {
              const {
                title,
                price,
                beds,
                bedIcon,
                bathroom,
                showerIcon,
                ruler,
                meter,
              } = item;
              return (
                // eslint-disable-next-line react/jsx-key
                <SwiperSlide key={index} className="">
                  <div className=" rounded-[4px] bg-white shadow-md relative">
                    <Swiper
                      pagination={true}
                      modules={[Pagination]}
                      className="subImgsNavigation"
                    >
                      {subImages.map((item, index) => {
                        const { img } = item;
                        return (
                          <SwiperSlide key={index}>
                            <Image
                              alt="tesla"
                              src={img}
                              className="w-full rounded-t-[4px]"
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>

                    <div className="flex gap-2 flex-col p-5">
                      <h4 className="text-base font-bold">{title}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-lightPeach text-lg">{price}</span>
                        <div className="flex items-center gap-2 text-iconClr text-sm">
                          <div className="flex items-center gap-1">
                            <span>{bedIcon}</span>
                            <span>{beds}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {" "}
                            <span>{showerIcon}</span>
                            <span>{bathroom}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{ruler}</span>
                            <span>{meter}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[5px] w-full z-[1]">
                    <div className="flex justify-between items-center px-2">
                      <div>
                        {" "}
                        <span className="text-xs uppercase bg-lightPeach text-white px-1">
                          Featured
                        </span>
                      </div>
                      <div>
                        <span className="text-xs uppercase bg-[#cbb492] text-white px-1 ml-2">
                          New
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeaturedCarousel;
