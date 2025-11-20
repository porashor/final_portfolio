import { IoIosStar } from "react-icons/io";
const TestimonialCard = ({testimonials}) => {
  console.log(testimonials)
  const arr = Array.from({ length: testimonials.rating }, (_, i) => i);
  console.log(arr)
  return (
    <div className="w-[350px] min-h-[400px] bg-light rounded-2xl py-10 px-3 hover:scale-105 transition-all ease-in-out duration-500">
      <img
        src={testimonials.image}
        alt=""
        className="w-[80px] aspect-square object-cover mx-auto rounded-full border-4"
      />
      <div className="text-center flex items-center justify-center gap-1 py-3 text-xl">
        {arr.length > 0 && arr.map((_, index) => <IoIosStar key={index} className="text-yellow-400" />)}
      </div>
      <p className="text-center">{testimonials.position}</p>
      <h1 className="text-center font-bold text-2xl py-3">
        {testimonials.name}
      </h1>
      <p className="text-center min-h-[120px] line-clamp-4 h-[130px]">
        <span className="text-6xl font-bold ">"</span>
        {testimonials.description}
      </p>
    </div>
  );
};

export default TestimonialCard;
