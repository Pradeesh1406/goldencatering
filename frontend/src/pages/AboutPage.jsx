import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  CakeSlice,
  ChefHat,
  Heart,
  HeartHandshake,
  House,
  PartyPopper,
  Sparkles,
  Utensils,
  Users,
} from "lucide-react";

import founderImage from "../assets/thangapandian.png";
import storyImage from "../assets/about-story.png";
import storyImage2 from "../assets/about-story2.png";

// ==================================================
// VALUES
// ==================================================

const values = [
  {
    icon: ChefHat,
    title: "Authentic Taste",
    description:
      "Traditional flavours prepared with care, bringing the taste of home to every celebration.",
  },
  {
    icon: Heart,
    title: "Quality Ingredients",
    description:
      "We believe great food begins with good ingredients and thoughtful preparation.",
  },
  {
    icon: HeartHandshake,
    title: "Heartfelt Service",
    description:
      "From preparation to serving, we give every guest the care and hospitality they deserve.",
  },
];

// ==================================================
// OCCASIONS
// ==================================================

const occasions = [
  {
    icon: CalendarDays,
    title: "Weddings",
    description:
      "Make your special day memorable with delicious food and warm service.",
  },
  {
    icon: Heart,
    title: "Engagements",
    description:
      "Celebrate beautiful beginnings with food your guests will remember.",
  },
  {
    icon: CakeSlice,
    title: "Birthday Celebrations",
    description:
      "From intimate gatherings to grand celebrations, we cater to every occasion.",
  },
  {
    icon: House,
    title: "Housewarming",
    description:
      "Welcome your loved ones into your new home with a memorable feast.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional catering for meetings, events, celebrations and gatherings.",
  },
  {
    icon: PartyPopper,
    title: "Family Functions",
    description:
      "Thoughtful catering for family celebrations and special moments.",
  },
];

// ==================================================
// STATISTICS
// ==================================================

const statistics = [
  {
    icon: Users,
    number: 100,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: ChefHat,
    number: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Utensils,
    number: 200,
    suffix: "+",
    label: "Events Served",
  },
  {
    icon: Heart,
    number: 100,
    suffix: "%",
    label: "Commitment",
  },
];

// ==================================================
// ANIMATED NUMBER
// ==================================================

function AnimatedNumber({ number, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const duration = 1800;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

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

// ==================================================
// ABOUT PAGE
// ==================================================

function AboutPage() {
  const statisticsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // ==================================================
  // STATISTICS OBSERVER
  // ==================================================

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
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-[#080706] text-[#F5F1E8]">

      {/* ==================================================
          01 — ABOUT HERO
      ================================================== */}

      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#080706] px-5 py-28 sm:px-8 sm:py-36 lg:min-h-[82vh] lg:px-12">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

        {/* Decorative Vertical Line */}
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent lg:block" />

        <div className="relative mx-auto grid w-full max-w-8xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <div className="mb-8 flex items-center gap-4">

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                About Golden Catering
              </span>

              <span className="h-px w-16 bg-[#D4AF37]/60" />

            </div>

            <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">

              More than food.

              <span className="mt-4 block italic text-[#D4AF37]">
                It's a tradition.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#B9AD9B] sm:text-base sm:leading-8">
  Backed by over{" "}
  <span className="font-medium text-[#D4AF37]">
    45 years of combined culinary experience
  </span>{" "}
  from our chefs and culinary masters, Golden Catering Services
  brings authentic flavours, thoughtful preparation and heartfelt
  hospitality to weddings, celebrations and special occasions.
</p>

            <div className="mt-10 flex flex-wrap items-center gap-7">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 border-b border-[#D4AF37] pb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-colors hover:text-white"
              >
                Plan Your Event

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <div className="hidden h-8 w-px bg-[#3B3022] sm:block" />

              <span className="text-[10px] uppercase tracking-[0.28em] text-[#756B5D]">
                Tradition • Taste • Togetherness
              </span>

            </div>

          </div>

          {/* RIGHT FOOD IMAGE */}
          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">

            <div className="absolute -inset-3 rounded-[2rem] border border-[#D4AF37]/25" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D4AF37]/40 bg-[#17130E]">

              <img
                src={storyImage}
                alt="Traditional South Indian food served by Golden Catering Services"
                className="h-[430px] w-full object-cover sm:h-[540px] lg:h-[600px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/85 via-transparent to-[#080706]/10" />

              <div className="absolute bottom-7 left-7">

                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  Golden Catering Services
                </p>

                <p className="mt-2 max-w-xs font-serif text-3xl italic text-white sm:text-4xl">
                  Tradition served with love.
                </p>

              </div>

            </div>

            <Sparkles
              size={28}
              className="absolute -right-6 -top-6 animate-pulse text-[#D4AF37]"
            />

          </div>

        </div>

      </section>


      {/* ==================================================
          02 — OUR JOURNEY
      ================================================== */}

      <section className="relative overflow-hidden border-t border-[#2A2117] bg-[#0D0B08] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">

        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-8xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">

          {/* IMAGE */}
          <div className="relative order-2 lg:order-1">

            <div className="absolute -inset-3 rounded-[2rem] border border-[#D4AF37]/20" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D4AF37]/30 bg-[#17130E]">

              <img
                src={storyImage2}
                alt="Traditional South Indian ingredients and food preparation"
                className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[600px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/85 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                  Traditional Flavours
                </p>

                <p className="mt-2 font-serif text-3xl italic text-white">
                  Timeless memories.
                </p>

              </div>

            </div>

          </div>


          {/* CONTENT */}
          <div className="order-1 lg:order-2">

            <div className="flex items-center gap-4">

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Our Journey
              </span>

              <span className="h-px w-16 bg-[#D4AF37]/60" />

            </div>

            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">

              Rooted in tradition,

              <span className="block italic text-[#D4AF37]">
                serving with purpose.
              </span>

            </h2>

            <div className="mt-9 max-w-2xl space-y-6 text-sm leading-8 text-[#B9AD9B] sm:text-base">

              <p>
                Golden Catering Services was built with a simple
                belief — that good food has the power to bring
                people together.
              </p>

              <p>
                What began with a passion for traditional cooking
                has grown into a catering service focused on
                delivering delicious food and memorable experiences
                for families, celebrations and special occasions.
              </p>

              <p>
                We take pride in preserving the richness of our
                culinary traditions while maintaining high standards
                of quality, hygiene and service. Every menu is
                prepared with care, using fresh ingredients and
                thoughtfully selected recipes.
              </p>

            </div>


            {/* Philosophy */}
            <div className="mt-10 grid gap-5 border-t border-[#33291D] pt-8 sm:grid-cols-3">

              {/* Traditional */}
              <div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#D4AF37]">
                  <ChefHat
                    size={18}
                    strokeWidth={1.4}
                  />
                </div>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Traditional
                </p>

                <p className="mt-2 text-xs leading-5 text-[#857967]">
                  Recipes inspired by authentic flavours.
                </p>

              </div>


              {/* Thoughtful */}
              <div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#D4AF37]">
                  <Utensils
                    size={18}
                    strokeWidth={1.4}
                  />
                </div>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Thoughtful
                </p>

                <p className="mt-2 text-xs leading-5 text-[#857967]">
                  Every dish prepared with care.
                </p>

              </div>


              {/* Memorable */}
              <div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#D4AF37]">
                  <Heart
                    size={18}
                    strokeWidth={1.4}
                  />
                </div>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Memorable
                </p>

                <p className="mt-2 text-xs leading-5 text-[#857967]">
                  Experiences made for every celebration.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          03 — OUR PHILOSOPHY
      ================================================== */}

      <section className="relative bg-[#080706] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">

        <div className="mx-auto w-full max-w-8xl">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              What We Believe
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">

              Simple values.

              <span className="block italic text-[#D4AF37]">
                Exceptional experiences.
              </span>

            </h2>

          </div>


          <div className="mt-16 grid gap-px border border-[#33291D] bg-[#33291D] md:grid-cols-3">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-[#100D09] p-8 transition-colors duration-500 hover:bg-[#19140E] sm:p-10 lg:p-12"
                >

                  <Icon
                    size={30}
                    strokeWidth={1.3}
                    className="mb-12 text-[#D4AF37] transition-transform duration-300 group-hover:-translate-y-1"
                  />

                  <h3 className="font-serif text-3xl text-[#F5F1E8]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#9F9381]">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          04 — WHY GOLDEN CATERING
      ================================================== */}

      <section className="relative overflow-hidden bg-[#D4AF37] px-5 py-24 text-[#080706] sm:px-8 sm:py-32 lg:px-12">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#080706]/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-[#080706]/10" />

        <div className="relative mx-auto grid w-full max-w-8xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.35em]">
              Why Golden Catering
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">

              Made with care.

              <span className="mt-3 block italic">
                Served with heart.
              </span>

            </h2>

            <p className="mt-8 max-w-lg text-sm leading-7 text-[#080706]/70">
              Every celebration is different. Our goal is to
              understand what makes yours special and create
              a food experience that your guests remember.
            </p>

          </div>


          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">

            {[
              "Traditional Tamil flavours",
              "Fresh and quality ingredients",
              "Thoughtful food preparation",
              "Professional serving team",
              "Customized menus",
              "Care for every guest",
            ].map((item, index) => (

              <div
                key={item}
                className="flex items-start gap-5 border-t border-[#080706]/25 pt-5"
              >

                <span className="font-serif text-xl">
                  0{index + 1}
                </span>

                <p className="text-sm font-semibold leading-6">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          05 — EXPERIENCE
      ================================================== */}

      <section
        ref={statisticsRef}
        className="bg-[#080706] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >

        <div className="mx-auto w-full max-w-8xl">

          <div className="mb-14 max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Our Experience
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">

              Years of serving

              <span className="italic text-[#D4AF37]">
                {" "}memorable moments.
              </span>

            </h2>

          </div>


          <div className="grid overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-[#100D09] sm:grid-cols-2 lg:grid-cols-4">

            {statistics.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group flex items-center gap-5 p-7 transition-colors duration-300 hover:bg-[#D4AF37]/10 sm:p-9 ${
                    index !== 0
                      ? "border-t border-[#33291D] lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >

                  <Icon
                    size={36}
                    strokeWidth={1.2}
                    className="shrink-0 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110"
                  />

                  <div>

                    <p className="font-serif text-4xl text-[#D4AF37]">
                      <AnimatedNumber
                        number={stat.number}
                        suffix={stat.suffix}
                        isVisible={statsVisible}
                      />
                    </p>

                    <p className="mt-1 text-xs text-[#A99C89]">
                      {stat.label}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          06 — OCCASIONS
      ================================================== */}

      <section className="relative bg-[#0D0B08] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">

        <div className="mx-auto w-full max-w-8xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Celebrations
              </p>

              <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">

                For every occasion,

                <span className="block italic text-[#D4AF37]">
                  we bring the flavour.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#918575]">
              Whether it is an intimate family gathering or
              a grand celebration, we create catering
              experiences that fit the occasion.
            </p>

          </div>


          {/* Occasion Grid */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {occasions.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden border border-[#33291D] bg-[#100D09] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/60 sm:p-10"
                >

                  <div className="flex items-start justify-between">

                    <Icon
                      size={30}
                      strokeWidth={1.3}
                      className="text-[#D4AF37] transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="font-serif text-4xl text-[#D4AF37]/20">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-14 font-serif text-3xl text-[#F5F1E8]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#918575]">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          07 — FOUNDER
      ================================================== */}

      <section className="relative bg-[#080706] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">

        <div className="mx-auto grid w-full max-w-8xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Founder Image */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -inset-3 rounded-[2rem] border border-[#D4AF37]/30" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D4AF37]/40 bg-[#17130E]">

              <img
                src={founderImage}
                alt="P. Thangapandian, Founder of Golden Catering Services"
                className="h-[560px] w-full object-cover object-top sm:h-[650px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/85 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  Golden Catering Services
                </p>

                <p className="mt-2 font-serif text-3xl italic text-white">
                  Serving with purpose.
                </p>

              </div>

            </div>

          </div>


          {/* Founder Content */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Meet The Founder
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">

              A passion for food,

              <span className="mt-3 block italic text-[#D4AF37]">
                a passion for people.
              </span>

            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#A99C89] sm:text-base">
              P. Thangapandian brings more than 15 years of
              experience in the catering industry, with a deep
              appreciation for traditional flavours and the joy
              that good food brings to people.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#A99C89] sm:text-base">
              His philosophy is simple: every event deserves
              delicious food, genuine hospitality and attention
              to detail. That philosophy continues to shape
              Golden Catering Services today.
            </p>


            {/* Founder Signature */}
            <div className="mt-10 border-l border-[#D4AF37] pl-6">

              <p className="font-serif text-3xl italic text-[#D4AF37]">
                P. Thangapandian
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#756B5D]">
                Founder • Golden Catering Services
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          08 — FINAL CTA
      ================================================== */}

      <section className="relative overflow-hidden bg-[#D4AF37] px-5 py-24 text-center text-[#080706] sm:px-8 sm:py-32">

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#080706]/10" />

        <div className="relative mx-auto max-w-4xl">

          <p className="text-xs font-bold uppercase tracking-[0.35em]">
            Your Celebration Awaits
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">

            Let's make your

            <span className="block italic">
              next occasion special.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#080706]/70 sm:text-base">
            Tell us about your event and let Golden Catering
            Services take care of the food and hospitality.
          </p>

          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-4 border-b-2 border-[#080706] pb-3 text-xs font-bold uppercase tracking-[0.25em]"
          >
            Contact Us

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default AboutPage;