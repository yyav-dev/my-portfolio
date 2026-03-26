// pages/Home.jsx
import { useState, useEffect } from "react";
import GradientBtn from "../components/ui/GradientBtn";
import { META, SOCIALS } from "../data/portfolio";

export default function Home({ navigate }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24">

      {/* ── Ambient background orbs ── */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 animate-pulse"
        style={{ background: "radial-gradient(circle,#7c3aed,transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 animate-pulse"
        style={{ background: "radial-gradient(circle,#0891b2,transparent)", animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle,#ec4899,transparent)" }}
      />

      {/* ── Hero content ── */}
      <div
        className={`relative z-10 max-w-3xl text-center transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Available badge */}
        {META.availableForWork && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
            Seeking Jobs & Works
          </div>
        )}

        {/* Name */}
        <h1
          className="text-6xl md:text-8xl font-black leading-none mb-6"
          style={{ fontFamily: "'Clash Display','DM Sans',sans-serif" }}
        >
          <span className="block text-white/90">Hi, I'm</span>
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg,#a78bfa 0%,#06b6d4 40%,#f472b6 80%)",
              WebkitBackgroundClip: "text",
            }}
          >
            {META.name}
          </span>
        </h1>

        {/* Role */}
        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          <strong className="text-white font-semibold">{META.role}</strong>
          <br />
          {META.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <GradientBtn onClick={() => window.open(META.cvLink, "_blank")}>
            <i className="fas fa-download" /> Download CV
          </GradientBtn>
          <GradientBtn outline onClick={() => navigate("Projects")}>
            <i className="fas fa-rocket" /> Explore Projects
          </GradientBtn>
        </div>

        {/* Social icons */}
        <div className="flex gap-3 justify-center">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="group relative w-11 h-11 rounded-full border border-white/10 flex items-center justify-center
                text-gray-400 hover:text-white hover:border-violet-400/60
                hover:shadow-[0_0_20px_rgba(167,139,250,0.4)]
                transition-all duration-300 hover:-translate-y-1 hover:rotate-6
                backdrop-blur-sm bg-white/5 cursor-pointer"
            >
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(167,139,250,0.2),rgba(6,182,212,0.2))",
                }}
              />
              <i className={`${s.icon} text-sm relative z-10`} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase">
        <span className="w-px h-10 bg-gradient-to-b from-violet-400 to-transparent" />
        scroll
      </div>
    </section>
  );
}
