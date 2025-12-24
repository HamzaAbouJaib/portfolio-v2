import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { projects } from "../data/projects";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const FeaturedProjects: React.FC = () => {
  const [selected, setSelected] = useState<any | null>(null);
  const featured = projects.slice(0, 2);

  return (
    <section id="projects-section" className="py-16">
      <div className="mx-auto max-w-3xl px-4">
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

        <Link
          to="/projects"
          className="flex items-center gap-1 mt-4 text-xs border-b-[1px] border-transparent text-accent hover:border-accent w-fit transition-all duration-300 ease-in-out"
        >
          View more <MdArrowRightAlt className="text-lg mt-1" />
        </Link>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
};

export default FeaturedProjects;
