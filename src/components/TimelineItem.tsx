import React from "react";

interface TimelineItemProps {
  title: string;
  org: string;
  timeframe: string;
  location?: string;
  bullets: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  org,
  timeframe,
  location,
  bullets,
}) => {
  return (
    <li className="relative border-l border-slate-200 pl-4 pb-5 dark:border-slate-800">
      <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary"></span>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            {title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{org}</p>
        </div>
        <p className="text-[0.7rem] text-slate-500 dark:text-slate-400">
          {timeframe}
        </p>
      </div>
      {location && (
        <p className="mt-1 text-[0.7rem] text-slate-500 dark:text-slate-400">
          {location}
        </p>
      )}
      <ul className="pl-3 list-disc mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </li>
  );
};

export default TimelineItem;
