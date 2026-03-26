// components/Footer.jsx
import { NAV_LINKS, SOCIALS, META } from "../data/portfolio";

export default function Footer({ navigate }) {
  return (
    <footer className="relative border-t border-white/5 px-6 pt-16 pb-8">
      {/* top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,#a78bfa,#06b6d4,transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-2xl font-black mb-3 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg,#a78bfa,#06b6d4)" }}
            >
              {META.name}<span className="text-cyan-400"> Dev</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting elegant, performant web experiences. Available for
              freelance and full-time opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-violet-400 mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((n) => (
                <li key={n}>
                  <button
                    onClick={() => navigate(n)}
                    className="text-gray-400 hover:text-cyan-300 text-sm
                      transition-colors duration-300 cursor-pointer
                      flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300" />
                    {n}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-violet-400 mb-4">
              Social Profiles
            </p>
            <div className="flex gap-3 flex-wrap">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5
                    flex items-center justify-center text-gray-400
                    hover:text-violet-300 hover:border-violet-400/50
                    hover:shadow-[0_0_14px_rgba(167,139,250,0.3)]
                    transition-all duration-300 cursor-pointer"
                >
                  <i className={`${s.icon} text-xs`} />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Open to remote opportunities worldwide.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-between items-center pt-6 border-t border-white/5 text-xs text-gray-500 gap-2">
          <span>
            © 2026 <span className="text-violet-300">{META.name}</span>. All
            rights reserved.
          </span>
          <span>
            Built with <span className="text-pink-400">♥</span> &amp; lots of{" "}
            <span className="text-amber-400">☕</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
