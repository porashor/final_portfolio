import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const ProjectcardLoad = () => {
  return (
    <div className="w-[380px] bg-light py-2 min-h-[650px] rounded-2xl">
      <div className="w-[80%] mx-auto">
        <Skeleton className="w-full aspect-square mx-auto my-7 rounded-2xl flex items-center justify-center" />
        <Skeleton className="w-[70%] h-6 my-7 rounded-2xl" />
        <Skeleton className="w-full h-35 my-7 rounded-2xl" />
        <Skeleton className="w-full h-10 my-7 rounded-2xl" />
      </div>
    </div>
  );
};

export default ProjectcardLoad;
