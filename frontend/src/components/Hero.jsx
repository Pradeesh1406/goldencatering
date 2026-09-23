import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";

import hero1desk from "../assets/hero/hero1desk.png";
import hero1mobile from "../assets/hero/hero1mobile.png";

import hero2desk from "../assets/hero/hero2desk.png";
import hero2mobile from "../assets/hero/hero2mobile.png";

import hero3desk from "../assets/hero/hero3desk.png";
import hero3mobile from "../assets/hero/hero3mobile.png";

import hero4desk from "../assets/hero/hero4desk.png";
import hero4mobile from "../assets/hero/hero4mobile.png";
// Add more images when available:
// import hero2 from "../assets/hero/hero-2.png";
// import hero3 from "../assets/hero/hero-3.png";

function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeGreeting, setActiveGreeting] = useState(0);

  const heroImages = [
    {desktop: hero1desk,
    mobile: hero1mobile,},

     {desktop: hero2desk,
    mobile: hero2mobile,},

     {desktop: hero3desk,
    mobile: hero3mobile,},

     {desktop: hero4desk,
    mobile: hero4mobile,},
    // hero2,
    // hero3,
  ];

  const greetings = [
    "வணக்கம்",
    "Namaste",
    "Welcome",
  ];

  // Background Image Slider
  useEffect(() => {
    if (heroImages.length <= 1) return;

    const imageInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [heroImages.length]);

  // Greeting Animation
  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setActiveGreeting((prev) => (prev + 1) % greetings.length);
    }, 2500);

    return () => clearInterval(greetingInterval);
  }, [greetings.length]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080706]"
    >
     
      
{/* Background Images */}
{heroImages.map((image, index) => (
  <picture
    key={image.desktop}
    className={`absolute inset-0 h-full w-full transition-opacity duration-[1800ms] ease-in-out ${
      activeImage === index ? "opacity-100" : "opacity-0"
    }`}
  >
    {/* Mobile Image */}
    <source
      media="(max-width: 767px)"
      srcSet={image.mobile}
    />

    {/* Desktop Image */}
    <img
      src={image.desktop}
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover"
    />
  </picture>
))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Warm Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#080706]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-8xl flex-col items-center px-5 pb-24 pt-32 text-center sm:px-8 lg:px-12">

        {/* Top Ornament */}
        <div className="mb-7 flex items-center gap-4 text-[#d4af37]">
          <span className="h-px w-12 bg-[#d4af37]/60" />
          <span className="text-xl">✦</span>
          <span className="h-px w-12 bg-[#d4af37]/60" />
        </div>

        {/* Small Label */}
        <p className="mb-5 font-sans text-xs uppercase tracking-[0.35em] text-[#f5d77a] sm:text-sm">
          Good Food Brings People Together
        </p>

        {/* Greeting */}
        <div className="flex h-20 items-center justify-center sm:h-28">
          <h1
            key={greetings[activeGreeting]}
            className="animate-[greetingFade_0.8s_ease-in-out] font-serif text-5xl text-[#f5d77a] sm:text-7xl lg:text-8xl"
          >
            {greetings[activeGreeting]}
          </h1>
        </div>

        {/* Greeting Subtext */}
        <p className="mt-3 font-sans text-sm tracking-widest text-white/60">
          Namaste <span className="mx-3 text-[#d4af37]">|</span> Welcome{" "}
          <span className="mx-3 text-[#d4af37]">|</span> Vanakkam
        </p>

        {/* Main Heading */}
        <h2 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.1] text-white sm:text-6xl lg:text-7xl">
          Exquisite Taste,
          <br />
          <span className="text-[#d4af37]">
            Golden Memories
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl font-sans text-sm leading-relaxed text-white/75 sm:text-base">
          Authentic flavours. Impeccable service. Unforgettable
          celebrations. We bring the richness of Indian cuisine
          to your most special moments.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">

         <Link
  to="/contact"
  className="group flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-[#d4af37] px-7 py-4 font-sans text-sm font-semibold text-black transition duration-300 hover:bg-[#f5d77a] sm:w-auto"
>
  Book Your Event

  <ArrowRight
    size={18}
    className="transition-transform group-hover:translate-x-1"
  />
</Link>

          {/* <a
            href="#menu"
            className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-[#d4af37] px-7 py-4 font-sans text-sm text-white transition duration-300 hover:bg-[#d4af37] hover:text-black sm:w-auto"
          >
            Explore Our Menu
            <ArrowRight size={18} />
          </a> */}

        </div>

        {/* Trust Points */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">

          {[
            "Premium Quality Ingredients",
            "Hygienic & Professional Service",
            "Memorable Dining Experiences",
            "Catering for All Occasions",
          ].map((item) => (
            <div key={item} className="px-2">
              <p className="font-serif text-sm leading-relaxed text-white/90 sm:text-base">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/60"
      >
        <span>Scroll</span>
        <span className="h-8 w-px bg-[#d4af37]" />
      </a>

    </section>
  );
}

export default Hero;