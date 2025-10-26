import React from 'react'
import Image from "next/image";
import img from "@/image/Parashar_about.png"
const AboutMe = () => {
  return (
    <div className='w-[90%] mx-auto block lg:flex items-center flex-between gap-4 py-5 lg:my-10'>
      {/* image  */}
      <div className='w-full lg:w-1/2 py-5 lg:py-10 flex-center'>
        <Image
        src={img}
        alt="My profile picture"
        className="object-cover w-[80%] h-full"
      />
      </div>
      {/* details */}
      <div className='w-full lg:w-1/2 py-5 lg:py-10 space-y-5'>
        {/* header  */}
        <h1 className='text-2xl md:text-3xl lg:text4xl font-bold logo-light'>About Me!</h1>
        <p>
            I’m a full-stack web developer specializing in the MERN stack — MongoDB, Express.js, React, and Node.js.. With hands-on experience building scalable, responsive, and dynamic web applications, I craft seamless user experiences backed by robust backend logic. My expertise spans RESTful APIs, real-time features with Socket.IO, and modern UI frameworks like Tailwind CSS and Shadcn UI. Whether it's developing dashboards, e-commerce platforms, or portfolio sites, I bring a methodical and persistent approach to problem-solving and performance optimization.
        </p>
        <h2 className='text-xl md:text-2xl lg:text3xl font-semibold logo-light'>Skills</h2>
        <div><span className='font-bold'>Frontend : </span>React, Next.js, Tailwind CSS, Bootstrap</div>
        <div><span className='font-bold'>UI/UX : </span>Figma, Adobe XD</div>
        <div><span className='font-bold'>State: </span>Redux, Redux Toolkit, Zustand, Contaxt API</div>
        <div><span className='font-bold'>Routing: </span>React Router, Next file based Routing</div>
        <div><span className='font-bold'>Backend : </span>Node.js, Express.js</div>
        <div><span className='font-bold'>Realtime: </span>Socket.io</div>
        <div><span className='font-bold'>Database : </span>MongoDB, Mongoose</div>
        <div><span className='font-bold'>Deploy: </span>Vercel, Render, Netlify</div>
        <div><span className='font-bold'>Envirnment: </span>Dotenv</div>
        <div><span className='font-bold'>Token: </span>JWT</div>
        <div><span className='font-bold'>Virtualization : </span>Docker</div>
        <div><span className='font-bold'>Version control : </span>Git and Github</div>
      </div>
    </div>
  )
}

export default AboutMe
