import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Loader from "./components/Loader";


function App() {
  return (
    <div className="min-h-screen bg-[#080706] text-white">
          <Loader />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
     <main>
      {/* <section id="home">

      
        <Hero />
        </section>
        <Services />
        <About />
          <Menu /> */}

            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
           
      </main>
      <Footer />

    </div>
  );
}

export default App;