// components/SkillMarquee.jsx
import { ALL_SKILLS } from "../data/portfolio";

export default function SkillMarquee() {
  // duplicate for seamless infinite loop
  const doubled = [...ALL_SKILLS, ...ALL_SKILLS];

  return (
    <>
      <div
        className="relative mb-16 overflow-hidden"
        style={{
          mask: "linear-gradient(to right,transparent,black 10%,black 90%,transparent)",
          WebkitMask:
            "linear-gradient(to right,transparent,black 10%,black 90%,transparent)",
        }}
      >
        <div
          className="flex gap-3 w-max"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {doubled.map((skill, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-5 py-2 rounded-full border border-white/10
                bg-white/5 text-sm font-bold text-gray-300 whitespace-nowrap
                hover:border-violet-400/50 hover:text-violet-300
                hover:shadow-[0_0_16px_rgba(167,139,250,0.3)]
                transition-all duration-300 backdrop-blur-sm cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
