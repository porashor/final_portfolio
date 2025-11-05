import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
const RworkCard = ({data}) => {
    const arr = Array.from({ length: data.rate }, (_, i) => i)
  return (
    <div className='group relative w-[350px] md:w-[450px] aspect-square overflow-hidden'>
      <div className='relative w-full h-full'>
        <Image src={data.image} fill alt="My profile picture" className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      <div className='absolute w-full h-full top-0 right-0 bg bg-[#000000e7]    opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out logo-dark flex flex-col items-center justify-center gap-2 p-2'>
        <div className='flex items-center justify-center gap-1'>
            {arr.map((a,i)=><IoIosStar key={i} className="text-yellow-400" />)}
        </div>
        <h1 className='text-2xl font-bold text-center'>{data.name}</h1>
        <h1 className='text-xl font-bold text-center'>{data.stack}</h1>
        <p className='text-sm font-thin text-center'>{data.description}</p>
        <a href={`recentworks/${data._id}`}>see more</a>
      </div>
    </div>
  )
}

export default RworkCard
