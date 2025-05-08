"use client";
import React from "react";
import crsl1 from "@/assets/crsl1.jpg";
import crsl2 from "@/assets/crsl2.jpg";
import crsl3 from "@/assets/crsl3.jpg";
import crsl4 from "@/assets/crsl4.jpg";
import { LuBedDouble } from "react-icons/lu";
import { PiShowerLight } from "react-icons/pi";
import { TfiRulerAlt2 } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

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

const ListingCards = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        {featured.map((item, index) => {
          const {
            img,
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
            <div key={index}>
              <Link href="/properties/12">
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
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListingCards;
