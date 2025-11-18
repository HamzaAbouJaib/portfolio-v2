import React, { useState } from "react";
import { projects } from "../data/projects";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const ProjectsPage: React.FC = () => {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader
          eyebrow="Projects"
          title="All projects"
          description="A look at everything I've built recently."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
};

export default ProjectsPage;
