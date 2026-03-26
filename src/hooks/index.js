import { useState, useEffect, useRef } from "react";

// ── Trigger animation when element scrolls into view ──
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// ── Track scroll position ──
export function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [offset]);
  return scrolled;
}
