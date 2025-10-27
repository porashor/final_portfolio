"use client";
import { TypeAnimation } from "react-type-animation";

const Typing = ({text1, text2, text3}) => {
      
  return (
    <TypeAnimation
      sequence={[
        text1, 
        2000,
        text2,
        2000,
        text3,
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-xl md:text-2xl xl:text-3xl font-bold"
      
    />
  );
};

export default Typing;
