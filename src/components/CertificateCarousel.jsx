// components/CertificateCarousel.jsx
import { useState } from "react";
import { CERTIFICATES } from "../data/portfolio";
import GlassCard from "./ui/GlassCard";

export default function CertificateCarousel() {
  const [idx, setIdx] = useState(0);
  const total = CERTIFICATES.length;

  const prev = () => setIdx((idx - 1 + total) % total);
  const next = () => setIdx((idx + 1) % total);

  const getPosition = (i) => {
    const diff = (i - idx + total) % total;
    if (diff === 0)          return "center";
    if (diff === 1)          return "right";
    if (diff === total - 1)  return "left";
    return "hidden";
  };

  const posStyles = {
    center: {
      transform: "translateX(0) scale(1)",
      opacity: 1,
      zIndex: 10,
      filter: "none",
    },
    right: {
      transform: "translateX(55%) scale(0.85)",
      opacity: 0.5,
      zIndex: 5,
      filter: "blur(1px)",
    },
    left: {
      transform: "translateX(-55%) scale(0.85)",
      opacity: 0.5,
      zIndex: 5,
      filter: "blur(1px)",
    },
    hidden: {
      transform: "translateX(0) scale(0.7)",
      opacity: 0,
      zIndex: 1,
      filter: "blur(4px)",
    },
  };

  return (
    <div>
      {/* Stage */}
      <div className="relative h-72 flex items-center justify-center mb-10 overflow-hidden">
        {CERTIFICATES.map((cert, i) => {
          const pos = getPosition(i);
          return (
            <div
              key={i}
              className="absolute w-full max-w-sm"
              style={{
                transition: "all 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                ...posStyles[pos],
              }}
            >
              <GlassCard
                hover={false}
                className={
                  pos === "center"
                    ? "p-8 border-violet-400/40 shadow-[0_0_50px_rgba(167,139,250,0.2)]"
                    : "p-8"
                }
              >
                {/* top gradient line for active card */}
                {pos === "center" && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                    style={{
                      background:
                        "linear-gradient(90deg,transparent,#a78bfa,#06b6d4,transparent)",
                    }}
                  />
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(167,139,250,0.2),rgba(6,182,212,0.2))",
                    border: "1px solid rgba(167,139,250,0.3)",
                  }}
                >
                  {cert.icon}
                </div>

                <h3 className="font-black text-white text-lg mb-1">{cert.title}</h3>
                <p className="text-violet-300 text-sm font-semibold mb-2">{cert.org}</p>
                <p className="text-gray-400 text-xs mb-4">{cert.date}</p>

                <span className="text-xs px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 font-bold">
                  ✓ Verified
                </span>
              </GlassCard>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        {/* Prev */}
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5
            flex items-center justify-center text-gray-400
            hover:border-violet-400/50 hover:text-violet-300
            hover:shadow-[0_0_16px_rgba(167,139,250,0.3)]
            transition-all duration-300 cursor-pointer"
        >
          <i className="fas fa-chevron-left text-xs" />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2 items-center">
          {CERTIFICATES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width:  i === idx ? "28px" : "8px",
                height: "8px",
                background:
                  i === idx
                    ? "linear-gradient(90deg,#a78bfa,#06b6d4)"
                    : "rgba(255,255,255,0.2)",
                boxShadow:
                  i === idx ? "0 0 10px rgba(167,139,250,0.6)" : "none",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5
            flex items-center justify-center text-gray-400
            hover:border-violet-400/50 hover:text-violet-300
            hover:shadow-[0_0_16px_rgba(167,139,250,0.3)]
            transition-all duration-300 cursor-pointer"
        >
          <i className="fas fa-chevron-right text-xs" />
        </button>
      </div>

      {/* Numeric counter */}
      <p className="text-center text-gray-500 text-sm mt-4 font-mono">
        <span className="text-violet-300 font-bold">
          {String(idx + 1).padStart(2, "0")}
        </span>
        {" / "}
        <span>{String(total).padStart(2, "0")}</span>
      </p>
    </div>
  );
}
