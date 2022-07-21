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
  const body = document.querySelector("body");
  if (body) {
    const scrollbar = window.innerWidth - body.clientWidth;
    body.setAttribute("style", `--scrollbar: ${scrollbar}px`);
  }
  return (
    <div className="container main-container">
      <div style={{}}>
        <Header />
        <TopPattern />
        <section id="about">
          <About />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="introduction">
          <Introduction />
        </section>
        <Department />
        <section id="professors">
          <Professors />
        </section>
        <section id="location">
          <Location />
        </section>
        <Footer />
      </div>
    </div>
  );
}
