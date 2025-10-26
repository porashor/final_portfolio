import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Social = () => {
  return (
    <div className='flex gap-2 text-lg md:text-xl '>
        <a href='https://www.facebook.com/parashar.das.3511'>
          <FaFacebookF className='hover:scale-130 duration-600'/>
        </a>
        <a href='https://www.linkedin.com/in/parashar-das-803149374/'>
            <FaLinkedinIn className='hover:scale-130 duration-600' />
        </a>
        <a href='https://github.com/porashor'>
          <FiGithub className='hover:scale-130 duration-600'/>
        </a>
        <a href='https://wa.me/+8801881402678'>
          <BsWhatsapp className='hover:scale-130 duration-600'/>
        </a>
        <a href='https://www.instagram.com/porashor_das'>
          <FiInstagram className='hover:scale-130 duration-600'/>
        </a>
      </div>
  )
}

export default Social
