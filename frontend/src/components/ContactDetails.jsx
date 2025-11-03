import React from 'react'
import ConsultantForm from './ConsultantForm'

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
      <ConsultantForm/>
    </div>
  )
}

export default ContactDetails
