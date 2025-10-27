
import React from 'react'
import Image from "next/image";
import logo from "@/image/react.png"
const SkillCard = () => {
  return (
    <div className='w-[400px] min-h-[150px] bg-white rounded overflow-none grid grid-cols-[1fr_2fr] gap-2 px-2 border border-[#dadada]'>
      <div className='w-full flex items-center justify-center'>
        <Image src={logo.src} width={120} height={120} className='' alt='logo'/>
      </div>
      <div className='flex flex-col gap-1 justify-center'>
        <h1 className='font-bold'>React</h1>
        <div>
            80%
            <div className='bg-dark w-full h-[5px] rounded-4xl'>
                <div className='h-[5px] w-[80%] muted-rose rounded-4xl trunsition-all ease-in-out duration-500'></div>
            </div>
        </div>
        <div className='line-clamp-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque, recusandae explicabo assumenda obcaecati eius pariatur accusamus. Nihil rem animi corporis eligendi labore, nobis distinctio.
        </div>
      </div>
    </div>
  )
}

export default SkillCard
