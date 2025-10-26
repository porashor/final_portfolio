'use client'
import React, {useState} from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { PiArrowArcRight } from 'react-icons/pi'
import { FaHome } from "react-icons/fa";
import logo from '@/image/Parashar_logo.png'
import Image from 'next/image';
import { FaDownload } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaBlog } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Link from 'next/link';



const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [auto, setAuto] = useState(false);
  const handle = () =>{
    setTimeout(() => {
      setAuto(false)
    }, 3000)
  }
  return (
    <div className={`${isOpen ? 'w-[50px] lg:w-[60px]' : ' w-[200px] lg:w-[280px]'} transition-all ease-in-out duration-600  sticky top-0 left-0 h-screen bg-light flex flex-col items-center`}>
      <Link href="/" className='flex items-center gap-1 w-full py-5'> <span className='flex-center rounded w-[50px] lg:w-[60px] aspect-square'>
        <Image src={logo} alt="My profile picture" className="object-cover w-full h-full"/>
        </span> <span className={`transition-all ease-in-out duration-1200 overflow-hidden ${isOpen ? 'opacity-0 scale-0 w-0' : 'opacity-100 scale-100 w-auto'} text-xs lg:text-lg logo-light font-semibold `}>Parashar Das</span></Link>

      {/* nav areas here  */}
      <nav className='py-2 px-2 md:px-3 text-xl w-full z-10'>
        <ul>
          <li className='w-full flex flex-col gap-2 lg:gap-3'>
            <Link href="/" className='flex items-center gap-2'> <span className='flex-center bg-dark p-1 md:p-2 rounded'><FaHome/></span> <span className={`transition-all ease-in-out duration-1200 overflow-hidden ${isOpen ? 'opacity-0 w-0 scale-0' : 'opacity-100 scale-100 w-auto'} `}>Home</span></Link>
            <Link href="/about" className='flex items-center gap-2'> <span className='flex-center bg-dark p-1 md:p-2 rounded'><FcAbout/></span> <span className={`transition-all ease-in-out duration-1200 overflow-hidden ${isOpen ? 'opacity-0 w-0 scale-0' : 'opacity-100 scale-100 w-auto'} `}>About</span></Link>
            <Link href="/skill" className='flex items-center gap-2'> <span className='flex-center bg-dark p-1 md:p-2 rounded'><GiSkills/></span> <span className={`transition-all ease-in-out duration-1200 overflow-hidden ${isOpen ? 'opacity-0 w-0 scale-0' : 'opacity-100 scale-100 w-auto'} `}>Skills</span></Link>
            <Link href="/project" className='flex items-center gap-2'> <span className='flex-center bg-dark p-1 md:p-2 rounded'><GrProjects/></span> <span className={`transition-all ease-in-out duration-1200 overflow-hidden ${isOpen ? 'opacity-0 w-0 scale-0' : 'opacity-100 scale-100 w-auto'} `}>Projects</span></Link>
            <Link href="/blog" className='flex items-center gap-2'> <span className='flex-center bg-dark p-1 md:p-2 rounded'><FaBlog/></span> <span className={`transition-all ease-in-out duration-1200 overflow-hidden ${isOpen ? 'opacity-0 w-0 scale-0' : 'opacity-100 scale-100 w-auto'} `}>Blogs</span></Link>
            <Link href="/plan" className='flex items-center gap-2'> <span className='flex-center bg-dark p-1 md:p-2 rounded'><HiMiniShoppingCart/></span> <span className={`transition-all ease-in-out duration-1200 overflow-hidden ${isOpen ? 'opacity-0 w-0 scale-0' : 'opacity-100 scale-100 w-auto'} `}>Plans</span></Link>
            <Link href="/contact" className='flex items-center gap-2'> <span className='flex-center bg-dark p-1 md:p-2 rounded'><MdContactPhone/></span> <span className={`transition-all ease-in-out duration-1200 overflow-hidden ${isOpen ? 'opacity-0 w-0 scale-0' : 'opacity-100 scale-100 w-auto'} `}>Contact</span></Link>
          </li>
        </ul>
      </nav>


      {/* trac btn  */}
      <button onMouseEnter={()=>setAuto(true)} onMouseOut={handle}  className={`${auto? `${!isOpen ? 'right-[-25px]' : 'right-[-25px]'}` : `${!isOpen ? "right-[-8px]" : "right-[-8px]"}`} transition-all ease-in-out duration-600 absolute top-[50%]  py-5 px-2 bg-light z-0`}>
        <FaChevronRight className={`text-xl ${isOpen ? '' :'rotate-180' }`} onClick={()=>setIsOpen((p)=>!p)}/>
      </button>
      {/* download resume btn  */}
      <a href='/parashardas.pdf' download className='flex items-center gap-1 w-full py-5 px-3 absolute bottom-0 right-0 left-0'> <span className='flex-center bg-dark p-1 md:p-2 rounded'>
        <FaDownload/>
        </span> <span className={` ${isOpen ? 'hidden' : 'block'} text-xl`}>Resume</span></a>
    </div>
  )
}

export default Nav
