import React from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const thumbnail = project.images?.[0];

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:-translate-y-1 transition-transform"
    >
      {thumbnail && (
        <img
          src={thumbnail}
          className="w-full h-40 object-cover rounded-t-xl"
        />
      )}

      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          {project.name}
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[0.65rem] text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
