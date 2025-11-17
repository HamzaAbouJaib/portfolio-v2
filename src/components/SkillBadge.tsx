import React from "react";

interface SkillBadgeProps {
  label: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ label }) => {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
      {label}
    </span>
  );
};

export default SkillBadge;
