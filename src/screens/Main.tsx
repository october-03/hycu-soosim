import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import About from "../components/main/About";
import Department from "../components/main/Department";
import Gallery from "../components/main/Gallery";
import Introduction from "../components/main/Introduction";
import Location from "../components/main/Location";
import Professors from "../components/main/Professors";
import TopPattern from "../components/main/TopPattern";

export default function Main() {
  return (
    <div className="container row">
      <div style={{ flex: 8 }}>
        <Header />
        <TopPattern />
        <About />
        <Gallery />
        <Introduction />
        <Department />
        <Professors />
        <Location />
        <Footer />
      </div>
    </div>
  );
}
