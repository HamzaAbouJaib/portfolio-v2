import React from "react";
import SectionHeader from "../components/SectionHeader";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-8">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="Contact" title="Say hi" />

        <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
          <p>
            I am always happy to connect! The best way to reach me is by email,
            and I can share more about my professional experience and projects.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <a
              href="mailto:aboujaibhamza@gmail.com"
              className="rounded-full bg-accent px-4 py-1.5 font-medium text-slate-50 hover:bg-primary transition-all duration-500 ease-in-out"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/hamzaaboujaib"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-1.5 font-medium text-slate-800 hover:border-primary dark:border-slate-700 hover:dark:bg-slate-700 hover:bg-slate-100 dark:text-slate-200 transition-all duration-500 ease-in-out"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/HamzaAbouJaib"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-1.5 font-medium text-slate-800 hover:border-primary dark:border-slate-700 hover:dark:bg-slate-700 hover:bg-slate-100 dark:text-slate-200 transition-all duration-500 ease-in-out"
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
