import React from "react";
import Navbar from "../assets/components/Navbar";
import Banner from "../assets/components/Banner";
import Footer from "../assets/components/Footer";
// import Games from "../assets/components/Games";
import Products from "../assets/components/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </>
  );
}
