import React from "react";

const Resume: React.FC = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-50 pt-20 pb-10">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-2xl font-semibold mb-4">Resume</h1>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block mb-4 rounded-md bg-accent px-4 py-2 text-slate-900 font-medium hover:bg-teal-300"
        >
          Download PDF
        </a>

        {/* Embedded PDF */}
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full h-[85vh] border border-slate-800 rounded-lg"
        >
          <p className="text-slate-300 text-sm mt-4">
            Your browser doesn’t support embedded PDFs.
            <a href="/resume.pdf" className="text-accent underline pl-2">
              Click here to download the file.
            </a>
          </p>
        </object>
      </div>
    </section>
  );
};

export default Resume;
