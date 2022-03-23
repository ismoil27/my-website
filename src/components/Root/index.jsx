import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import About from "../About";
import Skills from "../Skills";
// import Services from "../Services";
import Portfolio from "../Portfolio";
// import Testimonials from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";

export const Root = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Root;
