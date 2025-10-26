import React from 'react'
import logo from "@/image/Parashar_logo.png";
import Image from 'next/image';
const notfound = () => {
  return (
    <div className='flex-col-center w-full h-screen'>
      <div className='w-[40%] '>
        <Image src={logo} alt="My profile picture" className="object-cover w-full h-full"/>
      </div>
      parashar has no page like this
    </div>
  )
}

export default notfound
