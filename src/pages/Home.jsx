import React from "react";
import { HomeHeader } from "../components/HomeHeader";
import HomeIntro from "../components/HomeIntro";
import { HomeJourney } from "../components/HomeJourney";
import { HomeBrands } from "../components/HomeBrands";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-black">
    <Navbar/>
    <HomeHeader/>
    <HomeIntro/>
    <HomeJourney/>
    <HomeBrands/>
    <Footer/>
    </div>
  );
}
