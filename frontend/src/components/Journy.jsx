import React from "react";

const Journy = () => {
  return (
    <section className="py-12 space-y-4 w-[90%] mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">My Journey</h2>
      <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-between gap-5">
        <li className=" bg-slate-300 py-5 px-3 rounded-2xl">
          <h3 className="text-lg font-semibold">Learning Phase</h3>
          <p>Started with HTML, CSS, and JavaScript basics to advance to React.</p>
        </li>
        <li className=" bg-slate-300 py-5 px-3 rounded-2xl">
          <h3 className="text-lg font-semibold">Stack Mastery</h3>
          <p>
            Dived into React, Express, and MongoDB to build full‑stack apps.
          </p>
        </li>
        <li className=" bg-slate-300 py-5 px-3 rounded-2xl">
          <h3 className="text-lg font-semibold">Freelance Projects</h3>
          <p>Created SaaS dashboards, landing pages, and client websites.</p>
        </li>
      </ol>
    </section>
  );
};

export default Journy;
