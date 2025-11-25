'use client'
import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
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
import { usePathname } from "next/navigation";


const Nav = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const navItems = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About", icon: <FcAbout /> },
    { href: "/skill", label: "Skills", icon: <GiSkills /> },
    { href: "/project", label: "Projects", icon: <GrProjects /> },
    { href: "/blog", label: "Blogs", icon: <FaBlog /> },
    { href: "/plan", label: "Plans", icon: <HiMiniShoppingCart /> },
    { href: "/contact", label: "Contact", icon: <MdContactPhone /> },
  ];
  return (
    <div
      onMouseEnter={() => setIsOpen(false)}
      onMouseLeave={() => setIsOpen(true)}
      className={`${isOpen ? "w-[50px] lg:w-[65px]" : " w-[200px] lg:w-[280px]"
        } hidden transition-all ease-in-out duration-600  sticky top-0 left-0 h-screen bg-light md:flex flex-col items-center`}
    >
      <Link href="/" className="flex items-center gap-1 w-fit py-5 justify-between">
        <span className="relative flex items-center justify-center  rounded w-[50px] lg:w-[60px] aspect-square scale-100">
          <Image
            src={logo}
            alt="My profile picture"
            className="object-cover"
            fill
          />
        </span>
        <span
          className={`transition-all ease-in-out duration-2000 ${isOpen ? "opacity-0 w-0 scale-0" : "opacity-100 w-fit scale-100 "
            } text-xs lg:text-lg logo-light font-semibold `}
        >
          Parashar D.
        </span>
      </Link>

      {/* nav areas here  */}
      <nav className="py-2 px-2 md:px-3 text-xl w-full z-10">
        <ul>
          <li className="w-full flex flex-col gap-2 lg:gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" flex items-center gap-2 p-1 group rounded-xl hover:bg-slate-400"
              >
                <span className={`flex-center bg-dark p-1 md:p-2 rounded ${path === item.href ? 'bg-[#715A5A]' : ''}`}>
                  {item.icon}
                </span>
                <span
                  className={`group-hover:text-white transition-all ease-in-out duration-900 overflow-hidden ${isOpen
                      ? "opacity-0 w-0 scale-0"
                      : "opacity-100 scale-100 w-auto"
                    }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </li>
        </ul>
      </nav>
      <a
        href="/parashardas.pdf"
        download
        className="flex items-center gap-1 w-full py-5 px-3 absolute bottom-0 right-0 left-0"
      >
        {" "}
        <span className="flex-center bg-dark p-1 md:p-2 rounded">
          <FaDownload />
        </span>{" "}
        <span className={` ${isOpen ? "hidden" : "block"} text-xl`}>
          Resume
        </span>
      </a>
    </div>
  );
}

export default Nav


