'use client'
import { RecentWorkHandles } from "../Store/RecentWorkZus"
const RecentWorks = () => {
  const {projectName, stack, feature, links, image, tecnologies, duration, rate, description, loading, onProjectName, onStack, onFeature, onLinks,  onTecnologies, onDuration, onRate, onDescription, onImage, onSubmitNow} = RecentWorkHandles()
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
      <form onSubmit={(e)=>onSubmitNow(e, image, projectName, stack, feature, links, tecnologies, duration, rate, description)} className='w-full flex-col gap-5 items-center justify-between '>
        <div className='space-y-5 lg:space-y-0 flex flex-wrap items-center justify-between gap-5'>
          <input type="text" placeholder='Project Name' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={projectName} onChange={(e)=>onProjectName(e.target.value)} required/>
          <input type="text" placeholder='Features' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={feature} onChange={(e)=>onFeature(e.target.value)} required/>
          <input type="text" placeholder='links' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={links} onChange={(e)=>onLinks(e.target.value)} required/>
          <input type="text" placeholder='Technologies' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={tecnologies} onChange={(e)=>onTecnologies(e.target.value)} required/>
          <input type="text" placeholder='Duration' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={duration} onChange={(e)=>onDuration(e.target.value)} required/>
          <select name="stack" id="stack" className='bg-light py-2 px-1 outline-none lg:w-[25%] w-full' value={stack} onChange={(e)=>onStack(e.target.value)} required>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full-stack</option>
            <option value="database">Database</option>
            <option value="bug-fix">Bug_Fix</option>
            <option value="midea upload">Midea upload</option>
            <option value="payment integration">Payment integration</option>
          </select>
          <input required className='w-full lg:w-[10%] py-2 bg-light px-2 outline-none focus:ring' type="number" name="rate" id="#" placeholder='Rate' min="0" max='5' value={rate} onChange={(e)=>onRate(e.target.value)}/>
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

export default RecentWorks
