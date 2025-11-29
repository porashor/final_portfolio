"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import userHandle from "../Store/UserZust";
import { navItems } from "../Store/Zustand";

const PopNav = ({ isOpen, setIsOpen }) => {
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
      className={`${
        isOpen ? "translate-0 block" : "translate-y-[-1000px] "
      } absolute right-[30px] top-[100px] min-h-[200px] transition-all ease-in-out duration-500 w-[250px] bg-[#000000ce] rounded-2xl py-5 px-2 space-y-4`}
    >
      {navAll.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 focus:bg-slate-700 py-2 px-4 rounded-2xl"
        >
          {item.icon} {item.label}
        </Link>
      ))}
    </div>
  );
};

export default PopNav;
