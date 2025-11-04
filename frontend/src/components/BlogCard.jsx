import { formatDistanceToNow } from "date-fns";
import Image from 'next/image'
const BlogCard = ({blog}) => {
  const timeAgo = formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true });
  return (
    <div className='w-full bg-white min-h-[150px] rounded logo-light grid md:grid-cols-[1fr_3fr] gap-5 lowercase'>
        <div className='w-[200px] aspect-square object-cover hidden md:block relative'>
            <Image src={blog.image} fill alt='logo' className='object-cover'/>
        </div>
        <div className='flex flex-col justify-center gap-1'>
            <h1>{blog.title}</h1>
            <h1 className='text-sm font-thin'><span className='font-bold'>Author:</span> {blog.autor}</h1>
            <p className='text-sm font-thin line-clamp-2'>{blog.description}</p>
            <div className='flex items-center justify-between'>
              <a href={"blog/"+blog._id}className='muted-rose logo-dark text-xs py-1 px-2 font-thin'>read more</a>
                <p className='font-thin text-xs'>{timeAgo}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
