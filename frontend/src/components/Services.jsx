
const services = [
  {
    number: "01",
    title: "Wedding Catering",
    description:
      "Traditional and premium wedding catering services crafted with authentic flavours and elegant presentation.",
  },
  {
    number: "02",
    title: "Corporate Catering",
    description:
      "Professional catering solutions for corporate events, meetings, conferences and office celebrations.",
  },
  {
    number: "03",
    title: "Reception Catering",
    description:
      "Delicious menus and beautiful food presentation for receptions, parties and special occasions.",
  },
  {
    number: "04",
    title: "Traditional Catering",
    description:
      "Authentic South Indian cuisine prepared with traditional recipes, fresh ingredients and care.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#D4AF37] px-5 py-24 text-[#17130E] sm:py-32"
    >
      <div className="mx-auto max-w-8xl">
        {/* Section Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#17130E]/70">
              Our Services
            </p>

            <h2 className="max-w-xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Crafted for your
              <span className="block italic">special moments.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#3F3424] md:ml-auto">
            From intimate gatherings to grand celebrations, we bring
            exceptional food, traditional flavours and memorable hospitality
            to every occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-px border border-[#B18B25] bg-[#B18B25] sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative bg-[#E8C45A] p-7 transition-colors duration-500 hover:bg-[#F0D477] sm:p-10"
            >
              {/* Number */}
              <div className="mb-16 flex items-center justify-between">
                <span className="text-sm font-medium text-[#3F3424]">
                  {service.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B18B25] text-xl transition-all duration-300 group-hover:border-[#17130E] group-hover:bg-[#17130E] group-hover:text-[#D4AF37]">
                  ↗
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-3xl text-[#17130E] sm:text-4xl">
                {service.title}
              </h3>

              <p className="max-w-sm text-sm leading-6 text-[#3F3424]">
                {service.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-12 h-px w-full bg-[#B18B25] transition-colors duration-300 group-hover:bg-[#17130E]" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-[#3F3424]">
            Let us create a customised catering experience for your next
            celebration.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center bg-[#17130E] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition-colors duration-300 hover:bg-[#3F3424]"
          >
            Discuss Your Event
            <span className="ml-4 text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;