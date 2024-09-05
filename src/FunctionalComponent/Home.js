import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import MainCards from "./Maincards";
import CarouselCardAfter from "./CarouselCardAfter";
import Maincards1 from "./Maincards1";
import CarouselCardAfter1 from "./CarouselCardAfter1";
import Menubar from "./Menubar";

function Home() {
  return (
    <>
      <Header />
      <Menubar />
      <Main />
      <MainCards />
      <CarouselCardAfter />
      <Maincards1 />
      <CarouselCardAfter1 />
      <Footer />
    </>
  );
}

export default Home;
