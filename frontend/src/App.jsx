import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#080706] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
     <main>
      <section id="home">

      
        <Hero />
        </section>
        <Services />
        <About />
          <Menu />
           
      </main>
      <Footer />

    </div>
  );
}

export default App;