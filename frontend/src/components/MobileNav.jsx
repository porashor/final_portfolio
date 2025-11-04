'use client'
import {useState} from 'react'
import Image from 'next/image'
import { CiMenuFries } from "react-icons/ci";
import PopNav from './PopNav'
import img from "@/image/Parashar_logo.png"
const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='block md:hidden py-4 muted-rose opacity-95 backdrop-blur-3xl sticky top-0 left-0 z-999 border-b border-slate-500 shadow-2xl logo-dark '>
      <div className='relative w-full h-full px-5 flex items-center justify-between gap-5'>
        <Image src={img.src} width={40} height={40} className='w-[50px] h-[50px]' alt='logo'/>
        <div>
            {isOpen ? <div>
                <button className='text-3xl cursor-pointer' onClick={() => setIsOpen(false)}>X</button>
            </div> : <div>
                <CiMenuFries onClick={() => setIsOpen(true)} className='text-3xl cursor-pointer'/>
                </div>}
        </div>
        <PopNav isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  )
}

export default MobileNav
