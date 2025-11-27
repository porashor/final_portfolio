'use client'
import { useState } from 'react'
import SignIn from '../../components/SignIn'
import LogIn from '../../components/Login'

const page = () => {
  const [formt, setForm] = useState(true)
  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#c1c1c1]'>
      <SignIn formt={formt} setForm={setForm}/>
      <LogIn formt={formt} setForm={setForm}/>
    </div>
  )
}

export default page
