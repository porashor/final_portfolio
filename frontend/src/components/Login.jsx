'use client'
import React from 'react'
import userHandle from '../Store/UserZust'
import { IoReloadCircleOutline } from "react-icons/io5";
const LogIn = ({formt, setForm}) => {
    console.log(formt)
    const {logIn, email, password, onEmail, onPassword, sendLoading} = userHandle()
  return (
    <div className={`w-[350px] h-fit py-4 muted-rose rounded-2xl px-2 space-y-5 ${formt ? "block" : "hidden"}`}>
      <h1 className='text-xl font-bold text-white text-center '>Log In </h1>
      <form onSubmit={(e)=>logIn(e, email, password)} className='space-y-4'>
        <input required value={email} onChange={(e)=>onEmail(e.target.value)} type="email" placeholder='Email'  className='bg-slate-200 text-black py-2 px-3 w-full rounded-xl'/>
        <input required value={password} onChange={(e)=>onPassword(e.target.value)} type="password" placeholder='password'  className='bg-slate-200 text-black py-2 px-3 w-full rounded-xl'/>
        <button type="submit" className='bg-green-800 text-white py-2 px-3 w-full rounded-xl flex justify-center'>{sendLoading ? <IoReloadCircleOutline size={26} className='animate-spin text-center'/>:  "Log In"}</button>
      </form>
      <h1 className='text-slate-300'>If you are not sign in? <button className='text-red-300' onClick={() => setForm(false)}>Sign in</button></h1>
    </div>
  )
}

export default LogIn
