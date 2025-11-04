import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import ReactMarkdown from 'react-markdown';
const page = async ({ params }) => {
  const { blogpost } = await params;
  let data;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/${blogpost}`
    );
    data = await response.json();
} catch (error) {
    console.log(error);
}
const timeAgo = formatDistanceToNow(new Date(data.createdAt), { addSuffix: true });
  return (
    <div className="w-full">
      <div className="py-5 lg:py-10 w-[90%] mx-auto">
        <a href="/">Home</a> {">"} <a href="/blog">Blog</a> {">"} {data.title}
      </div>
      <hr />
      <div className="w-full flex items-center justify-center p-5 lg:p-10 ">
        <div className="relative w-[200px] md:w-[300px] lg:w-[400px] aspect-square p-5">
          <Image
            src={data.image}
            alt="My profile picture"
            className="object-cover"
            fill
          />
        </div>
      </div>
      <div className="w-[90%] py-5 lg:py-10 mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{data.title}</h1>
        <p>autor : {data.autor}</p>
        <p>Posted on : {timeAgo}</p>
      </div>
      <div className="w-[90%] mx-auto text-lg lg:text-xl leading-11 pb-5 lg:pb-10 prose prose-lg prose-slate">
        <ReactMarkdown>{data.description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default page;
