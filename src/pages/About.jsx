// pages/About.jsx
import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";
import { useInView } from "../hooks";
import { META, STATS, TIMELINE } from "../data/portfolio";

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section className="min-h-screen px-6 py-28 relative" ref={ref}>
      {/* ambient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle,#7c3aed,transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Who I Am"
          title={
            <>
              Crafting Code,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#a78bfa,#06b6d4)" }}
              >
                Designing
              </span>{" "}
              Dreams
            </>
          }
          sub="Passionate developer with 4+ years building fast, beautiful, scalable web apps."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Left: avatar + stats ── */}
          <div
            className="flex flex-col items-center gap-8 transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-48px)",
            }}
          >
            {/* Animated avatar */}
            <div className="relative">
              {/* outer dashed ring */}
              <div
                className="absolute rounded-full border border-dashed border-violet-500/30 animate-spin"
                style={{ inset: "-24px", animationDuration: "14s", animationDirection: "reverse" }}
              />
              {/* gradient spinning ring */}
              <div
                className="absolute rounded-full animate-spin"
                style={{
                  inset: "-12px",
                  animationDuration: "8s",
                  background:
                    "linear-gradient(#080c14,#080c14) padding-box, linear-gradient(135deg,#a78bfa,#06b6d4) border-box",
                  border: "2px solid transparent",
                }}
              />
              {/* avatar circle */}
              <div
                className="relative z-10 w-64 h-64 rounded-full flex items-center justify-center text-8xl"
                style={{
                  background: "linear-gradient(135deg,#1e1b4b,#0e1628)",
                  boxShadow: "0 0 60px rgba(124,58,237,0.3)",
                }}
              >
                <img
                  src="/ky-image.jpg"
                  alt="Karthicyadhav"
                  className="relative z-10 w-64 h-64 rounded-full object-cover object-top"
                  style={{ boxShadow: "0 0 60px rgba(124,58,237,0.3)" }}
                />
              </div>
              {/* open-to-work tag */}
              {META.availableForWork && (
                <div
                  className="absolute bottom-2 -right-6 px-3 py-1 rounded-full text-xs font-bold
                    text-cyan-300 border border-cyan-400/30 bg-cyan-400/10
                    backdrop-blur-sm z-20 shadow-[0_0_14px_rgba(6,182,212,0.3)]"
                >
                  🚀 Open to Work
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 w-full">
              {STATS.map(({ value, label }) => (
                <GlassCard key={label} className="p-4 text-center">
                  <div
                    className="text-2xl font-black bg-clip-text text-transparent mb-1"
                    style={{ backgroundImage: "linear-gradient(135deg,#a78bfa,#06b6d4)" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-gray-400">{label}</div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* ── Right: timeline ── */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(48px)",
              transitionDelay: "200ms",
            }}
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-2">
              My Journey
            </p>
            <h3 className="text-2xl font-black mb-8 text-white">
              Career{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#a78bfa,#f472b6)" }}
              >
                Timeline
              </span>
            </h3>

            <div className="relative pl-6">
              {/* vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent" />

              {TIMELINE.map((item, i) => (
                <div key={i} className="relative pb-8 group">
                  {/* dot */}
                  <div
                    className="absolute -left-[1.5rem] top-[0.35rem] w-3 h-3 rounded-full border-2 border-gray-900"
                    style={{
                      background: "linear-gradient(135deg,#a78bfa,#06b6d4)",
                      boxShadow: "0 0 10px rgba(167,139,250,0.8)",
                    }}
                  />
                  <GlassCard className="p-4 group-hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-xs font-bold text-cyan-400 tracking-wider">
                      {item.year}
                    </span>
                    <h4 className="font-bold text-white mt-1">{item.role}</h4>
                    <p className="text-violet-300 text-sm">{item.place}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
