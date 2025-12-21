import React from "react";
import SectionHeader from "../components/SectionHeader";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-8">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="Contact" title="Say hi" />

        <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
          <p>
            Best way to reach me is via email or LinkedIn. I'm happy to share
            more about projects, walk through designs, or discuss how I think
            about reliability and developer experience.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <a
              href="mailto:aboujaih@mcmaster.ca"
              className="rounded-full bg-accent px-4 py-1.5 font-medium text-slate-950 hover:bg-teal-200 transition-all duration-500 ease-in-out"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-1.5 font-medium text-slate-800 hover:border-accent dark:border-slate-700 hover:dark:bg-slate-700 hover:bg-slate-100 dark:text-slate-200 transition-all duration-500 ease-in-out"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-1.5 font-medium text-slate-800 hover:border-accent dark:border-slate-700 hover:dark:bg-slate-700 hover:bg-slate-100 dark:text-slate-200 transition-all duration-500 ease-in-out"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
