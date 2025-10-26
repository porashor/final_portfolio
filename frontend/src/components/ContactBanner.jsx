import React from "react";
import img from "../image/contact_banner.jpg";
import Typing from "./Typing";
const ContactBanner = () => {
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Contact</h1>
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">Contact me to know <Typing text1={'prices'} text2={'project type'} text3={'advantage'} /></h1>
        </div>
        {/*overlay */}
        <div className="w-full h-full bg-dark opacity-80 absolute top-0 left-0 z-1"></div>
    </div>
  );
};

export default ContactBanner;
