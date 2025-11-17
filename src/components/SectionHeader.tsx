import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <div className="mb-5">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
