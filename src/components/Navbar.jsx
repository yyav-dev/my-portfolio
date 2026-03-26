// components/Navbar.jsx
import { useState } from "react";
import { NAV_LINKS } from "../data/portfolio";
import { useScrolled } from "../hooks";

export default function Navbar({ active, navigate }) {
  const scrolled    = useScrolled(40);
  const [open, setOpen] = useState(false);

  const handleNav = (page) => {
    navigate(page);
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-2xl ${
        scrolled ? "border-b border-white/5" : ""
      }`}
      style={{ background: scrolled ? "rgba(8,12,20,0.85)" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("Home")}
          className="text-xl font-black bg-clip-text text-transparent cursor-pointer"
          style={{ backgroundImage: "linear-gradient(135deg,#a78bfa,#06b6d4)" }}
        >
          Karthicyadhav<span className="text-cyan-400"> Portfolio</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((n) => (
            <li key={n}>
              <button
                onClick={() => handleNav(n)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                  active === n ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {active === n && (
                  <span
                    className="absolute inset-0 rounded-full border border-violet-400/40"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(167,139,250,0.12),rgba(6,182,212,0.08))",
                    }}
                  />
                )}
                <span className="relative">{n}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(90deg,#a78bfa,#06b6d4)",
                transform:
                  open && i === 0
                    ? "rotate(45deg) translate(4px,4px)"
                    : open && i === 1
                    ? "scaleX(0)"
                    : open && i === 2
                    ? "rotate(-45deg) translate(4px,-4px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-white/5 px-6 py-4"
          style={{ background: "rgba(8,12,20,0.97)", backdropFilter: "blur(20px)" }}
        >
          {NAV_LINKS.map((n) => (
            <button
              key={n}
              onClick={() => handleNav(n)}
              className={`block w-full text-left py-3 text-sm font-semibold cursor-pointer
                border-b border-white/5 last:border-0 transition-colors duration-200 ${
                active === n ? "text-violet-300" : "text-gray-400 hover:text-white"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
