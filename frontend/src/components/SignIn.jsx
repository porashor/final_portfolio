'use client'
import React from 'react'
import userHandle from '../Store/UserZust'
import { IoReloadCircleOutline } from "react-icons/io5";


const SignIn = ({formt, setForm}) => {
  const {name, email, phone, password, onName, onEmail, onPhone, onPassword, sendLoading, signIn} = userHandle()
  return (
    <div className={`w-[350px] h-fit py-4 muted-rose rounded-2xl px-2 space-y-5 transition-all ease-in-out ${formt ? "hidden" : "block"}`}>
      <h1 className='text-xl font-bold text-white text-center '>Sign In </h1>
      <form onSubmit={(e) => signIn({ e, name, email, phone, password })}   className='space-y-4'>
        <input required value={name} onChange={(a)=>onName(a.target.value)} type="text" placeholder='Type your name...'  className='bg-slate-200 text-black py-2 px-3 w-full rounded-xl'/>
        <input required value={email} onChange={(a)=>onEmail(a.target.value)} type="email" placeholder='Type your email...'  className='bg-slate-200 text-black py-2 px-3 w-full rounded-xl'/>
        <input required value={phone} onChange={(a)=>onPhone(a.target.value)} type="tel" placeholder='Type your phone...'  className='bg-slate-200 text-black py-2 px-3 w-full rounded-xl'/>
        <input required value={password} onChange={(a)=>onPassword(a.target.value)} type="password" placeholder='Type your password...'  className='bg-slate-200 text-black py-2 px-3 w-full rounded-xl'/>
        <button type="submit" className='bg-green-800 text-white py-2 px-3 w-full rounded-xl flex justify-center'>{sendLoading ? <IoReloadCircleOutline size={26} className='animate-spin text-center'/>:  "Sign In"}</button>
      </form>
      <h1 className='text-slate-300'>If you already sign in? <button className='text-red-300 cursor-pointer' onClick={() => setForm(true)}>Log in</button></h1>
    </div>
  )
}

export default SignIn
