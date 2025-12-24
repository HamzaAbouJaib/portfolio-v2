import React from "react";
import SectionHeader from "../components/SectionHeader";
import SkillBadge from "../components/SkillBadge";
import { skillCategories } from "../data/skills";

const Skills: React.FC = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="Skills" title="Cloud & frontend toolbelt" />

        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {cat.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
