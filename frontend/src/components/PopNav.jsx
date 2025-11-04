import React from "react";
import { FaChevronRight } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaBlog } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Link from 'next/link';

const PopNav = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-0 block" : "translate-y-[-1000px] "
      } absolute right-[30px] top-[100px] min-h-[200px] transition-all ease-in-out duration-500 w-[250px] bg-[#000000ce] rounded-2xl py-5 px-2 space-y-4`}
    >
      <Link href="/" onClick={()=>setIsOpen(false)} className="flex items-center gap-2 focus:bg-slate-700 py-2 px-4 rounded-2xl">
        {" "}
        <span className="flex-center bg-dark p-1 md:p-2 rounded">
          <FaHome />
        </span>Home
      </Link>
      <Link href="/about" onClick={()=>setIsOpen(false)} className="flex items-center gap-2 focus:bg-slate-700 py-2 px-4 rounded-2xl">
        {" "}
        <span className="flex-center bg-dark p-1 md:p-2 rounded">
          <FcAbout />
        </span>About
      </Link>
      <Link href="/skill" onClick={()=>setIsOpen(false)} className="flex items-center gap-2 focus:bg-slate-700 py-2 px-4 rounded-2xl">
        {" "}
        <span className="flex-center bg-dark p-1 md:p-2 rounded">
          <GiSkills />
        </span>Skills
      </Link>
      <Link href="/project"  onClick={()=>setIsOpen(false)} className="flex items-center gap-2 focus:bg-slate-700 py-2 px-4 rounded-2xl">
        {" "}
        <span className="flex-center bg-dark p-1 md:p-2 rounded">
          <GrProjects />
        </span>Projects
      </Link>
      <Link href="/blog" onClick={()=>setIsOpen(false)} className="flex items-center gap-2 focus:bg-slate-700 py-2 px-4 rounded-2xl">
        {" "}
        <span className="flex-center bg-dark p-1 md:p-2 rounded">
          <FaBlog />
        </span>Blogs
      </Link>
      <Link href="/plan" onClick={()=>setIsOpen(false)} className="flex items-center gap-2 focus:bg-slate-700 py-2 px-4 rounded-2xl">
        {" "}
        <span className="flex-center bg-dark p-1 md:p-2 rounded">
          <HiMiniShoppingCart />
        </span>Plan
      </Link>
      <Link href="/contact" onClick={()=>setIsOpen(false)} className="flex items-center gap-2 focus:bg-slate-700 py-2 px-4 rounded-2xl">
        {" "}
        <span className="flex-center bg-dark p-1 md:p-2 rounded">
          <MdContactPhone />
        </span>Contact
      </Link>
    </div>
  );
};

export default PopNav;
