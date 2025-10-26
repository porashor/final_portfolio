import React from 'react'

const ContactDetails = () => {
  return (
    <div className='py-5 lg:py-10 w-[90%] mx-auto block lg:flex flex-between items-center gap-5'>
      {/* details */}
      <div className='w-full'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl py-5 font-bold'>Contact details</h1>
        <div className='space-y-2'>
          <p><span className='font-bold'>Phone:</span> <a href='tel:+8801881402678'>+880 18814-02678</a></p>
          <p><span className='font-bold'>Email:</span> <a href='meilto:porashorbabu@gmail.com?subject=Hello&body=I%20have%20a%20question'>porashorbabu@gmail.com</a></p>
          <p><span className='font-bold'>Address:</span> <a href="google.com/map">Chowmohoni, Agrabad, Chattogram</a></p>
          <p><span className='font-bold'>Facebook:</span> <a href="">Parashar das</a></p>
          <p><span className='font-bold'>Whatsapp:</span> <a href="we.me/+8801881402678">+8801881402678</a></p>
          <p><span className='font-bold'>LinkedIn:</span> <a href="">Parashar Das</a></p>
          <p><span className='font-bold'>Instagram:</span> <a href="">Parashar Das</a></p>
          <p><span className='font-bold'>Fiverr:</span> <a href="">Parashar Das</a></p>
          <p><span className='font-bold'>Upwork:</span> <a href="">Parashar Das</a></p>
          <p><span className='font-bold'>GitHub:</span> <a href="">Parashar Das</a></p>
        </div>
      </div>
      {/* form  */}
      <div className='w-full'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl py-5 font-bold'>Paid Consultentency</h1>
        <p>From: 100taka</p>
        <form action="#" method="post" className='flex flex-col w-full my-5 space-y-2 lg:space-y-5'>
          <input type="text" placeholder='Enter Name...' className='w-full py-2 px-2 lg:px-4 rounded-md outline-none focus:ring-2 ring-[#715A5A]' />
          <input type="number" placeholder='Enter Phone Number...' className='w-full py-2 px-2 lg:px-4 rounded-md outline-none focus:ring-2 ring-[#715A5A]' />
          <input type="email" placeholder='Enter Email...' className='w-full py-2 px-2 lg:px-4 rounded-md outline-none focus:ring-2 ring-[#715A5A]' />
          <select name="#" id="#" className='w-full py-2 px-2 lg:px-4 rounded-md outline-none '>
            <option value="1">20 minute</option>
            <option value="2">40 minute</option>
            <option value="3">60 minute</option>
            <option value="4">80 minute</option>
            <option value="5">100 minute</option>
          </select>
          <select name="#" id="#" className='w-full py-2 px-2 lg:px-4 rounded-md outline-none '>
            <option value="1">PSD/Figma/XD to Html</option>
            <option value="1">PSD/Figma/XD to React</option>
            <option value="1">Landing Page</option>
            <option value="1">Node backend development</option>
            <option value="1">Database setup</option>
            <option value="1">Complete MERN stack project</option>
            <option value="1">Next js CSR, SSR</option>
            <option value="1">Portfolio website</option>
            <option value="1">E-commerce website</option>
            <option value="1">Blog website</option>
            <option value="1">CMS- wordpress</option>
          </select>
          <select name="#" id="#" className='w-full py-2 px-2 lg:px-4 rounded-md outline-none'>
            <option value="1">Time Zone - (+6:00) 6AM - 12PM </option>
            <option value="1">Time Zone - (+6:00) 12PM - 6PM </option>
            <option value="1">Time Zone - (+6:00) 6PM - 12AM </option>
            <option value="1">Time Zone - (+6:00) 12AM - 6AM </option>
          </select>
          <input type="submit" value={'Book Now'} className='w-full py-2 px-2 lg:px-4 rounded-md outline-none muted-rose logo-dark'/>
        </form>
      </div>
    </div>
  )
}

export default ContactDetails
