import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Arrivals from "./pages/Arrivals";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Footer from "./pages/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 800 });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Blog />
      <Arrivals />
      <Contact />
      <Clients />
      <Footer />
    </div>
  );
};

export default App;
