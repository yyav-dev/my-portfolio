// pages/Projects.jsx
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="What I've Built"
          title={
            <>
              Featured{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#a78bfa,#06b6d4)" }}
              >
                Projects
              </span>
            </>
          }
          sub="Hand-picked projects showcasing design, engineering, and problem-solving."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
