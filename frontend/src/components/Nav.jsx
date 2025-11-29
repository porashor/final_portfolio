"use client";
import React, { useState, useEffect } from "react";
import logo from "@/image/Parashar_logo.png";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import userHandle from "../Store/UserZust";
import { navItems } from "../Store/Zustand";

const Nav = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const { getUser, user } = userHandle();
  useEffect(() => {
    getUser();
  }, []);
  const navAll =
    user && user._id
      ? navItems.filter((item) => item.href !== "/user")
      : navItems.filter((item) => item.href !== "/deshboard");
  return (
    <div
      onMouseEnter={() => setIsOpen(false)}
      onMouseLeave={() => setIsOpen(true)}
      className={`${
        isOpen ? "w-[50px] lg:w-[65px]" : " w-[200px] lg:w-[280px]"
      } hidden transition-all ease-in-out duration-600  sticky top-0 left-0 h-screen bg-light md:flex flex-col items-center`}
    >
      <Link
        href="/"
        className="flex items-center gap-1 w-fit py-5 justify-between"
      >
        <span className="relative flex items-center justify-center  rounded w-[50px] lg:w-[60px] aspect-square scale-100">
          <Image
            src={logo}
            alt="My profile picture"
            className="object-cover"
            fill
          />
        </span>
        <span
          className={` ${
            isOpen
              ? " scale-0 w-0 opacity-0 "
              : "opacity-100  w-fit scale-100 transition-all ease-in duration-1000"
          } text-xs lg:text-lg logo-light font-semibold `}
        >
          Parashar D.
        </span>
      </Link>

      {/* nav areas here  */}
      <nav className="py-2 px-2 md:px-3 text-xl w-full z-10">
        <ul>
          <li className="w-full flex flex-col gap-2 lg:gap-3">
            {navAll.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" flex items-center gap-2 p-1 group rounded-xl hover:bg-slate-400"
              >
                <span
                  className={`flex-center bg-dark p-1 md:p-2 rounded focus:bg-[#715A5A] ${
                    path === item.href ? "bg-[#715A5A]" : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`group-hover:text-white transition-all ease-in-out duration-900 overflow-hidden ${
                    isOpen
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
        className="flex items-center gap-1 w-full py-5 px-3 absolute bottom-0 right-0 left-0 group hover:bg-slate-400"
      >
        {" "}
        <span className="flex-center bg-dark p-1 md:p-2 rounded">
          <FaDownload />
        </span>{" "}
        <span
          className={`group-hover:text-white transition-all ease-in-out duration-900 overflow-hidden ${
            isOpen ? "opacity-0 w-0 scale-0" : "opacity-100 scale-100 w-auto"
          }`}
        >
          Resume
        </span>
      </a>
    </div>
  );
};

export default Nav;
