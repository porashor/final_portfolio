'use client'
import React, {useEffect} from "react";
import { FaChevronRight } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaBlog } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaUserTimes } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import Link from 'next/link';
import userHandle from '../Store/UserZust';
import Image from "next/image";
const PopNav = ({ isOpen, setIsOpen }) => {
  const {getUser, user} = userHandle();
    useEffect(() => {
      getUser();
    }, []);
  const navItems = [
      { href: "/", label: "Home", icon: <FaHome /> },
      { href: "/about", label: "About", icon: <FcAbout /> },
      { href: "/skill", label: "Skills", icon: <GiSkills /> },
      { href: "/project", label: "Projects", icon: <GrProjects /> },
      { href: "/blog", label: "Blogs", icon: <FaBlog /> },
      { href: "/plan", label: "Plans", icon: <HiMiniShoppingCart /> },
      { href: "/contact", label: "Contact", icon: <MdContactPhone /> },
      { href: "/user", label: "User", icon: <FaUserTimes /> },
      { href: "/deshboard", label: "Deshboard", icon: <FaUserCheck /> },
    ];
    const navAll = user && user._id ? navItems.filter(item => item.href !== '/user'): navItems.filter(item => item.href !== '/deshboard');
  return (
    <div
      className={`${
        isOpen ? "translate-0 block" : "translate-y-[-1000px] "
      } absolute right-[30px] top-[100px] min-h-[200px] transition-all ease-in-out duration-500 w-[250px] bg-[#000000ce] rounded-2xl py-5 px-2 space-y-4`}
    >
      {
        navAll.map((item, index)=>(
          <Link key={index} href={item.href} onClick={()=>setIsOpen(false)} className="flex items-center gap-2 focus:bg-slate-700 py-2 px-4 rounded-2xl">
            {item.icon} {item.label}
          </Link>
        ))
      }
    </div>
  );
};

export default PopNav;
