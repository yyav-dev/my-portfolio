// components/ProjectCard.jsx
import { useInView } from "../hooks";
import GlassCard from "./ui/GlassCard";
import { TAG_COLORS } from "../data/portfolio";

export default function ProjectCard({ project, index }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <GlassCard className="overflow-hidden group cursor-pointer h-full flex flex-col">
        {/* Thumbnail */}
        <div
          className="relative h-44 flex items-center justify-center text-6xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,rgba(124,58,237,0.15),rgba(6,182,212,0.1),rgba(236,72,153,0.1))",
          }}
        >
          {/* hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(135deg,rgba(124,58,237,0.25),rgba(6,182,212,0.2))",
            }}
          />
          {/* corner glow — top-left */}
          <div
            className="absolute top-0 left-0 w-12 h-12 rounded-br-full opacity-0
              group-hover:opacity-100 group-hover:w-20 group-hover:h-20
              transition-all duration-500"
            style={{
              background: "radial-gradient(circle,rgba(167,139,250,0.6),transparent)",
            }}
          />
          {/* corner glow — bottom-right */}
          <div
            className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-full opacity-0
              group-hover:opacity-100 group-hover:w-20 group-hover:h-20
              transition-all duration-500"
            style={{
              background: "radial-gradient(circle,rgba(6,182,212,0.6),transparent)",
            }}
          />
          <span className="relative z-10 group-hover:scale-110 transition-transform duration-500 inline-block select-none">
            {project.emoji}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2.5 py-0.5 rounded-full border bg-gradient-to-r font-semibold ${
                  TAG_COLORS[tag] ||
                  "from-violet-500/20 to-pink-500/20 text-violet-300 border-violet-400/30"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-black text-lg text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
            {project.desc}
          </p>

          {/* Links */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.demo}
              className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full
                border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300
                hover:shadow-[0_0_16px_rgba(6,182,212,0.3)]
                text-gray-300 transition-all duration-300 bg-white/5 cursor-pointer"
            >
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
            <a
              href={project.code}
              className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full
                border border-white/10 hover:border-violet-400/50 hover:text-violet-300
                hover:shadow-[0_0_16px_rgba(167,139,250,0.3)]
                text-gray-300 transition-all duration-300 bg-white/5 cursor-pointer"
            >
              <i className="fab fa-github" /> Code
            </a>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
