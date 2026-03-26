// components/GradientCursor.jsx
import { useEffect, useRef } from "react";

export default function GradientCursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = e.clientX + "px";
          ringRef.current.style.top  = e.clientY + "px";
        }
      }, 80);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className="fixed w-5 h-5 rounded-full pointer-events-none z-[9999]
          -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          background: "linear-gradient(135deg,#a78bfa,#06b6d4,#f472b6)",
          boxShadow: "0 0 14px 4px rgba(167,139,250,0.6)",
          transition: "left 0.05s, top 0.05s",
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998]
          -translate-x-1/2 -translate-y-1/2 border border-violet-400/40"
        style={{
          transition: "left 0.18s ease, top 0.18s ease",
          background:
            "radial-gradient(circle,rgba(167,139,250,0.08),transparent 70%)",
        }}
      />
    </>
  );
}
