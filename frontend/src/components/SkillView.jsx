'use client'
import { useEffect, Suspense, lazy } from "react";
const SkillCard = lazy(() => import("@/components/SkillCard"));
import { upSkill } from "@/Store/Zustand";
import SkillSkeleton from "../loaders/SkillSkeleton";
export default function SkillView() {
  const {getloading, onGet, allSkill} = upSkill();
  useEffect(() => {onGet()}, [])
  const stack = [
    "frontend",
    "backend",
    "state",
    "route",
    "ui/ux",
    "graphics",
    "file",
    "package",
    "token",
    "ai",
    "websocket",
    "version control",
    "virtual",
    "database",
    "deploy",
    "environment",
    "media",
    "cms",
    "api",
  ];
  const data = allSkill;
  return (
    <div className="py-5 lg:py-10 bg-[#f7f7f7] ">
      {/* frontend  */}
      {stack.map((item, index) => (
        <div key={index}>
          <h1 className="py-2 lg:py-5 bg-light text-2xl lg:text-3xl font-bold capitalize">
            {item}
          </h1>
          <div className="w-[95%] lg:w-[85%] mx-auto">
            <div className="py-5 lg:py-10 block md:flex flex-wrap gap-5 w-fit md:w-full mx-auto items-center justify-start">
            { getloading ? Array.from({length: 3}).map((_, index) => <SkillSkeleton key={index}/>)  : Array.isArray(data) && data
              .filter((a) => a.state === item)
              .map((skill, index) => (
                <Suspense key={index} fallback={<SkillSkeleton/>}>
                  <SkillCard  skill={skill} />
                </Suspense>
              ))}
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};


