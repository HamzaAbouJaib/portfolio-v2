import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pb-16 pt-6 sm:pt-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="space-y-4 max-w-xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            hi, <span className="text-accent">Hamza</span> here. 👋
          </h1>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Software engineering student from Canada 🇨🇦
          </p>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I work with cloud infrastructure and enjoy building simple, modern
            frontend experiences.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:you@example.com"
              className="text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>

            <button
              onClick={() => navigate("/resume")}
              aria-label="Resume"
              className="rounded-full bg-accent px-4 py-1.5 font-medium text-slate-950 hover:bg-teal-300 text-xs"
            >
              Resume
            </button>
          </div>

          <p className="text-[0.75rem] text-slate-500 dark:text-slate-500 pt-1">
            Currently learning: AWS and Terraform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
