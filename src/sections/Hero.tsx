import React from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from "../components/Tooltip";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pb-16 pt-6 sm:pt-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="space-y-4">
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
            <Tooltip label="GitHub">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="text-xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </Tooltip>

            <Tooltip label="LinkedIn">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="text-xl hover:text-accent"
              >
                <FaLinkedin />
              </a>
            </Tooltip>

            <Tooltip label="Email">
              <a
                href="mailto:youremail@gmail.com"
                className="text-xl hover:text-accent"
              >
                <FaEnvelope />
              </a>
            </Tooltip>

            <Tooltip label="Credly">
              <a
                href="https://www.credly.com/users/your-credly-profile"
                target="_blank"
                className="text-xl hover:text-accent"
              >
                <FaAward />
              </a>
            </Tooltip>

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
