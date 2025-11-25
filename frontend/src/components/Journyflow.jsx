"use client";
import React from "react";
import { MapPin, Flag } from "lucide-react";

const steps = [
  { step: "STEP 1", text: "Started learning HTML, CSS, and JavaScript." },
  { step: "STEP 2", text: "Built my first React and Express apps." },
  { step: "STEP 3", text: "Created full-stack SaaS projects with MongoDB." },
  { step: "STEP 4", text: "Deployed apps and optimized performance." },
  { step: "STEP 5", text: "Polished portfolio and pitched freelance work." },
];

export default function Journeyflow()  {
  const positions = [
    { top: "10%", left: "5%" },
    { top: "25%", left: "75%" },
    { top: "50%", left: "60%" },
    { top: "70%", left: "30%" },
    { top: "85%", left: "5%" },
  ];

  return (
    <div className="relative w-full h-[1000px] md:h-[1200px] bg-gradient-to-b from-[#f7f7f7] to-white overflow-hidden">
      {/* Highway SVG */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          d="M 100 100 C 300 200, 700 200, 900 100 S 700 500, 500 600 S 300 700, 100 600"
          stroke="#333"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="40 20"
        />
        <path
          d="M 100 100 C 300 200, 700 200, 900 100 S 700 500, 500 600 S 300 700, 100 600"
          stroke="#fff"
          strokeWidth="4"
          fill="none"
          strokeDasharray="10 10"
        />
      </svg>

      {/* Step Cards */}
      {steps.map((item, index) => {
        const pos = positions[index];
        return (
          <div
            key={index}
            className="absolute w-[80%] md:w-[250px] p-4 bg-white rounded-xl shadow-md transition-all"
            style={{ top: pos.top, left: pos.left }}
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-blue-500" size={20} />
              <span className="font-bold text-lg">{item.step}</span>
              <Flag className="ml-auto text-red-500" size={18} />
            </div>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
