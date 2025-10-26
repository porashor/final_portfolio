import React from "react";
import img from "../image/skill_banner.jpg";
import Image from "next/image";
import rlogo from "../image/react.png"
import Typing from "./Typing";
const SkillBanner = () => {
  return (
    <div
      className={`relative h-[300px] lg:h-[500px] w-full`}
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
        {/* main text area  */}
        <div className="relative w-full h-full flex-center z-100 logo-dark flex-col-center gap-3 lg:gap-5">
            <Image src={rlogo} alt="My profile picture" className="object-cover w-[100px] lg:w-[150px] animate-spin " style={{animationDuration: '2.5s'}} />
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                Skills
            </h1>
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">I specilized with <Typing text1={'MongoDB'} text2={'Express.js, Node.js'} text3={'React.js, Next.js'} /></h1>
        </div>
        {/*overlay */}
        <div className="w-full h-full bg-dark opacity-80 absolute top-0 left-0 z-1"></div>
    </div>
  );
};

export default SkillBanner;
