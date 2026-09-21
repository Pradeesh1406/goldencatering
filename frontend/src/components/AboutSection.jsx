
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ChefHat,
  Heart,
  HeartHandshake,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";

import founderImage from "../assets/thangapandian.png";

// Highlights
const highlights = [
  {
    icon: ChefHat,
    title: "Authentic Flavours",
    description: "Traditional recipes with delicious taste.",
  },
  {
    icon: HeartHandshake,
    title: "Heartfelt Service",
    description: "Care and hospitality for every guest.",
  },
  {
    icon: Users,
    title: "Every Celebration",
    description: "Catering for intimate and grand occasions.",
  },
];

// Statistics
const statistics = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Utensils,
    number: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Heart,
    number: 100,
    suffix: "%",
    label: "Quality & Care",
  },
  {
    icon: ChefHat,
    number: 1000,
    suffix: "+",
    label: "Memorable Moments",
  },
];

// Animated Number
function AnimatedNumber({ number, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * number));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, number]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Main Component
function AboutSection() {
  const statisticsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Start animation when statistics enter viewport
  useEffect(() => {
    const element = statisticsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080706] py-24 text-[#F5F1E8] sm:py-32"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 flex items-center gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            About Us
          </p>

          <span className="h-px w-24 bg-[#D4AF37]/60" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <h2 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              A passion for food,
              <span className="mt-3 block italic text-[#D4AF37]">
                a commitment to memorable moments.
              </span>
            </h2>

            {/* Description */}
            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-[#B9AD9B] sm:text-base">
              <p>
                Golden Catering Services is led by{" "}
                <strong className="font-medium text-[#F5F1E8]">
                  P. Thangapandian
                </strong>
                , a passionate catering professional with over 15 years of
                experience in the catering industry.
              </p>

              <p>
                With a deep appreciation for traditional flavours and quality
                food, we bring delicious dining experiences to weddings,
                engagements, house warming functions, birthdays and family
                celebrations.
              </p>

              <p>
                From the first dish to the final serving, our focus is on
                great taste, thoughtful preparation and warm hospitality that
                makes every occasion special.
              </p>
            </div>

            {/* Founder Details */}
            <div className="mt-9 border-l border-[#D4AF37] pl-5">
              <p className="font-serif text-3xl italic text-[#D4AF37] sm:text-4xl">
                P. Thangapandian
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A99C89]">
                Founder • Golden Catering Services
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center border-b border-[#D4AF37] pb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-colors hover:text-white"
            >
              Know More About Us

              <ArrowUpRight
                size={18}
                className="ml-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Founder Image */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            {/* Gold Frame */}
            <div className="absolute -inset-3 rounded-[2rem] border border-[#D4AF37]/30" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D4AF37]/40 bg-[#17130E]">
              <img
                src={founderImage}
                alt="P. Thangapandian - Golden Catering Services"
                className="h-[520px] w-full object-cover object-top grayscale-[10%] transition duration-700 hover:scale-105 sm:h-[620px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/80 via-transparent to-transparent" />

              {/* Experience Badge */}
              <div className="absolute bottom-6 right-5 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#D4AF37] bg-[#080706]/90 text-center shadow-2xl backdrop-blur-sm sm:bottom-8 sm:right-8">
                <span className="font-serif text-4xl text-[#D4AF37]">
                  15+
                </span>

                <span className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.2em] text-[#F5F1E8]">
                  Years
                  <br />
                  Experience
                </span>
              </div>

              {/* Image Caption */}
              <div className="absolute bottom-7 left-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                  Golden Catering
                </p>

                <p className="mt-2 font-serif text-2xl italic text-white">
                  Serving happiness.
                </p>
              </div>
            </div>

            {/* Decorative Sparkle */}
            <Sparkles
              size={30}
              className="absolute -right-7 -top-7 animate-pulse text-[#D4AF37]"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid gap-px border border-[#3B3022] bg-[#3B3022] sm:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-[#100D09] p-7 transition-colors duration-500 hover:bg-[#1B150D] sm:p-9"
              >
                <Icon
                  size={27}
                  strokeWidth={1.4}
                  className="mb-8 text-[#D4AF37] transition-transform duration-300 group-hover:-translate-y-1"
                />

                <h3 className="font-serif text-2xl text-[#F5F1E8]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#A99C89]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Animated Statistics */}
        <div
          ref={statisticsRef}
          className="mt-16 grid overflow-hidden rounded-2xl border border-[#D4AF37]/60 bg-[#100D09] sm:grid-cols-2 lg:grid-cols-4"
        >
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group flex items-center gap-4 p-6 transition-colors duration-300 hover:bg-[#D4AF37]/10 sm:p-8 ${
                  index !== 0
                    ? "border-t border-[#3B3022] lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                {/* Icon */}
                <Icon
                  size={38}
                  strokeWidth={1.3}
                  className="shrink-0 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110"
                />

                {/* Number and Label */}
                <div>
                  <p className="font-serif text-3xl text-[#D4AF37] sm:text-4xl">
                    <AnimatedNumber
                      number={stat.number}
                      suffix={stat.suffix}
                      isVisible={statsVisible}
                    />
                  </p>

                  <p className="mt-1 text-xs text-[#B9AD9B]">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;