import React, { useState } from "react";
import { projects } from "../data/projects";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const FeaturedProjects: React.FC = () => {
  const [selected, setSelected] = useState<any | null>(null);
  const featured = projects.slice(0, 2);

  return (
    <section id="projects-section" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader eyebrow="Projects" title="Featured work" />

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        <button
          className="mt-4 text-xs text-accent hover:underline"
          onClick={() => setSelected(projects[2])}
        >
          View more →
        </button>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
};

export default FeaturedProjects;
