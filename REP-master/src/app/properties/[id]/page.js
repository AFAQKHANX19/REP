"use client";

import Breadcrumb from "@/app/components/Breadcrumb";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiNotepadLight } from "react-icons/pi";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { PiCheckCircleLight } from "react-icons/pi";
import { LuBedDouble } from "react-icons/lu";
import { PiShowerLight } from "react-icons/pi";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { PiPoliceCarLight } from "react-icons/pi";
import Gallery from "@/app/components/Gallery";

const featureList = [
  {
    title: "Air Conditioning",
    circle: <PiCheckCircleLight className="w-6 h-6" />,
  },
  {
    title: "Air Conditioning",
    circle: <PiCheckCircleLight className="w-6 h-6" />,
  },
  {
    title: "Lawn",
    circle: <PiCheckCircleLight className="w-6 h-6" />,
  },
  {
    title: "Swimming Pool",
    circle: <PiCheckCircleLight className="w-6 h-6" />,
  },
  {
    title: "Barbeque",
    circle: <PiCheckCircleLight className="w-6 h-6" />,
  },
];

const DetailPage = () => {
  const [activeTab, setActiveTab] = useState("folder");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };
  return (
    <>
      <Gallery />

      <section className="bg-bgGray">
        <div className="lg:container mx-auto py-14">
          {/* heading with breadcrumb */}
          <div className="lg:px-0 px-5">
            <Breadcrumb />
            <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col ">
              <h3 className=" text-[30px] font-bold font-nokara my-3">
                Modern Design Villa With Pool And Guest House
              </h3>
              <span className="text-[30px] font-bold">$1,900.00/mo</span>
            </div>
            <div className="flex items-center gap-2 lg:mt-0 mt-3">
              <span>
                <CiLocationOn />
              </span>
              <span className="text-sm font-normal text-lightGray ">
                598 NW 12th Ave, Fort Lauderdale, FL 33311, USA
              </span>
            </div>
          </div>
          {/* description about property */}
          <section className="pt-10">
            <div className="flex bg-white">
              <div className="tab flex flex-col items-center lg:w-[10%] md:w-[10%] w-[20%]">
                <div
                  className={`tablinks block w-full p-4 text-lg transition duration-300 ${
                    activeTab === "folder" ? "bg-gray-300" : "hover:bg-gray-200"
                  }`}
                  onClick={() => openCity("folder")}
                  id="defaultOpen"
                >
                  <CiFolderOn className="w-8 h-8 mx-auto" />
                </div>
                <div
                  className={`tablinks block w-full p-4 text-lg transition duration-300 ${
                    activeTab === "details"
                      ? "bg-gray-300"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => openCity("details")}
                >
                  <PiNotepadLight className="w-8 h-8 mx-auto" />
                </div>
                <div
                  className={`tablinks block w-full p-4 text-lg transition duration-300 ${
                    activeTab === "features"
                      ? "bg-gray-300"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => openCity("features")}
                >
                  <CiSettings className="w-8 h-8 mx-auto" />
                </div>
                <div
                  className={`tablinks block w-full p-4 text-lg transition duration-300 ${
                    activeTab === "video" ? "bg-gray-300" : "hover:bg-gray-200"
                  }`}
                  onClick={() => openCity("video")}
                >
                  <PiYoutubeLogoThin className="w-8 h-8 mx-auto" />
                </div>
              </div>

              <div className="tabcontent lg:w-[95%] md:w-[95%] w-[80%] py-4 lg:px-7 px-5">
                {activeTab === "folder" && (
                  <div id="folder" className="pb-8">
                    <h3 className="text-xl font-bold mt-5 mb-8">Description</h3>
                    <hr className="pb-5" />
                    <p className="text-base font-normal text-lightBlack">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse
                      molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit augue duis
                      dolore te feugait nulla facilisi.
                      <br />
                      Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet doming id quod mazim placerat facer possim
                      assum. Typi non habent claritatem insitam; est usus
                      legentis in iis qui facit eorum claritatem.
                      Investigationes demonstraverunt lectores legere me lius
                      quod ii legunt saepius. Claritas est etiam processus
                      dynamicus, qui sequitur mutationem consuetudium lectorum.
                      Mirum est notare quam littera gothica, quam nunc putamus
                      parum claram, anteposuerit litterarum formas humanitatis
                      per seacula quarta decima et quinta decima. Eodem modo
                      typi, qui nunc nobis videntur parum clari, fiant sollemnes
                      in futurum.
                    </p>
                  </div>
                )}
                {activeTab === "details" && (
                  <div id="details" className="pb-8">
                    <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col">
                      <h3 className="text-xl font-bold lg:mt-5 lg:mb-8 mt-5">
                        Details
                      </h3>
                      <p className="text-sm font-normal text-lightGray flex items-center gap-2 lg:my-0 my-3">
                        <SlCalender /> Updated on April 4, 2020 at 5:25 pm
                      </p>
                    </div>
                    <hr className="pb-6" />
                    <div className="flex gap-5 bg-bgGray p-[30px] border rounded-[4px] lg:flex-row md:flex-row flex-col">
                      <div className="1-column lg:w-1/2 w-full">
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">Property ID:</span>
                          <span className="font-normal">HZ11</span>
                        </div>
                        <hr className=" my-1 " />
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">Price:</span>
                          <span className="font-normal">$570,000.00</span>
                        </div>
                        <hr className=" my-1 " />
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">Property Size:</span>
                          <span className="font-normal">3400 Sq Ft</span>
                        </div>
                        <hr className=" my-1 " />
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">Bedrooms:</span>
                          <span className="font-normal">4</span>
                        </div>
                        <hr className=" my-1 " />
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">Bathrooms:</span>
                          <span className="font-normal">2</span>
                        </div>
                      </div>
                      <div className="2-column lg:w-1/2 w-full">
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">Garage:</span>
                          <span className="font-normal">1</span>
                        </div>
                        <hr className=" my-1 " />
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">Garage Size:</span>
                          <span className="font-normal">200 SqFt</span>
                        </div>
                        <hr className=" my-1 " />
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">Year Built</span>
                          <span className="font-normal">2016</span>
                        </div>
                        <hr className=" my-1 " />
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">Property Type:</span>
                          <span className="font-normal">Loft</span>
                        </div>
                        <hr className=" my-1 " />
                        <div className="flex items-center justify-between text-base">
                          <span className="font-semibold">
                            Property Status:
                          </span>
                          <span className="font-normal">For Sale</span>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col">
                      <h3 className="text-xl font-bold mt-6">
                        Additional Details
                      </h3>
                      <hr className="my-6" />
                      <div className="flex gap-5 lg:flex-row flex-col md:flex-row">
                        <div className="1-column lg:w-1/2 w-full">
                          <div className="flex items-center justify-between text-base">
                            <span className="font-semibold">Deposit:</span>
                            <span className="font-normal">20%</span>
                          </div>
                          <hr className=" my-1 " />
                          <div className="flex items-center justify-between text-base">
                            <span className="font-semibold">Property ID:</span>
                            <span className="font-normal">HZ11</span>
                          </div>
                          <hr className=" my-1 " />
                          <div className="flex items-center justify-between text-base">
                            <span className="font-semibold">Property ID:</span>
                            <span className="font-normal">HZ11</span>
                          </div>
                        </div>
                        <div className="2-column lg:w-1/2 w-full">
                          <div className="flex items-center justify-between text-base">
                            <span className="font-semibold">Property ID:</span>
                            <span className="font-normal">HZ11</span>
                          </div>
                          <hr className=" my-1 " />
                          <div className="flex items-center justify-between text-base">
                            <span className="font-semibold">Property ID:</span>
                            <span className="font-normal">HZ11</span>
                          </div>
                          <hr className=" my-1 " />
                          <div className="flex items-center justify-between text-base">
                            <span className="font-semibold">Equipment</span>
                            <span className="font-normal">Grill - Gas</span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                )}
                {activeTab === "features" && (
                  <div id="features">
                    <h3 className="text-xl font-bold mt-5 mb-8">Features</h3>
                    <hr className="pb-5" />
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5">
                      {featureList.map((item, index) => {
                        const { title, circle } = item;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-base hover:text-lightPeach text-lightBlack font-normal"
                          >
                            <span>{circle}</span>
                            <span>{title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {activeTab === "video" && (
                  <div id="video">
                    <h3 className="text-xl font-bold mt-5 mb-8">360° Tour</h3>
                    <hr className="pb-5" />
                    <p className="text-base font-normal text-lightBlack"></p>
                  </div>
                )}
              </div>
            </div>
          </section>
          {/* overview */}
          <section className="bg-white mt-8 pb-8 px-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold lg:mt-5 lg:mb-8 my-5">
                Overview
              </h3>
              <p className="text-base font-semibold text-lightGray flex items-center gap-1">
                Property ID:<span className="font-normal"> HZ11</span>
              </p>
            </div>
            <hr className="pb-5" />
            <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 items-center lg:gap-[3.5rem] gap-5">
              <div className="flex flex-col text-base">
                <span className="font-semibold">Villa</span>
                <span className="font-normal text-lightGray">
                  Property Type
                </span>
              </div>
              <div className="flex flex-col text-base">
                <span className="font-semibold flex items-center gap-2">
                  {" "}
                  <LuBedDouble className="w-[18px] h-[18px]" /> 1
                </span>
                <span className="font-normal text-lightGray">Bedrooms</span>
              </div>
              <div className="flex flex-col text-base">
                <span className="font-semibold flex items-center gap-2">
                  {" "}
                  <PiShowerLight className="w-[18px] h-[18px]" /> 1
                </span>
                <span className="font-normal text-lightGray">Bathroom</span>
              </div>
              <div className="flex flex-col text-base">
                <span className="font-semibold flex items-center gap-2">
                  {" "}
                  <PiPoliceCarLight />1
                </span>
                <span className="font-normal text-lightGray">Garage</span>
              </div>
              <div className="flex flex-col text-base">
                <span className="font-semibold flex items-center gap-2">
                  {" "}
                  <TfiRulerAlt2 className="w-[18px] h-[18px]" /> 1245
                </span>
                <span className="font-normal text-lightGray">Sq Ft</span>
              </div>
              <div className="flex flex-col text-base">
                <span className="font-semibold flex items-center gap-2">
                  {" "}
                  <SlCalender /> 2016
                </span>
                <span className="font-normal text-lightGray">Year Built</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
