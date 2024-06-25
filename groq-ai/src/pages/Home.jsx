import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Faqs from "../components/Faqs";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Faqs />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
