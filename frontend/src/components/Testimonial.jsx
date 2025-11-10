'use client'
import { useEffect } from "react";
import {TestimonialHandle} from "@/Store/TestimonialZus"
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const {allTestimonial, getloading, onGet} = TestimonialHandle()
  useEffect(() => {onGet()}, [])
  return (
    <div className='py-3 lg:py-5 w-[90%] mx-auto'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold py-3'>What client says </h1>
      <p className='w-[80%] lg:w-[50%] xl:w-[40%] mx-auto text-center'>I always try to provide best service to my clients and mantain a good relationship with my clients</p>
      <div className='py-5 lg:py-10 block md:flex flex-wrap items-center justify-start gap-5 lg:gap-10 w-fit md:w-[90%] mx-auto'>
        {/* card */}
        {getloading ? "loading " : allTestimonial.map((testimonial, index) => (<TestimonialCard key={index} testimonials={testimonial}/>))}
      </div>
    </div>
  )
}

export default Testimonial
