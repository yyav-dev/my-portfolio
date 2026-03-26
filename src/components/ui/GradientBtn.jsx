// components/ui/GradientBtn.jsx
export default function GradientBtn({
  children,
  onClick,
  outline = false,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative overflow-hidden px-7 py-3 rounded-full
        font-bold text-sm tracking-wide cursor-pointer
        transition-all duration-300 flex items-center gap-2
        ${outline
          ? `border border-violet-400/50 text-violet-300
             hover:border-cyan-400 hover:text-cyan-300
             hover:shadow-[0_0_24px_rgba(6,182,212,0.3)]`
          : `text-gray-900
             shadow-[0_0_30px_rgba(167,139,250,0.4)]
             hover:shadow-[0_0_50px_rgba(167,139,250,0.6)]
             hover:scale-105 active:scale-95`}
        ${className}
      `}
      style={
        !outline
          ? { background: "linear-gradient(135deg,#a78bfa,#06b6d4,#f472b6)" }
          : {}
      }
    >
      {children}
    </button>
  );
}
