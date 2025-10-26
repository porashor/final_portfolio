import { IoIosStar } from "react-icons/io";
const TestimonialCard = ({testimonials}) => {
  return (
    <div className="w-[350px] min-h-[400px] bg-light rounded-2xl py-10 px-3 hover:scale-105 transition-all ease-in-out duration-500">
      <img
        src={testimonials.avatar.src}
        alt=""
        className="w-[80px] aspect-square mx-auto rounded-full border-4"
      />
      <div className="text-center flex items-center justify-center gap-1 py-3 text-xl">
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
      </div>
      <p className="text-center">{testimonials.role}</p>
      <h1 className="text-center font-bold text-2xl py-3">
        {testimonials.name}
      </h1>
      <p className="text-center">
        <span className="text-6xl font-bold">"</span>
        {testimonials.feedback}
      </p>
    </div>
  );
};

export default TestimonialCard;
