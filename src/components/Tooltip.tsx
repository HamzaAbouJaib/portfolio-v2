import React from "react";

interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
  return (
    <div className="relative group inline-block">
      {children}

      <span
        className="
        pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 
        whitespace-nowrap rounded-md bg-slate-900 text-white text-xs px-2 py-1 
        opacity-0 group-hover:opacity-100 transition-opacity 
        dark:bg-slate-800 dark:text-slate-200
      "
      >
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
