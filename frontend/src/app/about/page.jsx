import React from 'react'
import AboutBanner from '@/components/AboutBanner'
import AboutMe from '@/components/AboutMe';
import Foother from '@/components/Foother';

export const metadata = {
  title: 'About - Parashar Das',
  description: 'Learn more about my mission.',
};

const About = () => {
  return (
    <div className='w-full'>
      <AboutBanner/>
      <AboutMe/>
    </div>
  )
}

export default About
