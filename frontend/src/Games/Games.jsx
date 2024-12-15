import React from "react";
import Navbar from "../assets/components/Navbar";
import Game from "../assets/components/Game";
import Footer from "../assets/components/Footer";

export default function Games() {
  return (
    <>
    <div className="dark:bg-slate-900">
    <Navbar />
      <div className="min-h-screen">
        <Game />
      </div>
      <Footer />
    </div>
      
    </>
  );
}
