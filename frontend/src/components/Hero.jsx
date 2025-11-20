
import React from "react";
import img from "../../public/Parashar_Das.png";
import Image from "next/image";
import Typing from "./Typing";
import CallToAction from "./CTA";
import Details from "./Details";
const Hero = () => {
  return (
    <div className="bg-dark w-100vh h-fit flex-col-center gap-2 lg:gap-5">

      {/* introduce my self */}
      <div className="flex-col-center gap-1 py-5">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">Hi, I'm Parashar Das.</h1>
        <h1 className="text-sm md:text-xl xl:text-2xl w-[80%] mx-auto lg:w-[70%] xl:w-[60%] text-center">A passionate MERN Stack Developer crafting <span className="muted-rose py-1 px-2 capitalize">dynamic, responsive, and real-time</span> web applications using  </h1>
         <Typing text1={'"MongoDB, Express.js, React,"'} text2={"Node.js socket.io, github,"} text3={"tailwindcss, bootstrap etc."}/>
      </div>

      {/* hero area  */}
      <div className="w-[90%] mx-auto grid md:flex gap-2 md-gap-3 lg:gap-4 xl-gap-5">
        <div className="w-full lg:w-1/3 order-2 lg:order-1">
          <Details/>
        </div>
        <div className="w-full lg:w-1/3 order-1 lg:order-2 relative h-[280px] lg:h-[350px] xl:h-[500px]">
          <Image
          src={img}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="My profile picture"
          className="object-cover"
        />
        </div>
        <div className="w-full lg:w-1/3 order-3 ">
          <CallToAction/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
