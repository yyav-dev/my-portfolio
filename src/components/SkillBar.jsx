// components/SkillBar.jsx
import GlassCard from "./ui/GlassCard";

export default function SkillBar({ name, pct, color, visible }) {
  return (
    <GlassCard className="p-5">
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-sm text-white">{name}</span>
        <span className={`text-xs font-black bg-clip-text text-transparent bg-gradient-to-r ${color}`}>
          {pct}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-[0_0_8px_rgba(167,139,250,0.5)]`}
          style={{
            width: visible ? `${pct}%` : "0%",
            transition: "width 1.4s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s",
          }}
        />
      </div>
    </GlassCard>
  );
}
