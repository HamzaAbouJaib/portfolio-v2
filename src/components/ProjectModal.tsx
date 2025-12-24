import React from "react";
import Carousel from "./Carousel";

interface ProjectModalProps {
  project: any | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full p-6 relative shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-primary text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
          {project.name}
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          {project.description}
        </p>

        {project.images && project.images.length > 0 && (
          <Carousel key={project.name} images={project.images} />
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-2">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-4 py-1.5 font-medium text-slate-50 hover:bg-primary transition-all duration-500 ease-in-out"
            >
              GitHub
            </a>
          )}
          {project.demo_link && (
            <a
              href={project.demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-4 py-1.5 font-medium text-slate-800 hover:border-primary dark:border-slate-700 hover:dark:bg-slate-700 hover:bg-slate-100 dark:text-slate-200 transition-all duration-500 ease-in-out"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
