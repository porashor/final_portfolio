'use client'
import userHandle from "@/Store/UserZust"
import Image from "next/image"
const ProfileDes = ({getLoading, profile}) => {
    const {updatepicProfile, profileLoading, image, onImage, signOut, signoutloading} = userHandle()
  return (
    getLoading ? "loading" : <div className="w-full h-fit border p-4 rounded-lg ">
      <div className=" flex flex-col gap-4">
        <div>
            {profile && <Image src={profile.img} width={200} height={200} alt="profile pic" className="rounded-full mx-auto w-40 aspect-square object-cover"/>}
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
        <div>
          <input type="file" required  onChange={(e)=>onImage(e.target.files[0])}/>
          <button onClick={(e)=>updatepicProfile(e, profile._id, image)} className="bg-green-300 w-full py-2 rounded-xl mt-3">{profileLoading? "loading...": "update profile pic"}</button>
          <button onClick={(e)=>signOut()} className="bg-red-300 w-full py-2 rounded-xl mt-3">{signoutloading? "loading...": "Sign Out"}</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileDes




