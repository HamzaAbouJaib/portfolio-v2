import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

type Theme = "light" | "dark";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState<Theme>("dark");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  };

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200 bg-slate-50/80 backdrop-blur dark:border-slate-900 dark:bg-slate-950/80 px-2 sm:px-32">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <button
          onClick={() => navigate("/")}
          className="font-mono text-sm font-semibold tracking-tight text-accent"
        >
          Hamza
        </button>

        <div className="flex items-center gap-6 text-xs font-medium">
          <NavLink
            to="/"
            className={`relative pb-0.5 ${
              isActiveRoute("/")
                ? "text-slate-900 dark:text-slate-50"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
            }`}
          >
            Home
            {isActiveRoute("/") && (
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent" />
            )}
          </NavLink>
          <NavLink
            to="/projects"
            className={`relative pb-0.5 ${
              isActiveRoute("/projects")
                ? "text-slate-900 dark:text-slate-50"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
            }`}
          >
            Projects
            {isActiveRoute("/projects") && (
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent" />
            )}
          </NavLink>
          <NavLink
            to="/resume"
            className={`relative pb-0.5 ${
              isActiveRoute("/resume")
                ? "text-slate-900 dark:text-slate-50"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
            }`}
          >
            Resume
            {isActiveRoute("/resume") && (
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent" />
            )}
          </NavLink>

          <button
            onClick={toggleTheme}
            className="flex h-7 w-12 items-center rounded-full border border-slate-300 bg-slate-100 px-1 text-[0.6rem] text-slate-600 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[0.6rem] text-slate-50 transition-transform dark:bg-slate-50 dark:text-slate-900 ${
                theme === "dark" ? "translate-x-5" : ""
              }`}
            >
              {theme === "dark" ? "☾" : "☼"}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
