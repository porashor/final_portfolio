import React from 'react'
import Hero from "@/components/Hero"
import Foother from "@/components/Foother"
import Testimonial from "@/components/Testimonial"

const Home = () => {
  return (
    <div className='w-full '>
      <Hero/>
      <Testimonial/>
      <Foother/>
    </div>
  )
}

export default Home
