'use client'
import { projectHandle } from '../Store/ProjectZust'

const ProjectForm = () => {
  const {fname, feature, tecnoliges, buyer, description, image, links, siteType, role, selary, subloading, onFname, onFeature, onTecnoliges, onBuyer, onDescription, onImage, onLinks, onSiteType, onRole, onSelary, onSubmit} = projectHandle()
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
      <form onSubmit={(e)=>onSubmit(e, image, fname, feature, tecnoliges, buyer, description, links, siteType, role, selary)} className='w-full flex-col gap-5 items-center justify-between '>
        <div className='space-y-5 lg:space-y-0 flex flex-wrap items-center justify-between gap-5'>
          <input type="text" placeholder='name' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={fname} onChange={(e)=>onFname(e.target.value)} required/>
          <input type="text" placeholder='feature' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={feature} onChange={(e)=>onFeature(e.target.value)} required/>
          <input type="text" placeholder='tecnologies' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={tecnoliges} onChange={(e)=>onTecnoliges(e.target.value)} required/>
          <input type="text" placeholder='buyername' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={buyer} onChange={(e)=>onBuyer(e.target.value)} required/>
          <input type="text" placeholder='links' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={links} onChange={(e)=>onLinks(e.target.value)} required/>
          <select name="#" id="#" className='bg-light py-2 px-1 outline-none lg:w-[25%] w-full' value={role} onChange={(e)=>onRole(e.target.value)} required>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="mern">Mern</option>
              <option value="frontend-update">Frontend-update</option>
              <option value="backend-update">Backend-update</option>
              <option value="html-css">Html-css</option>
          </select>
          <select name="#" id="#" className='bg-light py-2 px-1 outline-none lg:w-[25%] w-full' value={siteType} onChange={(e)=>onSiteType(e.target.value)} required>
              <option value="e-commerce-site">E-commerce</option>
              <option value="portfolio-site">Portfolio</option>
              <option value="blog-site">blog</option>
              <option value="news-paper-site">Newspaper</option>
              <option value="landing-page">Landing-page</option>
              <option value="static-site">Static-site</option>
              <option value="megazine-site">Megazine-site</option>
              <option value="video-streaming-site">Video-steaming-site</option>
              <option value="ngo-site">NGO-site</option>
              <option value="government-site">Government-site</option>
              <option value="chatting-site">Chatting-site</option>
              <option value="q&a-site">Q&A-site</option>
          </select>
          <input required className='w-full lg:w-[10%] py-2 bg-light px-2 outline-none focus:ring' type="number" name="selary" id="#" placeholder='pogress' value={selary} onChange={(e)=>onSelary(e.target.value)}/>
          <input required className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' type="file" name="photo" id="photo" accept="image/*" onChange={(e)=>onImage(e.target.files[0])}/>
        </div>
        <div className='py-5 w-full'>
          <textarea required className='w-full py-2 bg-light px-2 outline-none focus:ring' name="text" id="#" cols="20" rows="5" placeholder='write your experience' value={description} onChange={(e)=>onDescription(e.target.value)}/>
        </div>
        <button  type='submit' className='w-full py-2 bg-light px-2 outline-none focus:ring'>{subloading ? "loading..." : "Submit"}</button>
      </form>
    </div>
  )
}

export default ProjectForm
