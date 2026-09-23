import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Heart } from "lucide-react";

function Footer() {
  const menuLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Our Menu", href: "/menu" },
  // { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

 

  return (
    <footer className="bg-[#080706] pb-8 pt-20 text-[#F5F1E8] sm:pt-28">
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-14 border-b border-[#3B3022] pb-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Golden Catering"
                className="h-auto w-44 object-contain"
              />
            </Link>

            <h2 className="mt-8 max-w-md text-4xl leading-tight text-[#F5F1E8] sm:text-5xl">
              Every celebration
              <span className="block italic text-[#D4AF37]">
                deserves a golden touch.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#A99C89]">
              Bringing people together through authentic flavours, heartfelt
              hospitality and beautifully crafted catering experiences.
            </p>

            {/* Social Icons */}
       
      <div className="mt-8 flex items-center gap-3">
        <a
          href="https://www.facebook.com/YOUR_PAGE"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5D4B2B] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#080706]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z" />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/golden__catering__services/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5D4B2B] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#080706]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        <a
          href="https://wa.me/918754698739"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5D4B2B] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#080706]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-4-.9L3 21l1.9-4.7A8.5 8.5 0 1 1 21 11.5z" />
            <path d="M8 9.5c.3 2 2.5 4.2 4.5 4.5l1.5-1.5 2 1" />
          </svg>
        </a>
      </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore
            </h3>

            <ul className="space-y-4">
              {menuLinks.map((link) => (
                <li key={link.name}>
                 <Link
                  to={link.href}
                  className="group inline-flex items-center text-sm text-[#B9AD9B] transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  {link.name}

                  <ArrowUpRight
                    size={14}
                    className="ml-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Let's Connect
            </h3>

            <p className="mb-6 max-w-xs text-sm leading-6 text-[#A99C89]">
              Planning your next celebration? Let's create a memorable dining
              experience together.
            </p>

            <div className="space-y-4 text-sm">
              <a
                href="tel:8754698739"
                className="block text-[#A99C89] transition-colors hover:text-[#D4AF37]"
              >
                +91 87546 98739
              </a>

              <a
                href="mailto:thangapandian0905@gmail.com"
                className="block break-all text-[#B9AD9B] transition-colors hover:text-[#D4AF37]"
              >
                thangapandian0905@gmail.com
              </a>

              <p className="text-[#B9AD9B]">
                Chennai, Tamil Nadu
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918754698739"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center border-b border-[#D4AF37] pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition-colors hover:text-[#F5F1E8]"
            >
              Chat With Us
              <ArrowUpRight size={16} className="ml-3" />
            </a>
          </div>
        </div>

        {/* Large Brand Text */}
        {/* <div className="overflow-hidden py-12">
          <p className="whitespace-nowrap text-center font-serif text-[clamp(4rem,12vw,11rem)] leading-none text-[#D4AF37]/10">
            GOLDEN
          </p>
        </div> */}

        {/* Bottom Footer */}
<div className="border-t border-[#3B3022] pt-7">
  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-center text-xs text-[#776B5A] lg:justify-between">
    {/* Copyright */}
    <p className="whitespace-nowrap">
      © {new Date().getFullYear()} Golden Catering Services
    </p>

    {/* Developer Credit */}
   <p className="flex items-center justify-center whitespace-nowrap">
  Designed & Developed by{" "}
  <a
    href="https://pradeesh-portfolio-orcin.vercel.app/"
    target="_blank"
    rel="noreferrer"
    className="ml-1 font-medium text-[#776B5A] underline decoration-[#776B5A]/50 underline-offset-4 transition-colors duration-300 hover:text-[#F5F1E8]"
    aria-label="Visit Pradeesh's portfolio"
  >
    Pradeesh
  </a>

  <Heart
    size={13}
    className="fill-[#8B0000] text-[#8B0000]"
  />
</p>

    {/* Back to Top */}
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="whitespace-nowrap transition-colors hover:text-[#D4AF37]"
    >
      Back to top ↑
    </button>
  </div>
</div>
      </div>
    </footer>
  );
}

export default Footer;