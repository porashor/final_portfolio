import React from 'react'
import Hero from "@/components/Hero"
import Foother from "@/components/Foother"
import Testimonial from "@/components/Testimonial"
import RecentWorks from "@/components/RecentWorks"

const Home = () => {
  return (
    <div className='w-full '>
      <Hero/>
      <Testimonial/>
      <RecentWorks/>
      <Foother/>
    </div>
  )
}

export default Home
