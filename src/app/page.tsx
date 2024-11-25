import React from "react";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <IntroSection />
    <Resume/>
    <Portfolio/>
    <Footer/>

    </>
  );
}
