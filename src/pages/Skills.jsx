// pages/Skills.jsx
import SectionHeader from "../components/ui/SectionHeader";
import SkillMarquee from "../components/SkillMarquee";
import SkillBar from "../components/SkillBar";
import { useInView } from "../hooks";
import { SKILL_CARDS } from "../data/portfolio";

export default function Skills() {
  const [gridRef, gridVisible] = useInView(0.1);

  return (
    <section className="min-h-screen px-6 py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="My Toolkit"
          title={
            <>
              Skills &amp;{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#a78bfa,#f472b6)" }}
              >
                Technologies
              </span>
            </>
          }
          sub="Tools I use to turn ideas into reality."
        />

        {/* Auto-scrolling marquee */}
        <SkillMarquee />

        {/* Skill grid with knowledge bars */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SKILL_CARDS.map((skill, i) => (
            <div
              key={skill.name}
              className="transition-all duration-700"
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? "translateY(0)" : "translateY(32px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <SkillBar {...skill} visible={gridVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
