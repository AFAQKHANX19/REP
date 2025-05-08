import Image from "next/image";
import Link from "next/link";
import Banner from "./components/Banner";
import BestFlatList from "./components/BestFlatList";
import FlatList from "./components/FlatList";
import References from "./components/References";
import Societies from "./components/Societies";
import TeamList from "./components/TeamList";
import RootLayout from "./layout";
import Filters from "./components/Filters";
import AboutUsSection from "./components/AboutUsSection";
import DhaPhases from "./components/DhaPhases";
import Services from "./components/Services";
import Categories from "./components/Categories";
import KeepInTouch from "./components/KeepInTouch";
import FeaturedCarousel from "./components/FeaturedCarousel";

export default function Home() {
  return (
    <>
      <Banner />
      <Filters />
      <FeaturedCarousel />
      <Categories />
      {/* <Services /> */}
      <AboutUsSection />
      <DhaPhases />
      <KeepInTouch />
    </>
  );
}
