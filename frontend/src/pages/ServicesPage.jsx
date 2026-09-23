import {
  ArrowUpRight,
  ChefHat,
  Check,
  Heart,
  HeartHandshake,
  Sparkles,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

// ==================================================
// SERVICES
// ==================================================

const services = [
  {
    number: "01",
    title: "Property Functions",
    description:
      "Delicious catering services for property events, community gatherings and special celebrations with family and friends.",
    icon: Utensils,
  },
  {
    number: "02",
    title: "House Warming",
    description:
      "Celebrate your new beginning with traditional South Indian flavours, warm hospitality and beautifully served food.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Birthday Celebrations",
    description:
      "Make every birthday memorable with customised menus, delicious dishes and catering designed for your special day.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Marriage Catering",
    description:
      "Traditional and premium marriage catering with authentic flavours, carefully prepared menus and memorable service.",
    icon: HeartHandshake,
  },
  {
    number: "05",
    title: "Engagement Functions",
    description:
      "Celebrate your engagement with elegant catering, delicious food and a dining experience your guests will remember.",
    icon: ChefHat,
  },
];

// ==================================================
// WHAT WE OFFER
// ==================================================

const features = [
  "Authentic South Indian flavours",
  "Thoughtfully prepared menus",
  "Beautifully served food",
  "Warm and professional hospitality",
  "Catering for intimate and grand occasions",
  "Attention to every guest and detail",
];

// ==================================================
// SERVICES PAGE
// ==================================================

function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#080706] text-[#F5F1E8]">

    
   

      {/* ==================================================
          01 — WHAT YOU CAN EXPECT
      ================================================== */}

      <section className="bg-[#080706] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">

        <div className="mx-auto grid w-full max-w-8xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* Heading */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              What You Can Expect
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">

              More than

              <span className="block italic text-[#D4AF37]">
                just catering.
              </span>

            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#918575] sm:text-base">
              We focus on creating a complete food experience,
              from preparation to presentation and service.
            </p>

          </div>


          {/* Features */}
          <div className="border-t border-[#33291D]">

            {features.map((feature, index) => (

              <div
                key={feature}
                className="group flex items-center gap-5 border-b border-[#33291D] py-6"
              >

                <span className="font-serif text-lg text-[#D4AF37]/50">
                  0{index + 1}
                </span>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#080706]">

                  <Check size={15} />

                </div>

                <p className="text-sm text-[#D6CDBF] sm:text-base">
                  {feature}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ==================================================
          03 — SERVICES
      ================================================== */}

      <section className="bg-[#D4AF37] px-5 py-24 text-[#17130E] sm:px-8 sm:py-32 lg:px-12">

        <div className="mx-auto w-full max-w-8xl">

          {/* Header */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

            <div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#17130E]/70">
                What We Cater
              </p>

              <h2 className="max-w-xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">

                Made for your

                <span className="block italic">
                  special moments.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-base leading-7 text-[#3F3424] md:ml-auto">
              Choose the occasion and let us take care of the
              food, preparation and catering experience.
            </p>

          </div>


          {/* Service Grid */}
          <div className="grid gap-px border border-[#B18B25] bg-[#B18B25] sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative flex min-h-[390px] flex-col justify-between bg-[#E8C45A] p-7 transition-all duration-500 hover:bg-[#F5D77A] sm:p-9"
                >

                  {/* Top */}
                  <div className="flex items-center justify-between">

                    <span className="text-sm font-medium text-[#3F3424]">
                      {service.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B18B25] transition-all duration-300 group-hover:border-[#17130E] group-hover:bg-[#17130E] group-hover:text-[#D4AF37]">

                      <Icon size={19} />

                    </div>

                  </div>


                  {/* Content */}
                  <div className="mt-16">

                    <h3 className="mb-5 max-w-xs font-serif text-3xl leading-tight text-[#17130E] sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="max-w-sm text-sm leading-7 text-[#3F3424]">
                      {service.description}
                    </p>

                  </div>


                  {/* Bottom */}
                  <div className="mt-10 flex items-center justify-between">

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6A5528]">
                      Golden Catering
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </div>

                </article>
              );
            })}


            {/* Experience Card */}
            <article className="group relative flex min-h-[390px] flex-col items-center justify-center overflow-hidden bg-[#17130E] p-8 text-center sm:p-10">

              {/* Decorative Circle */}
              <div className="absolute h-64 w-64 animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-[#D4AF37]/40" />

              <div className="absolute h-48 w-48 rounded-full border border-[#D4AF37]/20" />

              {/* Icon */}
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37]">

                <Sparkles
                  size={22}
                  className="animate-pulse"
                />

              </div>

              <p className="relative mb-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Golden Experience
              </p>

              <h3 className="relative max-w-xs font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">

                Your occasion,

                <span className="block italic text-[#D4AF37]">
                  our passion.
                </span>

              </h3>

              <Link
                to="/contact"
                className="relative mt-7 inline-flex items-center border-b border-[#D4AF37] pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition-colors hover:text-white"
              >
                Plan Your Event

                <ArrowUpRight
                  size={16}
                  className="ml-3"
                />

              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          05 — OUR APPROACH
      ================================================== */}

      <section className="bg-[#0D0B08] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">

        <div className="mx-auto w-full max-w-8xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            {/* Left */}
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Our Approach
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">

                Thoughtful food.

                <span className="block italic text-[#D4AF37]">
                  Beautiful occasions.
                </span>

              </h2>

            </div>


            {/* Right */}
            <div className="grid gap-px border border-[#33291D] bg-[#33291D] sm:grid-cols-3">

              <div className="bg-[#100D09] p-7 sm:p-9">

                <ChefHat
                  size={28}
                  strokeWidth={1.3}
                  className="text-[#D4AF37]"
                />

                <h3 className="mt-10 font-serif text-2xl">
                  Preparation
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#918575]">
                  Thoughtfully prepared food with attention to
                  flavour and quality.
                </p>

              </div>


              <div className="bg-[#100D09] p-7 sm:p-9">

                <Utensils
                  size={28}
                  strokeWidth={1.3}
                  className="text-[#D4AF37]"
                />

                <h3 className="mt-10 font-serif text-2xl">
                  Presentation
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#918575]">
                  Beautifully served food that complements
                  your celebration.
                </p>

              </div>


              <div className="bg-[#100D09] p-7 sm:p-9">

                <HeartHandshake
                  size={28}
                  strokeWidth={1.3}
                  className="text-[#D4AF37]"
                />

                <h3 className="mt-10 font-serif text-2xl">
                  Hospitality
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#918575]">
                  Warm and thoughtful service for you and
                  your guests.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          06 — CTA
      ================================================== */}

      <section className="relative overflow-hidden bg-[#D4AF37] px-5 py-24 text-center text-[#080706] sm:px-8 sm:py-32">

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#080706]/10" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#080706]/10" />


        <div className="relative mx-auto max-w-4xl">

          <p className="text-xs font-bold uppercase tracking-[0.35em]">
            Let's Create Something Special
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">

            Planning your

            <span className="block italic">
              next celebration?
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#080706]/70 sm:text-base">
            Tell us about your occasion and let Golden Catering
            create a delicious experience for you and your guests.
          </p>

          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-4 border-b-2 border-[#080706] pb-3 text-xs font-bold uppercase tracking-[0.25em]"
          >
            Discuss Your Event

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

export default ServicesPage;