'use client'
import { upSkill } from '../Store/Zustand'
const SkillForm = () => {
  const {tecName, state, description, pogress, image, onName, onState, onDescription, onPogress, onImage, loading, onSubmitNow} = upSkill()
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
      <form onSubmit={(e)=>onSubmitNow(e, image, tecName, state, description, pogress)} className='w-full flex-col gap-5 items-center justify-between '>
        <div className='space-y-5 lg:space-y-0 flex flex-wrap items-center justify-between gap-5'>
          <input type="text" placeholder='name' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={tecName} onChange={(e)=>onName(e.target.value)} required/>
          <select name="#" id="#" className='bg-light py-2 px-1 outline-none lg:w-[25%] w-full' value={state} onChange={(e)=>onState(e.target.value)} required>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="state">State</option>
              <option value="route">Route</option>
              <option value="ui/ux">UI/UX</option>
              <option value="websocket">Web Socket</option>
              <option value="version control">Version Control</option>
              <option value="virtual">Virtual</option>
              <option value="database">Database</option>
              <option value="deploy">Deploy</option>
              <option value="environment">Envirnment</option>
              <option value="media">Media</option>
              <option value="cms">CMS</option>
              <option value="api">API</option>
          </select>
          <input required className='w-full lg:w-[10%] py-2 bg-light px-2 outline-none focus:ring' type="number" name="pogress" id="#" placeholder='pogress' min="0" max='100' value={pogress} onChange={(e)=>onPogress(e.target.value)}/>
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

export default SkillForm
