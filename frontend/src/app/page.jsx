import React from 'react'
import Hero from "@/components/Hero"
import Foother from "@/components/Foother"
import Testimonial from "@/components/Testimonial"
import RecentWorks from "@/components/RecentWorks"
import BuildOwn from "@/components/BuildOwn"
import Journy from "@/components/Journy"
import Journyflow from "@/components/Journyflow"
const Home = () => {
  return (
    <div className='w-full '>
      <Hero/>
      <BuildOwn/>
      <Testimonial/>
      <RecentWorks/>
      <Journy/>
      <Journyflow/>
      <Foother/>
    </div>
  )
}

export default Home
