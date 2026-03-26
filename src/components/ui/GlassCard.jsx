// components/ui/GlassCard.jsx
export default function GlassCard({ children, className = "", hover = true, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl border border-white/10
        backdrop-blur-xl bg-white/5
        ${hover
          ? "hover:border-violet-400/40 hover:shadow-[0_0_40px_rgba(167,139,250,0.15)] transition-all duration-500"
          : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
