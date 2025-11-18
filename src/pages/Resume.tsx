import React from "react";
import { useNavigate } from "react-router-dom";

const ResumePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen pb-10 pt-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
            Resume
          </h1>
        </div>

        <div className="mb-4 flex items-center justify-between gap-4 text-sm">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Embedded preview below. Use the button to download the PDF.
          </p>
          <a
            href="/resume.pdf"
            download
            className="rounded-md bg-accent px-4 py-2 text-xs font-medium text-slate-950 hover:bg-teal-300"
          >
            Download PDF
          </a>
        </div>

        <div className="h-[80vh] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/40">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="h-full w-full"
          >
            <p className="p-4 text-sm text-slate-700 dark:text-slate-300">
              Your browser doesn't support embedded PDFs.{" "}
              <a href="/resume.pdf" className="text-accent underline">
                Click here to download the file.
              </a>
            </p>
          </object>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
