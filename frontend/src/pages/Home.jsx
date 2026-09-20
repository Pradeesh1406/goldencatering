
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";

function Home() {
  return (
    <div className="bg-white text-neutral-900">

      {/* Hero Section */}
      <section className="min-h-screen bg-[#fff8ef] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-600">
            Golden Catering Services
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Delicious Food.
            <br />
            Memorable Moments.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            We bring authentic flavors and exceptional catering services
            to weddings, celebrations, corporate events, and special occasions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-medium text-white transition hover:bg-orange-700"
            >
              Enquire Now
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/menu"
              className="rounded-full border border-neutral-300 px-6 py-3 font-medium transition hover:bg-neutral-100"
            >
              Explore Menu
            </Link>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            About Us
          </p>

          <h2 className="mt-3 max-w-2xl text-4xl font-bold md:text-5xl">
            Crafted with passion, served with love.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-neutral-600">
            At Golden Catering, we believe every occasion deserves
            delicious food and excellent service. Our team is dedicated
            to creating memorable dining experiences for every guest.
          </p>

          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600"
          >
            Explore Our Services
            <ArrowUpRight size={18} />
          </Link>

        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            What We Do
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Catering for every occasion.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-neutral-700 p-6">
              <h3 className="text-2xl font-semibold">Wedding Catering</h3>
              <p className="mt-3 text-neutral-400">
                Make your special day memorable with delicious food.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-700 p-6">
              <h3 className="text-2xl font-semibold">Corporate Events</h3>
              <p className="mt-3 text-neutral-400">
                Professional catering for meetings and corporate functions.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-700 p-6">
              <h3 className="text-2xl font-semibold">Private Functions</h3>
              <p className="mt-3 text-neutral-400">
                Customized food services for celebrations and gatherings.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-bold">
            Why choose Golden Catering?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "Fresh and quality ingredients",
              "Experienced catering team",
              "Customized menus",
              "Professional service",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-orange-600" size={22} />
                <p className="text-lg">{item}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-bold md:text-5xl">
          Planning your next event?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-orange-100">
          Let us make your celebration special with delicious food
          and exceptional catering service.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
        >
          Contact Us
          <ArrowUpRight className="ml-2" size={18} />
        </Link>
      </section>

    </div>
  );
}

export default Home;