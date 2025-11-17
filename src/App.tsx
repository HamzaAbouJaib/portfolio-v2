import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ResumePage from "./pages/Resume";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <Navbar />
      <main className="pt-16 px-2 sm:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-900 dark:bg-slate-950 dark:text-slate-500">
        <div className="mx-auto flex max-w-5xl items-center justify-between py-4 text-[0.7rem] px-2 sm:px-32">
          <span>© {new Date().getFullYear()} Hamza Abou Jaib.</span>
          <span>Built with React, TypeScript & Tailwind.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
