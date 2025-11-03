'use client'
import { useState, useEffect } from "react";
import { ConsultantHandle } from "../Store/ConsultantZus";
const ConsultantForm = () => {
    const [cost, setCost] = useState(100);
    const [time, setTime] = useState(1);
    const { fname, email, phone, subject, duration, timeStand, onFname, onEmail, onPhone, onSubject, onDuration, onTimeStand, loading, onSubmitNow } = ConsultantHandle();
    useEffect(() => {
        if (duration === "20min") {
            setTime(1)
        }else if (duration === "40min") {
            setTime(2)
        }else if (duration === "60min") {
            setTime(3)
        }else if (duration === "80min") {
            setTime(4)
        }else if (duration === "100min") {
            setTime(5)
        }
    })
    useEffect(() => {
        if (subject === "PSD/Figma/XD to Html") {
            setCost((prev)=> time*100)
        }else if (subject === "PSD/Figma/XD to React") {
            setCost((prev)=> time*300)
        }else if (subject === "PSD/Figma/XD to Next") {
            setCost((prev)=> time*500)
        }else if (subject === "Landing Page") {
            setCost((prev)=> time*400)
        }else if (subject === "Node backend development") {
            setCost((prev)=> time*600)
        }else if (subject === "Database setup") {
            setCost((prev)=> time*500)
        }else if (subject === "Next js CSR, SSR") {
            setCost((prev)=> time*500)
        }else if (subject === "Portfolio website") {
            setCost((prev)=> time*1000)
        }else if (subject === "E-commerce website") {
            setCost((prev)=> time*1200)
        }else if (subject === "Blog website") {
            setCost((prev)=> time*1000)
        }else if (subject === "CMS- wordpress") {
            setCost((prev)=> time*700)
        }
    }, [subject, duration])
    console.log(cost)
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl lg:text-4xl py-5 font-bold">
        Paid Consultentency
      </h1>
      <p>From: 100taka</p>
      <form
        action="#"
        method="post"
        onSubmit={(e)=>onSubmitNow(e, fname, email, phone, subject, duration, timeStand, cost )}
        className="flex flex-col w-full my-5 space-y-2 lg:space-y-5"
      >
        <input
          type="text"
          placeholder="Enter Name..."
          value={fname}
          onChange={(e) => onFname(e.target.value)}
          className="w-full py-2 px-2 lg:px-4 rounded-md outline-none focus:ring-2 ring-[#715A5A]"
        />
        <input
          type="number"
          value={phone}
          onChange={(e) => onPhone(e.target.value)}
          placeholder="Enter Phone Number..."
          className="w-full py-2 px-2 lg:px-4 rounded-md outline-none focus:ring-2 ring-[#715A5A]"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => onEmail(e.target.value)}
          placeholder="Enter Email..."
          className="w-full py-2 px-2 lg:px-4 rounded-md outline-none focus:ring-2 ring-[#715A5A]"
        />
        <select
          name="#"
          id="#"
          value={duration}
          onChange={(e) => onDuration(e.target.value)}
          className="w-full py-2 px-2 lg:px-4 rounded-md outline-none "
        >
          <option value="20min">20 minute</option>
          <option value="40min">40 minute</option>
          <option value="60min">60 minute</option>
          <option value="80min">80 minute</option>
          <option value="100min">100 minute</option>
        </select>
        <select
          name="#"
          id="#"
          value={subject}
          onChange={(e) => onSubject(e.target.value)}
          className="w-full py-2 px-2 lg:px-4 rounded-md outline-none "
        >
          <option value="PSD/Figma/XD to Html">PSD/Figma/XD to Html</option>
          <option value="PSD/Figma/XD to React">PSD/Figma/XD to React</option>
          <option value="PSD/Figma/XD to Next">PSD/Figma/XD to Next</option>
          <option value="Landing Page">Landing Page</option>
          <option value="Node backend development">Node backend development</option>
          <option value="Database setup">Database setup</option>
          <option value="Complete MERN stack project">Complete MERN stack project</option>
          <option value="Next js CSR, SSR">Next js CSR, SSR</option>
          <option value="Portfolio website">Portfolio website</option>
          <option value="E-commerce website">E-commerce website</option>
          <option value="Blog website">Blog website</option>
          <option value="CMS- wordpress">CMS- wordpress</option>
        </select>
        <select
          name="#"
          id="#"
          value={timeStand}
          onChange={(e) => onTimeStand(e.target.value)}
          className="w-full py-2 px-2 lg:px-4 rounded-md outline-none"
        >
          <option value="6a-12p">Time Zone - (+6:00) 6AM - 12PM </option>
          <option value="12p-6p">Time Zone - (+6:00) 12PM - 6PM </option>
          <option value="6p-12a">Time Zone - (+6:00) 6PM - 12AM </option>
          <option value="12a-6a">Time Zone - (+6:00) 12AM - 6AM </option>
        </select>
        <h1>Cost : {cost} taka</h1>
        <input
          type="submit"
          value={"Book Now"}
          className="w-full py-2 px-2 lg:px-4 rounded-md outline-none muted-rose logo-dark"
        />
      </form>
    </div>
  );
};

export default ConsultantForm;
