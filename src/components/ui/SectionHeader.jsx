// components/ui/SectionHeader.jsx
export default function SectionHeader({ label, title, sub }) {
  return (
    <div className="mb-14 text-center">
      <span className="text-xs font-bold tracking-[0.25em] uppercase text-cyan-400 mb-3 block">
        {label}
      </span>
      <h2
        className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white"
        style={{ fontFamily: "'Clash Display', 'DM Sans', sans-serif" }}
      >
        {title}
      </h2>
      {sub && (
        <p className="text-gray-400 max-w-xl mx-auto text-base">{sub}</p>
      )}
    </div>
  );
}
