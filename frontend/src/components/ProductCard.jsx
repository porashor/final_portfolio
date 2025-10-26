import React from 'react'
import Image from 'next/image'
import img from "@/image/blog_banner.jpg"
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
const ProductCard = () => {
  return (
    <div className='w-[380px] bg-white min-h-[150px] rounded logo-light flex flex-col gap-2 font-thin lowercase '>
      <div className='relative w-full aspect-[4/3]'>
        <Image fill alt='img' src={img.src}/>
      </div>
      <div className='px-4 flex flex-col gap-2 py-2'>
        <div className='flex gap-1 items-center justify-between font-bold uppercase tracking-[-1px]'>
        <p className='w-fit'>Figma/XD/PSD to Html</p>
        <p className='flex items-center'>from 1000<FaBangladeshiTakaSign/></p>
      </div>
      <p className='line-clamp-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, laudantium? Reprehenderit, voluptates? Suscipit, libero maiores reprehenderit optio dolorem ullam corporis explicabo hic molestias provident repellat consectetur delectus unde vero, eius commodi quas dolore vel est ut et! Odio in dolorum voluptas deleniti, labore quidem voluptatem aliquid ratione quibusdam illo tempore?
      </p>
      <div className='flex items-center gap-2'>
        <IoCheckmarkDoneOutline/><p>Design Customisation</p>
      </div>
      <div className='flex items-center gap-2'>
        <IoCheckmarkDoneOutline/><p>Contant Upload</p>
      </div>
      <div className='flex items-center gap-2'>
        <IoCheckmarkDoneOutline/><p>Responsive Design</p>
      </div>
      <div className='flex items-center gap-2'>
        <IoCheckmarkDoneOutline/><p>Source code</p>
      </div>
      <div className='flex items-center gap-2'>
        <IoCheckmarkDoneOutline/><p>Detailed code comment</p>
      </div>
      <div className='flex items-center gap-2'>
        <IoCheckmarkDoneOutline/><p>unlimited revisions</p>
      </div>
      <button className='muted-rose logo-dark text-xl py-1 px-2 '>get started</button>
      </div>
    </div>
  )
}

export default ProductCard
