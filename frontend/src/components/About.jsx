import { Link } from "react-router-dom";
import aboutImage from "../assets/hero/hero2desk.png";

function About() {
  return (
    <section
      id="about"
      className="bg-[#F5F1E8] py-24 text-[#17130E] sm:py-32"
    >
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8F681C]">
            Our Story
          </p>

          <h2 className="max-w-3xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            More than food.
            <span className="block italic">A tradition of taste.</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#D4AF37]" />

            <img
              src={aboutImage}
              alt="Golden Catering food presentation"
              className="relative aspect-[4/5] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-[#17130E] px-6 py-5 text-[#D4AF37]">
              <p className="font-serif text-4xl">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#F5F1E8]">
                Passion for Taste
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-6 text-lg leading-8 text-[#665F54]">
              At Golden Catering Services, we believe every celebration deserves
              exceptional food, heartfelt hospitality and unforgettable
              memories.
            </p>

            <p className="mb-6 text-base leading-7 text-[#665F54]">
              Inspired by traditional South Indian flavours, we carefully
              prepare every dish using quality ingredients, authentic recipes
              and thoughtful presentation.
            </p>

            <p className="mb-10 text-base leading-7 text-[#665F54]">
              Whether it is a wedding, corporate event or family celebration,
              our team works closely with you to create a menu and experience
              that matches your occasion.
            </p>

            {/* Stats */}
            <div className="mb-10 grid grid-cols-2 gap-6 border-y border-[#D8CEBC] py-7">
              <div>
                <p className="font-serif text-4xl text-[#17130E]">01</p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#665F54]">
                  Commitment
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#17130E]">∞</p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#665F54]">
                  Happy Moments
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
  to="/contact"
  className="inline-flex items-center bg-[#17130E] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition-colors duration-300 hover:bg-[#3F3424]"
>
  Know More
  <span className="ml-4 text-lg">↗</span>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;