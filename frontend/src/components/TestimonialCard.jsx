import { IoIosStar } from "react-icons/io";
import { Skeleton } from "./ui/skeleton";
const TestimonialCard = ({testimonials}) => {
  console.log(testimonials)
  const arr = Array.from({ length: testimonials.rating }, (_, i) => i);
  console.log(arr)
  return (
    <div className="w-[350px] min-h-[400px] bg-light rounded-2xl py-10 px-3 group my-3">
      <img
        src={testimonials.image}
        alt=""
        className="w-20 aspect-square object-cover mx-auto rounded-full border-4 group-hover:scale-150 group-hover:rotate-360 transition-all ease-in-out duration-1000 group-hover:-translate-y-20"
      />
      <div className="text-center flex items-center justify-center gap-1 py-3 text-xl">
        {arr.length > 0 && arr.map((_, index) => <IoIosStar key={index} className="text-yellow-400" />)}
      </div>
      <p className="text-center">{testimonials.position}</p>
      <h1 className="text-center font-bold text-2xl py-3">
        {testimonials.name || <Skeleton className="w-[200px] h-5"/>}
      </h1>
      <p className="text-center min-h-[120px] line-clamp-4 h-[130px]">
        <span className="text-6xl font-bold ">"</span>
        {testimonials.description}
      </p>
    </div>
  );
};

export default TestimonialCard;
