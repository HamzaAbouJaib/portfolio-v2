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
        <div className="relative w-full aspect-video rounded-t-xl overflow-hidden">
          <img src={thumbnail} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-4">
        <h3 className="text-sm font-semibold">{project.name}</h3>
        <p className="text-xs mt-1 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
