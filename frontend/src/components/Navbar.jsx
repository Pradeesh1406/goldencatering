
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "AboutUs", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

  const handleNavClick = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-8xl items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Logo */}
          {/* <a
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="block"
          >
            <img
              src={logo}
              alt="Golden Catering"
              className="h-16 w-auto object-contain"
            />
          </a> */}

          <Link
  to="/"
  onClick={() => handleNavClick("Home")}
  className="block"
>
  <img
    src={logo}
    alt="Golden Catering"
    className="h-16 w-auto object-contain"
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
  {navLinks.map((link) => (
    <NavLink
      key={link.name}
      to={link.href}
      onClick={() => handleNavClick(link.name)}
      className={({ isActive }) =>
        `relative font-sans text-sm transition-colors duration-300 ${
          isActive
            ? "text-[#d4af37]"
            : "text-white/80 hover:text-[#d4af37]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {link.name}

          {isActive && (
            <span className="absolute -bottom-2 left-0 h-px w-full bg-[#d4af37]" />
          )}
        </>
      )}
    </NavLink>
  ))}
</nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            {/* Phone */}
            <a
              href="tel:8754698739"
              className="hidden items-center gap-2 rounded-full bg-[#d4af37] px-5 py-3 font-sans text-sm font-medium text-black transition hover:bg-[#f5d77a] sm:flex"
            >
              <Phone size={16} />
              8754698739
            </a>

            {/* Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#d4af37]/70 text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Side Menu Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col overflow-y-auto border-l border-[#d4af37]/20 bg-[#0c0a08] px-6 py-6 shadow-2xl transition-transform duration-500 ease-in-out sm:px-10 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Navigation menu"
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#d4af37]">
            Golden Catering
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Navigation */}
       <nav className="mt-10 flex flex-col gap-2">
  {navLinks.map((link, index) => (
    <NavLink
      key={link.name}
      to={link.href}
      onClick={() => handleNavClick(link.name)}
      className={({ isActive }) =>
        `group flex items-center justify-between border-b border-white/10 py-5 font-serif text-2xl transition-colors ${
          isActive
            ? "text-[#d4af37]"
            : "text-white hover:text-[#d4af37]"
        }`
      }
    >
      <span>
        <span className="mr-4 font-sans text-xs text-[#d4af37]">
          0{index + 1}
        </span>

        {link.name}
      </span>

      <ArrowUpRight
        size={22}
        className="opacity-40 transition group-hover:opacity-100"
      />
    </NavLink>
  ))}
</nav>

        {/* Drawer Footer */}
        <div className="mt-auto border-t border-white/10 pt-6">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-white/40">
            Let's create something memorable
          </p>

          <a
            href="tel:8754698739"
            className="flex items-center gap-3 font-sans text-lg text-[#d4af37]"
          >
            <Phone size={18} />
            8754698739
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;