import React from 'react'
import img from '@/image/Parashar_about.png'
const ProjectCard = () => {
  return (
    <div className="w-[350px] min-h-[400px] bg-white rounded overflow-none flex flex-col">
      <img
        src={img.src}
        alt=""
        className="w-full aspect-square object-cover"
      />
      <div className="text-center flex items-center justify-center gap-1 py-3 text-2xl font-bold">
        Foodie <span className='text-sm font-medium'>- ecommerce site</span>
      </div>
      <p className="text-justify px-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro dolorem totam ullam quidem praesentium quos odio eius dicta repellat rerum nam unde ipsa reprehenderit, et iste explicabo suscipit neque velit cumque, sunt odit. Officiis iste suscipit dolor dignissimos facilis, temporibus eum ratione sequi ex deleniti magnam optio fugit itaque!
      </p>
      <p className="font-semibold mx-1">Role: full stack developer</p>
      <button className='muted-rose py-2 logo-dark my-2 mx-1 hover:scale-105 transition-all ease-in-out duration-500 rounded'>see more</button>
    </div>
  )
}

export default ProjectCard
