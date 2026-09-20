
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// Menu Images
import biryani from "../assets/hero/hero1desk.png";
import meals from "../assets/hero/hero2desk.png";
import paneer from "../assets/hero/hero3desk.png";
import dessert from "../assets/hero/hero4desk.png";
import juice from "../assets/hero/hero1desk.png";
import starter from "../assets/hero/hero2desk.png";

const signatureDishes = [
  {
    name: "Signature Biryani",
    category: "Main Course",
    image: biryani,
  },
  {
    name: "Traditional Meals",
    category: "South Indian",
    image: meals,
  },
  {
    name: "Special Paneer",
    category: "Vegetarian",
    image: paneer,
  },
  {
    name: "Royal Desserts",
    category: "Sweet Selection",
    image: dessert,
  },
  {
    name: "Fresh Welcome Drinks",
    category: "Beverages",
    image: juice,
  },
  {
    name: "Crispy Starters",
    category: "Appetizers",
    image: starter,
  },
];

function Menu() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);

  // Slow continuous scrolling
  const autoScroll = () => {
    const slider = sliderRef.current;

    if (!slider || isPausedRef.current) return;

    slider.scrollLeft += 0.6;

    // Restart from beginning
    if (
      slider.scrollLeft + slider.clientWidth >=
      slider.scrollWidth - 1
    ) {
      slider.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  };

  // Start automatic scrolling
  const startAutoScroll = () => {
    isPausedRef.current = false;

    cancelAnimationFrame(animationRef.current);

    animationRef.current = requestAnimationFrame(autoScroll);
  };

  // Stop automatic scrolling
  const stopAutoScroll = () => {
    isPausedRef.current = true;

    cancelAnimationFrame(animationRef.current);
  };

  // Start on page load
  useEffect(() => {
    startAutoScroll();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section
      id="menu"
      className="overflow-hidden bg-[#17130E] px-5 py-24 text-[#F5F1E8] sm:py-32"
    >
      <div className="mx-auto max-w-8xl">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Our Menu
            </p>

            <h2 className="max-w-2xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Our signature
              <span className="block italic text-[#D4AF37]">
                dishes.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#B9AD9B] md:ml-auto">
            A selection of our favourite creations, prepared with
            authentic flavours and presented with care.
          </p>
        </div>

        {/* Dishes Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          onTouchStart={stopAutoScroll}
          onTouchEnd={startAutoScroll}
          className="flex gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {signatureDishes.map((dish) => (
            <article
              key={dish.name}
              className="group relative min-w-[245px] overflow-hidden sm:min-w-[280px] lg:min-w-[300px]"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Hover Content */}
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                    {dish.category}
                  </p>

                  <h3 className="text-3xl leading-tight text-[#F5F1E8]">
                    {dish.name}
                  </h3>

                  <div className="mt-4 h-px w-full bg-[#D4AF37]/50" />
                </div>

                {/* Arrow */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#17130E]">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </div>
              </div>

              {/* Mobile Title */}
              <div className="bg-[#211B13] px-4 py-4 sm:hidden">
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                  {dish.category}
                </p>

                <h3 className="text-xl text-[#F5F1E8]">
                  {dish.name}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-6 border-t border-[#3B3022] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#B9AD9B]">
            Discover our complete menu and customised catering options.
          </p>

          <a
            href="/menu"
            className="inline-flex w-fit items-center bg-[#D4AF37] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#17130E] transition-colors duration-300 hover:bg-[#F0D477]"
          >
            Explore All Menu
            <ArrowUpRight size={17} className="ml-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Menu;