import React from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./serction3";
import Footer from "./footer";
import Button from "./button";

export default function Aplicacion() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Button />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
