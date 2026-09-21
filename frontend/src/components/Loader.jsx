
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Loader() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Loader appears only on the Home page
    if (pathname !== "/") {
      setVisible(false);
      return;
    }

    setVisible(true);
    setExiting(false);

    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2400);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 3100);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [pathname]);

  if (!visible || pathname !== "/") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#080706] transition-all duration-700 ${
        exiting
          ? "pointer-events-none scale-110 opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      {/* Ambient Glow */}
      <div className="absolute h-72 w-72 animate-pulse rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      {/* Decorative Rings */}
      <div className="absolute h-72 w-72 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-[#D4AF37]/30 sm:h-96 sm:w-96" />

      <div className="absolute h-56 w-56 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-[#D4AF37]/20 sm:h-72 sm:w-72" />

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* Rotating Gold Ring */}
        <div className="relative flex h-44 w-44 items-center justify-center sm:h-56 sm:w-56">
          <div className="absolute inset-0 animate-[spin_3s_linear_infinite] rounded-full border border-transparent border-t-[#D4AF37] border-r-[#D4AF37]/30" />

          <div className="absolute inset-3 rounded-full border border-[#D4AF37]/20" />

          {/* Logo */}
          <img
            src={logo}
            alt="Golden Catering"
            className="w-36 animate-[loaderLogo_1.5s_ease-out_forwards] object-contain opacity-0 sm:w-44"
          />
        </div>

        {/* Animated Gold Line */}
        <div className="mt-10 h-px w-0 animate-[loaderLine_1.4s_ease-out_0.5s_forwards] bg-[#D4AF37]" />

        {/* Loading Text */}
        <p className="mt-6 animate-pulse text-[10px] uppercase tracking-[0.45em] text-[#D4AF37]">
          A Taste of Tradition
        </p>

        {/* Loading Dots */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-1 w-1 animate-bounce rounded-full bg-[#D4AF37]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-[#D4AF37] [animation-delay:150ms]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-[#D4AF37] [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

export default Loader;