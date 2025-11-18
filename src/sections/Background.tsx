import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/experience";
import { education } from "../data/education";

type Tab = "experience" | "education";

const Background: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  return (
    <section className="py-8">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="Background" title="Experience & education" />

        <div className="mb-6 flex justify-center gap-6 text-xs font-medium">
          {(["experience", "education"] as Tab[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-1 uppercase tracking-[0.2em] ${
                  isActive
                    ? "text-slate-900 dark:text-slate-50"
                    : "text-slate-500 dark:text-slate-500"
                }`}
              >
                {tab === "experience" ? "Experience" : "Education"}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full transition-all ${
                    isActive
                      ? "bg-accent"
                      : "bg-slate-200 dark:bg-slate-800 opacity-60"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="relative">
          <div key={activeTab} className="animate-fade-in space-y-5">
            <ul className="space-y-5">
              {activeTab === "experience"
                ? experience.map((item) => (
                    <TimelineItem
                      key={`${item.title}-${item.org}`}
                      title={item.title}
                      org={item.org}
                      timeframe={item.timeframe}
                      location={item.location}
                      bullets={item.bullets}
                    />
                  ))
                : education.map((item) => (
                    <TimelineItem
                      key={`${item.title}-${item.org}`}
                      title={item.title}
                      org={item.org}
                      timeframe={item.timeframe}
                      location={item.location}
                      bullets={item.bullets}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
