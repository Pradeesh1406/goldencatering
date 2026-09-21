import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Property Functions",
    description:
      "Delicious catering services for property events, community gatherings and special celebrations with family and friends.",
  },
  {
    number: "02",
    title: "House Warming",
    description:
      "Celebrate your new beginning with traditional South Indian flavours, warm hospitality and beautifully served food.",
  },
  {
    number: "03",
    title: "Birthday Celebrations",
    description:
      "Make every birthday memorable with customised menus, delicious dishes and catering designed for your special day.",
  },
  {
    number: "04",
    title: "Marriage Catering",
    description:
      "Traditional and premium marriage catering with authentic flavours, carefully prepared menus and memorable service.",
  },
  {
    number: "05",
    title: "Engagement Functions",
    description:
      "Celebrate your engagement with elegant catering, delicious food and a dining experience your guests will remember.",
  },
];

function Services() {
  return (
    <section
  id="services"
  className="bg-[#D4AF37] py-24 text-[#17130E] sm:py-32"
>
  <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#17130E]/70">
              What We Cater
            </p>

            <h2 className="max-w-xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Every occasion,
              <span className="block italic">served beautifully.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#3F3424] md:ml-auto">
            From meaningful family functions to grand celebrations, Golden
            Catering brings authentic flavours and heartfelt hospitality to
            every occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-px border border-[#B18B25] bg-[#B18B25] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex min-h-[350px] flex-col justify-between bg-[#E8C45A] p-7 transition-all duration-500 hover:bg-[#F5D77A] sm:p-9"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#3F3424]">
                  {service.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B18B25] transition-all duration-300 group-hover:border-[#17130E] group-hover:bg-[#17130E] group-hover:text-[#D4AF37]">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              {/* Content */}
              <div className="mt-16">
                <h3 className="mb-4 max-w-xs text-3xl leading-tight text-[#17130E] sm:text-4xl">
                  {service.title}
                </h3>

                <p className="max-w-sm text-sm leading-6 text-[#3F3424]">
                  {service.description}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="mt-10 h-px w-full bg-[#B18B25] transition-colors duration-300 group-hover:bg-[#17130E]" />
            </article>
          ))}

          {/* Animated Experience Card */}
<article className="group relative flex min-h-[350px] flex-col items-center justify-center overflow-hidden bg-[#17130E] p-8 text-center sm:p-10">
  {/* Decorative Circle */}
  <div className="absolute h-64 w-64 animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-[#D4AF37]/40" />

  <div className="absolute h-48 w-48 rounded-full border border-[#D4AF37]/20" />

  {/* Floating Icon */}
  <div className="relative mb-6 flex h-14 w-14 animate-pulse items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37]">
    <Sparkles size={22} />
  </div>

  <p className="relative mb-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
    Golden Experience
  </p>

  <h3 className="relative max-w-xs text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
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
    <ArrowUpRight size={16} className="ml-3" />
  </Link>
</article>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-[#3F3424]">
            Planning a special occasion? Let us create a delicious experience
            for you and your guests.
          </p>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center justify-center bg-[#17130E] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition-colors duration-300 hover:bg-[#3F3424]"
          >
            Discuss Your Event
            <ArrowUpRight size={18} className="ml-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;