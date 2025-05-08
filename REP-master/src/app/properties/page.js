"use client";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Filters from "../components/Filters";
import ListingCards from "../components/ListingCards";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import SkeletonCard from "../components/SkeletonCard";

const properties = () => {
  const [loading, setLoading] = useState(false);

  // Load this effect on mount
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Banner />
      <Filters />
      <section className="bg-bgGray">
        <div className="container mx-auto py-12 lg:px-0 px-7">
          <Breadcrumb />
          <h3 className=" text-4xl font-bold font-nokara mb-[30px] mt-3">
            Properties​
          </h3>
          {loading && <SkeletonCard />}
          {!loading && (
            <>
              <ListingCards />
              <Pagination />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default properties;
