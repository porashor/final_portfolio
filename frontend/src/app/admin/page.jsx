'use client'
import { useState } from "react";
import SkillForm from "../../Admin/SkillForm";
import SkillReview from "../../Admin/SkillReview";
import ProjectForm from "../../Admin/ProjectForm";
import ProjectReview from "../../Admin/ProjectReview";
import TestimonialForm from "../../Admin/TestimonialForm";
import TestimonialReview from "../../Admin/TestimonialReview";
import BlogForm from "../../Admin/BlogForm";
import BlogReview from "../../Admin/BlogReview";
import RecentWorks from "../../Admin/RecentWorkForm";
import PlanForm from "../../Admin/PlanForm";
import PlanReview from "../../Admin/PlanReview";
import RecentReviews from "../../Admin/RecentReviews";
const page = () => {
  const [ctrl, setCtrl] = useState('skill')
  const arr = ["skill", "project", "testimonial", "blog", "recentworks", "plan"];
  return (
    <div className="bg-white">
      <select className=" w-full bg-dark h-[50px] flex items-center justify-start gap-2" name="select" id="select" onChange={(e)=>setCtrl(e.target.value)}>
        {arr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className={`${ctrl === "skill" ? "block" : "hidden"}`}>
        <SkillForm />
        <SkillReview />
      </div>
      <div className={`${ctrl === "project" ? "block" : "hidden"}`}>
        <ProjectForm />
        <ProjectReview />
      </div>
      <div className={`${ctrl === "testimonial" ? "block" : "hidden"}`}>
        <TestimonialForm />
        <TestimonialReview />
      </div>
      <div className={`${ctrl === "blog" ? "block" : "hidden"}`}>
        <BlogForm />
        <BlogReview />
      </div>
      <div className={`${ctrl === "recentworks" ? "block" : "hidden"}`}>
        <RecentWorks />
        <RecentReviews/>
      </div>
      <div className={`${ctrl === "plan" ? "block" : "hidden"}`}>
        <PlanForm />
        <PlanReview />
      </div>
    </div>
  );
};

export default page;
