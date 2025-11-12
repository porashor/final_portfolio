'use client'
import { PlanHandle } from '../Store/PlanZus'
const PlanForm = () => {
  const {pName, price, description, image, features, duration, onPname, onPrice, onDescription, onImage, onFeatures, onDuration, loading, onSubmitNow} = PlanHandle()
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
      <form onSubmit={(e)=>onSubmitNow(e, pName, price, description, image, features, duration)} className='w-full flex-col gap-5 items-center justify-between '>
        <div className='space-y-5 lg:space-y-0 flex flex-wrap items-center justify-between gap-5'>
          <input type="text" placeholder='Plan name' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={pName} onChange={(e)=>onPname(e.target.value)} required/>
          <input type="text" placeholder='all features' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={features} onChange={(e)=>onFeatures(e.target.value)} required/>
          <input type="text" placeholder='duration' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={duration} onChange={(e)=>onDuration(e.target.value)} required/>
          <input required className='w-full lg:w-[10%] py-2 bg-light px-2 outline-none focus:ring' type="number" name="price" id="#" placeholder='pogress' min="0" value={price} onChange={(e)=>onPrice(e.target.value)}/>
          <input required className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' type="file" name="photo" id="photo" accept="image/*" onChange={(e)=>onImage(e.target.files[0])}/>
        </div>
        <div className='py-5 w-full'>
          <textarea required className='w-full py-2 bg-light px-2 outline-none focus:ring' name="text" id="#" cols="20" rows="5" placeholder='write your experience' value={description} onChange={(e)=>onDescription(e.target.value)}/>
        </div>
        <button  type='submit' className='w-full py-2 bg-light px-2 outline-none focus:ring'>{loading ? "loading..." : "Submit"}</button>
      </form>
    </div>
  )
}

export default PlanForm
