import React from 'react'
import Image from 'next/image'
import img from "@/image/blog_banner.jpg"
const BlogCard = () => {
  return (
    <div className='w-full bg-white min-h-[150px] rounded logo-light grid md:grid-cols-[1fr_3fr] gap-5 lowercase'>
        <div className='w-[200px] aspect-square object-cover hidden md:block relative'>
            <Image src={img.src} fill alt='logo' className='object-cover'/>
        </div>
        <div className='flex flex-col justify-center gap-1'>
            <h1>frontend fix issue</h1>
            <h1 className='text-sm font-thin'><span className='font-bold'>Author:</span> Parashar das</h1>
            <p className='text-sm font-thin line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum, provident ea nam hic neque error nisi ullam earum suscipit ipsa asperiores rem magni perferendis vero atque! Sit corrupti ut porro consectetur natus voluptate commodi ipsa cumque dolor maiores nisi, fugit architecto inventore enim debitis, quibusdam voluptatibus autem. Quod, error.</p>
            <div className='flex items-center justify-between'>
                <button className='muted-rose logo-dark text-xs py-1 px-2 font-thin'>read more</button>
                <p className='font-thin text-xs'>10min ago</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
