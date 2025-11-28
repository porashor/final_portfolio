'use client'

import Image from "next/image"
const ProfileDes = ({getLoading, profile}) => {
    
  return (
    getLoading ? "loading" : <div className="w-full h-fit border p-4 rounded-lg ">
      <div className=" flex flex-col gap-4">
        <div>
            {profile && <Image src={profile.img} width={200} height={200} alt="profile pic" className="rounded-full mx-auto"/>}
        </div>
        <div className="flex gap-2 items-center ">
            <label >Name : </label>
            <h1 className="text-center text-2xl font-bold ">{profile?.name}</h1>
        </div>
        <div className="flex gap-2 items-center">
            <label >Email : </label>
            <h1 className="text-center text-lg ">{profile?.email}</h1>
        </div>
        <div className="flex gap-2 items-center">
            <label >Phone : </label>
            <h1 className="text-center text-lg ">{profile?.phone}</h1>
        </div>
      </div>
    </div>
  )
}

export default ProfileDes




