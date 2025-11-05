'use client'
import {RecentWorkHandles} from "../Store/RecentWorkZus"  
import { useEffect } from "react";
import RworkCard from '@/components/RworkCard'

const RecentWorks = () => {
  const {allRecentWork, getloading, onGet} = RecentWorkHandles()
  useEffect(() => {onGet()}, [])
  console.log(allRecentWork)
  return (
    <div className="py-3 lg:py-5 w-[90%] mx-auto">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-3">
        Recent Works{" "}
      </h1>
      <p className="w-[80%] lg:w-[50%] xl:w-[40%] mx-auto text-center">
        I always try to provide best service to my clients and mantain a good
        relationship with my clients
      </p>
      <div className="flex justify-center py-5 lg:py-10">
        <div className="flex flex-wrap items-center justify-start">
        {/* card */}
        {getloading
          ? "loading "
          : allRecentWork.map((work, index) => (
            <RworkCard data={work} key={index}/>
          ))}
      </div>
      </div>
    </div>
  );
};

export default RecentWorks;
